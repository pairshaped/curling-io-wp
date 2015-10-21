<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Curlcast
 * @subpackage Curlcast/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Curlcast
 * @subpackage Curlcast/admin
 * @author     Your Name <email@example.com>
 */
class Curlcast_Admin {

  /**
   * The ID of this plugin.
   *
   * @since    1.0.0
   * @access   private
   * @var      string    $plugin_name    The ID of this plugin.
   */
  private $plugin_name;

  /**
   * The version of this plugin.
   *
   * @since    1.0.0
   * @access   private
   * @var      string    $version    The current version of this plugin.
   */
  private $version;

  private $curlcast_setting_prefix = 'curlcast';

  /**
   * Initialize the class and set its properties.
   *
   * @since    1.0.0
   * @param      string    $plugin_name       The name of this plugin.
   * @param      string    $version    The version of this plugin.
   */
  public function __construct( $plugin_name, $version ) {

    $this->plugin_name = $plugin_name;
    $this->version = $version;

  }

  /**
   * Register the stylesheets for the admin area.
   *
   * @since    1.0.0
   */
  public function enqueue_styles() {

    /**
     * This function is provided for demonstration purposes only.
     *
     * An instance of this class should be passed to the run() function
     * defined in Curlcast_Loader as all of the hooks are defined
     * in that particular class.
     *
     * The Curlcast_Loader will then create the relationship
     * between the defined hooks and the functions defined in this
     * class.
     */

    wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/curlcast-admin.css', array(), $this->version, 'all' );

  }

  /**
   * Register the JavaScript for the admin area.
   *
   * @since    1.0.0
   */
  public function enqueue_scripts() {

    /**
     * This function is provided for demonstration purposes only.
     *
     * An instance of this class should be passed to the run() function
     * defined in Curlcast_Loader as all of the hooks are defined
     * in that particular class.
     *
     * The Curlcast_Loader will then create the relationship
     * between the defined hooks and the functions defined in this
     * class.
     */

    $plugins_root = plugin_dir_url(dirname(__FILE__));

    wp_enqueue_script( $this->plugin_name, $plugins_root . '/admin/js/curlcast-admin.js', array(), $this->version, false );
    wp_enqueue_script( $this->plugin_name . '_common', $plugins_root . '/common/js/ajaxGet.js', array(), $this->version, false );

  }

  public function add_options_page() {
      $this->plugin_screen_hook_suffix = add_options_page(
          __('Curlcast Settings', 'curlcast'),
          __('Curlcast', 'curlcast'),
          'manage_options',
          $this->plugin_name,
          array($this, 'display_options_page')
      );
  }

  public function display_options_page() {
      include_once 'partials/curlcast-admin-display.php';
  }

  private function create_settings_section( $section, $title ) {
      $section_id = $this->curlcast_setting_prefix . '_' . $section;
      $section_title = __( $title, 'curlcast' );
      $section_render_method = array( $this, $section_id . '_render' );

      add_settings_section(
          $section_id,
          $section_title,
          $section_render_method,
          $this->plugin_name
      );
  }

  private function create_settings_field($id, $label, $section = 'general', $sanitize_callback = NULL) {
      $option_id = $this->curlcast_setting_prefix . '_' . $id;
      $option_render_method = array( $this, $option_id . '_render' );
      $option_label = __( $label, 'curlcast' );
      $option_section = $this->curlcast_setting_prefix . '_' . $section;
      $option_args = array( 'label_for' => $option_id );

      add_settings_field(
          $option_id,
          $option_label,
          $option_render_method,
          $this->plugin_name,
          $option_section,
          $option_args
      );

      register_setting( $this->plugin_name, $option_id, $sanitize_callback );
  }


    public function register_setting() {
        $this->create_settings_section( 'general', 'General' );

        $this->create_settings_field('api_key', 'Access Key', 'general', array($this, 'curlcast_sanitize_default'));

        $this->create_settings_section( 'developer', 'Developer Settings' );
        $this->create_settings_field('widgets_api', 'Curlcast Widgets API Host', 'developer', array($this, 'curlcast_sanitize_default'));
        $this->create_settings_field('api_host', 'API Host URL', 'developer', array($this, 'curlcast_sanitize_default'));

        register_setting( $this->plugin_name, $this->curlcast_setting_prefix . '_manifest_json');
        //
        // register_setting('widgets_manifest_json', 'Manifest JSON', 'general');
        //
        // [ http://widgets.curlcast.ca/      ]
        //
        // ( Save   )
        //
        // Current Widget Manifest Cache
        // Created At:     2440274028
        // Full Path:      full.entry.sdkfbsdfgb.js
        // Mini Path:      mini.entry.sdkfbsdfgb.js
        // Icon Path:      icon.entry.sdkfbsdfgb.js
        // Last Retrieved: 48743y820247
        //
    }


    public function curlcast_sanitize_default( $value ) {
      return addslashes(strip_tags($value));
    }

    public function curlcast_general_render($args) {
        echo "<p>" . __('Please change the settings accordingly', 'curlcast') . "</p>";
    }

    public function curlcast_widgets_api_render() {
        $default_widgets_api = "http://widgets.curlcast.ca";
        $html_name = $this->curlcast_setting_prefix . '_widgets_api';
        $value = get_option($html_name, $default_widgets_api);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' length='128' />";
        echo "<br /><em>Where the curlcast widgets are hosted.  Defaults to {$default_widgets_api}</em>\r\n";
    }

    public function curlcast_developer_render($args) {
        echo "<p>" . __('Please <strong><u>do not change</u></strong> these unless you know what you are doing!', 'curlcast') . "</p>";
    }

    public function curlcast_api_key_render() {
        $html_name = $this->curlcast_setting_prefix . '_api_key';
        $value = get_option($html_name);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' length='128' />";
        echo "<br /><em>The organization key from curlcast.ca</em>\r\n";
    }

    public function curlcast_api_host_render() {
        $html_name = $this->curlcast_setting_prefix . '_api_host';
        $value = get_option($html_name, 'http://curlcast.ca/');
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' style='width: 450px' />";
    }

}
?>
