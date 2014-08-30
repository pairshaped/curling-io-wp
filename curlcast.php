<?php
/*
Plugin Name: Curlcast Stats
Description: Displays Curlcast Stats.
Version: 1.0.5
Author: Pairshaped Inc.
*/
if (!class_exists('curlcast')) {
  define('WP_CURLCAST_VERSION', '1.0.5');

  # Production
  define('WP_CURLCAST_BASE_URL', 'http://curlcast.ca/stats');

  # Staging
  #define('WP_CURLCAST_BASE_URL', 'http://curlcast-staging.ca/stats');

  # Dev
  #define('WP_CURLCAST_BASE_URL', 'http://curling.dev/stats');

  define('WP_CURLCAST_WIDGET_URL', WP_CURLCAST_BASE_URL . '/competitions/scoreboard_mini.html');
  define('WP_CURLCAST_UPDATE_URL', 'http://wordpress.curlcast.ca/update.php');

  defined('DS') or define('DS', DIRECTORY_SEPARATOR);

  class curlcast {
    static $tabs;
    static $templates = array(
      '^competitions$' => 'competitions.php',
      '^games' => 'boxscore.php',
      'teams$' => 'teams.php',
      'standings$' => 'standings.php',
      'scoreboard$' => 'scoreboard.php',
      'widget' => 'scoreboard_mini.php',
      'default' => 'competitions.php'
    );

    /**
     * Create all actions and hooks
     */
    function init() {
      self::$tabs = array(
        'settings' => array(
          'title' => __('Settings', 'curlcast'),
          'settings' => array(
            'curlcast_enabled' => array(
              'name' => __('Enable plugin', 'curlcast'),
              'helptext' => __('Enable curlcast plugin', 'curlcast'),
              'default' => 'yes',
              'type' => 'radio',
              'values' => array(
                'yes' => __('Yes', 'curlcast'),
                'no' => __('No', 'curlcast')
              )
            ),
            'curlcast_api_key' => array(
              'name' => __('Access Key', 'curlcast'),
              'helptext' => __('Key for requests', 'curlcast'),
              'default' => '',
              'required' => 'yes',
              'type' => 'text'
            ),
            'curlcast_page_id' => array(
              'name' => __('Page', 'curlcast'),
              'helptext' => __('Page used for plugin output', 'curlcast'),
              'default' => '',
              'required' => 'yes',
              'type' => 'dropdown_pages'
            ),
            'curlcast_page_prefix' => array(
              'name' => __('Page prefix', 'curlcast'),
              'helptext' => __('Page prefix used for routing', 'curlcast'),
              'default' => 'stats',
              'required' => 'yes',
              'type' => 'text'
            )
          )
        )
      );

      //Add settings page
      add_action('admin_menu', array(
        'curlcast',
        'admin_menu'
      ), 1);

      register_activation_hook(__FILE__, array(
        'curlcast',
        'install'
      ));
      register_deactivation_hook(__FILE__, array(
        'curlcast',
        'uninstall'
      ));

      if (get_option('curlcast_enabled', 'yes') == 'yes') {
        add_action('init', array(
          'curlcast',
          'main'
        ), 1);
        add_filter('query_vars', array(
          'curlcast',
          'query_vars'
        ), 10);
        add_action('admin_notices', array(
          'curlcast',
          'admin_notice'
        ));

        add_action('template_redirect', array(
          'curlcast',
          'template_redirect'
        ), 11);
        add_action('wp_loaded', array(
          'curlcast',
          'flush_rules'
        ));
        add_action('widgets_init', array(
          'curlcast',
          'load_widget'
        ));

        add_shortcode('curlcast', array(
          'curlcast',
          'shortcode'
        ));

        add_action('wp_enqueue_scripts', array(
          'curlcast',
          'enqueue_styles'
        ), 100);
      }
    }

    /**
     * Install plugin
     */
    function install() {
      foreach (self::$tabs as $tab => $settings) {
        foreach ($settings['settings'] as $option => $params) {
          add_option($option, $params['default']);
        }
      }
      $page_id = get_option('curlcast_page_id');
      if(!$page_id) {
        global $user_ID;
        $page = array(
          'post_type' => 'page',
          'post_name' => 'stats',
          'post_content' => '[curlcast]',
          'post_parent' => 0,
          'post_author' => $user_ID,
          'post_status' => 'publish',
          'post_title' => 'Curlcast Stats',
          'comment_status' => 'closed'
          );
        $page_id = wp_insert_post($page);
        update_option('curlcast_page_id',$page_id);
        add_post_meta($page_id, '_wp_page_template', 'default');
        $page_data = get_post($page_id, ARRAY_A);
        $slug = $page_data['post_name'];
        update_option('curlcast_page_prefix',$slug);
      }
    }

    /**
     * Uninstall plugin
     */
    function uninstall() {
      foreach (self::$tabs as $tab => $settings) {
        foreach ($settings['settings'] as $option => $params) {
          delete_option($option);
        }
      }
    }

    /**
     * Admin plugin page
     */
    function admin_menu() {
      add_menu_page('Curlcast Options', 'Curlcast', 8, __FILE__, array(
        'curlcast',
        'settings'
      ), plugins_url('settings.gif', __FILE__));
    }

    /**
     * Display settings notice
     */
    function admin_notice() {
      $no_required = false;
      foreach (self::$tabs as $tab => $settings) {
        foreach ($settings['settings'] as $option => $params) {
          if ($params['required'] == 'yes') {
            if (isset($_POST[$option])) {
              if (trim($_POST[$option]) == '')
                $no_required = true;
            } else {
              if (trim(get_option($option)) == '')
                $no_required = true;
            }
          }
        }
      }

      if ($no_required) {
        echo '<div class="error fade"><p>' . sprintf(__('Curlcast is not configured. Remember to <a href="%1$s">configure all required settings</a> when you are ready to start.', 'curlcast'), 'admin.php?page=curlcast/curlcast.php') . '</p></div>';
      }
    }

    /**
     * Init actions
     */
    function main() {
      $page_prefix = get_option('curlcast_page_prefix');
      $page_id = get_option('curlcast_page_id');
      add_rewrite_rule($page_prefix . '/(.*?)$', 'index.php?page_id='.$page_id.'&curlcast_page=$matches[1]', 'top');
      self::auto_update();
    }

    /**
     * Flush cache
     */
    function flush_rules() {
      $rules       = get_option('rewrite_rules');
      $page_prefix = get_option('curlcast_page_prefix');

      if (!isset($rules[$page_prefix . '/(.*?)$']) or 1) {
        global $wp_rewrite;
        $wp_rewrite->flush_rules(false);
      }
    }

    /**
     * Parse query vars
     *
     * @param array
     * @return array
     */
    function query_vars($query_vars) {
      $query_vars[] = 'curlcast_page';
      return $query_vars;
    }

    /**
     * Display
     *
     * @param array
     * @return html
     */
    function template_redirect($params = array()) {
      global $wp_query;

      $curlcast_page = $wp_query->query_vars['curlcast_page'];

      $page_id  = get_option('curlcast_page_id');
      if ($curlcast_page != '') {
		$wp_query->query_vars['curlcast_page'] = $curlcast_page;
      }
    }

    /**
     * Add header styles
     */
    function enqueue_styles() {
      if(!is_admin()) {
        wp_enqueue_style('curlcast-style', plugins_url('css/app.css', __FILE__));
        wp_enqueue_script('jquery.postmessage', plugins_url('js/jquery.postmessage.min.js', __FILE__));
        wp_enqueue_script('curlcast-script', plugins_url('js/app.js', __FILE__));
      }
    }

    /**
     * Process page routing
     *
     * @param array
     * @return html
     */
    function process_routing($curlcast_array) {
      $access_key  = get_option('curlcast_api_key');
      $page_prefix = get_option('curlcast_page_prefix');
      $base_url    = get_site_url().'/'.$page_prefix;

      $params = array();
      $params['access_key'] = $access_key;
      $params['base_url'] = $base_url;
      $params = array_merge($params, $_GET);
      $query = http_build_query($params);

      $url = WP_CURLCAST_BASE_URL . '/' . implode('/', $curlcast_array) . '?'.$query;

      foreach (self::$templates as $pattern => $section) {
        if (preg_match("/$pattern/", implode('/', $curlcast_array))) {
          break;
        }
      }
      $template_file = plugin_dir_path(__FILE__) . 'templates/' . $section;

      $template = file_get_contents($template_file);
      $template = str_replace('{url}', $url, $template);

      return $template;
    }

    /**
     * Shortcode
     */
    function shortcode() {
      global $wp_query;
      $curlcast_page = $wp_query->query_vars['curlcast_page'];
      $curlcast_array = explode('/', trim($curlcast_page, '/'));
      return self::process_routing($curlcast_array);
    }

    /**
     * Init widget
     */
    function load_widget() {
      register_widget('curlcast_widget');
    }

    /**
     * Settings page
     *
     * @return html
     */
    function settings() {
      $message = '';
      if (!empty($_POST['submit'])) {
        $message = self::update_settings($_POST);
        $message = '<h3>' . $message . '</h3>';
      }

      $tabs    = array(
        'settings' => __('Settings', 'curlcast'),
        'templates' => __('Templates', 'curlcast')
      );
      $current = $_GET['tab'];
      if (!$current)
        $current = 'settings';

      echo '<div class="wrap">
        <h2>Curlcast Settings</h2>
        <br />';

      if ($message)
        echo $message . '<br/>';

      if (count(self::$tabs) > 1) {
        echo '<h2 class="nav-tab-wrapper">';
        foreach (self::$tabs as $tab => $settings) {
          $class = ($tab == $current) ? ' nav-tab-active' : '';
          echo '<a class="nav-tab' . $class . '" href="?page=curlcast/curlcast.php&tab=' . $tab . '">' . $settings['title'] . '</a>';
        }
        echo '</h2>';
      }


      foreach (self::$tabs as $tab => $settings) {
        if ($tab == $current) {
          self::settings_form($settings['settings']);
        }
      }

      echo '</div>';
    }

    /**
     * Render form
     *
     * @param array
     * @return html
     */
    function settings_form($settings) {
      echo '
        <div class="stuffbox">
          <form action="" method="post">
            <h3 style="margin:0; padding: 10px">
              <input type="submit" name="submit" class="button action" value="Save">
            </h3>
            <table class="wp-list-table widefat fixed posts">
      ';

      foreach ($settings as $option => $params) {
        $help = $params['helptext'];

        $value = get_option($option, $params['default']);
        $color = '';
        if ($params['required'] == 'yes') {
          $required = ' <span>*</span>';
          if (!empty($_POST['submit']) && trim($_POST[$option]) == '') {
            $color = 'color:#BD1C1C;';
          }
        } else {
          $required = '';
        }

        switch ($params['type']) {
          case 'checkbox':
            if ($value == 'yes')
              $checked = 'checked="checked"';
            else
              $checked = '';
            $edit = '<p style="margin: 2px"><input id="' . htmlspecialchars($option) . '" type="checkbox" name="' . htmlspecialchars($option) . '" value="yes" ' . $checked . '/>&nbsp;&nbsp;&nbsp;<i style="color:#aaa">' . $help . '</i></p>';
            break;

          case 'radio':
            $edit = '<p style="margin: 2px">';
            while (list($option_key, $option_name) = each($params['values'])) {
              if ($value == $option_key)
                $checked = 'checked="checked"';
              else
                $checked = '';
              $edit .= '<input id="' . htmlspecialchars($option . $option_key) . '" type="radio" name="' . htmlspecialchars($option) . '" value="' . $option_key . '" ' . $checked . '/>&nbsp;<i>' . $option_name . '</i>&nbsp;&nbsp;&nbsp;';
            }

            $edit .= '<i style="color:#aaa">' . $help . '</i></p>';
            break;

          case 'text':
            $edit = '<input id="' . htmlspecialchars($option) . '" type="text" name="' . htmlspecialchars($option) . '" value="' . htmlspecialchars($value) . '" style="width:100%;"/>
                <p style="margin:2px 0;color:#aaa"><i>' . $help . '</i></p>';
            break;

          case 'textarea':
            $edit = '<textarea id="' . htmlspecialchars($option) . '" name="' . htmlspecialchars($option) . '" style="width:100%;height:70px;">' . htmlspecialchars(stripslashes($value)) . '</textarea>
                <p style="margin:2px 0;color:#aaa"><i>' . $help . '</i></p>';
            break;

          case 'dropdown_pages':

            $args = array(
              'depth' => 0,
              'child_of' => 0,
              'selected' => $value,
              'echo' => 0,
              'name' => $option,
              'id' => '',
              'show_option_none' => '',
              'show_option_no_change' => '',
              'option_none_value' => ''
            );
            $edit = wp_dropdown_pages($args);
            $edit .= '<br /><i style="color:#aaa">' . $help . '</i>';
            break;
        }

        echo '
          <tr>
            <td width="100" valign="top" style="padding:10px;' . $color . '"><label for="' . htmlspecialchars($option) . '">' . htmlspecialchars($params['name']) . $required . '</label></td>
            <td valign="top">' . $edit . '</td>
          </tr>
        ';
      }



      echo '</table>
        </form>
      </div>';
    }

    /**
     * Save settings
     *
     * @param array
     * @return string
     */
    function update_settings($saved) {
      $required = true;

      foreach (self::$tabs as $tab => $settings) {
        foreach ($settings['settings'] as $option => $params) {
          if (isset($saved[$option])) {
            $value = trim($saved[$option]);
            if ($params['required'] == 'yes' && $value == '')
              $required = false;
            update_option($option, $value);
          }
        }
      }

      if (!$required) {
        return __('Please fill in all required fields', 'curlcast');
      } else {
        return __('Settings have been updated', 'curlcast');
      }
    }

    /**
     * Auto update
     */
    function auto_update() {
      new curlcast_auto_update(WP_CURLCAST_VERSION, WP_CURLCAST_UPDATE_URL, plugin_basename(__FILE__));
    }
  }

  /**
   * Custom widget
   */
  class curlcast_widget extends WP_Widget {
    function __construct() {
      parent::__construct('curlcast_widget', __('Curlcast Widget', 'curlcast'), array(
        'description' => __('Scoreboard mini widget', 'curlcast')
      ));
    }

    /**
     * Widget render
     */
    public function widget($args, $instance) {
      $title = apply_filters('widget_title', $instance['title']);
      echo $args['before_widget'];
      if (!empty($title)) {
        echo $args['before_title'] . $title . $args['after_title'];
      }

      $access_key  = get_option('curlcast_api_key');
      $page_prefix = get_option('curlcast_page_prefix');
      $base_url    = get_site_url() . '/' . $page_prefix;
      $url         = WP_CURLCAST_WIDGET_URL . '?access_key=' . urlencode($access_key) . '&base_url=' . urlencode($base_url);

      $template_file = curlcast::$templates['widget'];
      $template = file_get_contents(plugin_dir_path(__FILE__) . 'templates/' . $template_file);
      $template = str_replace('{url}', $url, $template);

      echo $template;

      echo $args['after_widget'];
    }
    /**
     * Widget admin form
     */
    public function form($instance) {
      if ($instance) {
        $title  = $instance['title'];
      } else {
        $title  = __('Scoreboard mini', 'curlcast');
      }
?>
        <p>
          <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
          <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
        </p>
<?php
    }

    /**
     * Update
     */
    public function update($new_instance, $old_instance) {
      $instance           = $old_instance;
      $instance['title']  = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
      return $instance;
    }
  }

  class curlcast_auto_update {
    /**
     * The plugin current version
     *
     * @var string
     */
    public $current_version;

    /**
     * The plugin remote update path
     *
     * @var string
     */
    public $update_path;

    /**
     * Plugin Slug (plugin_directory/plugin_file.php)
     *
     * @var string
     */
    public $plugin_slug;

    /**
     * Plugin name (plugin_file)
     *
     * @var string
     */
    public $slug;

    /**
     * Initialize a new instance of the WordPress Auto-Update class
     *
     * @param string $current_version
     * @param string $update_path
     * @param string $plugin_slug
     */
    function __construct($current_version, $update_path, $plugin_slug) {
      // Set the class public variables
      $this->current_version = $current_version;
      $this->update_path     = $update_path;
      $this->plugin_slug     = $plugin_slug;
      list($t1, $t2) = explode('/', $plugin_slug);
      $this->slug = str_replace('.php', '', $t2);

      // define the alternative API for updating checking
      add_filter('pre_set_site_transient_update_plugins', array(
        &$this,
        'check_update'
      ));

      // Define the alternative response for information checking
      add_filter('plugins_api', array(
        &$this,
        'check_info'
      ), 10, 3);
    }

    /**
     * Add our self-hosted autoupdate plugin to the filter transient
     *
     * @param $transient
     * @return object $ transient
     */
    public function check_update($transient) {
      if (empty($transient->checked)) {
        return $transient;
      }

      // Get the remote version
      $remote_version = $this->getRemote_version();

      // If a newer version is available, add the update
      if (version_compare($this->current_version, $remote_version, '<')) {
        $obj                                     = new stdClass();
        $obj->slug                               = $this->slug;
        $obj->new_version                        = $remote_version;
        $obj->url                                = $this->update_path;
        $obj->package                            = $this->update_path;
        $transient->response[$this->plugin_slug] = $obj;
      }
      return $transient;
    }

    /**
     * Add our self-hosted description to the filter
     *
     * @param boolean $false
     * @param array $action
     * @param object $arg
     * @return bool|object
     */
    public function check_info($false, $action, $arg) {
      if ($arg->slug === $this->slug) {
        $information = $this->getRemote_information();
        return $information;
      }
      return false;
    }

    /**
     * Return the remote version
     *
     * @return string $remote_version
     */
    public function getRemote_version() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'version'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return $request['body'];
      }
      return false;
    }

    /**
     * Get information about the remote version
     *
     * @return bool|object
     */
    public function getRemote_information() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'info'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return unserialize($request['body']);
      }
      return false;
    }

    /**
     * Return the status of the plugin licensing
     *
     * @return boolean $remote_license
     */
    public function getRemote_license() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'license'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return $request['body'];
      }
      return false;
    }
  }


  /**
   * Init plugin
   */
  function curlcast_main() {
    //Init
    return curlcast::init();
  }

  curlcast_main();
}
