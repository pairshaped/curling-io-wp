<?php
/*
Plugin Name: Curlcast Stats
Description: Displays Curlcast Stats.
Version: 1.0.0
Author: Alex Ulko
*/
if(!class_exists('curlcast'))
	{
	define('WP_CURLCAST_VERSION', '1.0.0');

	define('WP_CURLCAST_PAGE_URL', 'http://tothebutton.com/stats');
	define('WP_CURLCAST_WIDGET_URL', 'http://widgets.tothebutton.com/stats/scoreboard_mini.html');

	define('WP_CURLCAST_URL_CHECK', 'http://curlcast.ulko.net/check.php');
	define('WP_CURLCAST_URL_UPDATE', 'http://curlcast.ulko.net/update.php');

	defined('DS') or define('DS', DIRECTORY_SEPARATOR);

	class curlcast
		{
		static $tabs;

		/**
		Init all actions and hooks
		*/
		function init()
			{
			self::$tabs =  array(
				'settings' => array(
					'title' => __('Settings', 'curlcast'),
					'settings' =>  array(
						'curlcast_enabled' => array (
							'name' 		=> __('Enable plugin', 'curlcast'),
							'helptext'	=> __('Enable curlcast plugin', 'curlcast'),
							'default'	=> 'yes',
							'type' 		=> 'radio',
								'values' 	=> array(
									'yes' 	=> __('Yes', 'curlcast'),
									'no' 	=> __('No', 'curlcast')
									)
								),
						'curlcast_api_key' => array (
							'name' 		=> __('Access Key', 'curlcast'),
							'helptext'	=> __('Key for requests', 'curlcast'),
							'default'	=> '',
							'required'	=> 'yes',
							'type' 		=> 'text'
							),
						'curlcast_page_id' => array (
							'name' 		=> __('Page ID', 'curlcast'),
							'helptext'	=> __('Page ID used for routing', 'curlcast'),
							'default'	=> '',
							'required'	=> 'yes',
							'type' 		=> 'text'
							),
						'curlcast_page_prefix' => array (
							'name' 		=> __('Page prefix', 'curlcast'),
							'helptext'	=> __('Page prefix used for routing', 'curlcast'),
							'default'	=> 'stats',
							'required'	=> 'yes',
							'type' 		=> 'text'
							)
						)
					)/*,
				'templates' => array(
					'title' => __('Templates', 'curlcast'),
					'settings' =>  array(
						'curlcast_template_widget' => array (
							'name' 		=> __('Widget', 'curlcast'),
							'helptext'	=> __('Template for widget', 'curlcast'),
							'default'	=> '',
							'required'	=> '',
							'type' 		=> 'textarea'
							),
						'curlcast_template_page' => array (
							'name' 		=> __('Page', 'curlcast'),
							'helptext'	=> __('Template for page', 'curlcast'),
							'default'	=> '',
							'required'	=> '',
							'type' 		=> 'textarea'
							)
						)
					)*/
				);
			self::$curlcast_template_widget = '<iframe src="{url}" frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 100%; height: {height}px;"></iframe>';
			self::$curlcast_template_page = '<iframe src="{url}" frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 100%; height: 800px;"></iframe>';

			//Add settings page
			add_action('admin_menu', array('curlcast', 'admin_menu'), 1);

			register_activation_hook(__FILE__, array('curlcast', 'install'));
			register_deactivation_hook(__FILE__, array('curlcast', 'uninstall'));

			if(get_option('curlcast_enabled', 'yes') == 'yes')
				{
				add_action('init', array('curlcast', 'main'), 1);
				add_filter('query_vars', array('curlcast', 'query_vars'), 10);
				add_action('admin_notices', array('curlcast', 'admin_notice'));
				add_action('admin_notices', array('curlcast', 'check_for_new_version'));
				add_action('template_redirect', array('curlcast', 'template_redirect'), 11);
				add_action('wp_loaded', array('curlcast', 'flush_rules'));
				add_action('widgets_init', array('curlcast', 'load_widget'));
				}
			}

		/**
		Install
		*/
		function install()
			{
			global $wpdb;
			//$wpdb->query("");
			foreach(self::$tabs as $tab => $settings)
				{
				foreach($settings['settings'] as $option => $params)
					{
					add_option($option, $params['default']);
					}
				}
			add_option('curlcast_lastcheck', 0);
			}

		/**
		Uninstall
		*/
		function uninstall()
			{
			}

		/**
		Admin plugin page
		*/
		function admin_menu()
	    	{
			add_menu_page('Curlcast Options', 'Curlcast', 8, __FILE__, array('curlcast', 'settings'),  plugins_url('curlcast/settings.gif'));
			}

		/**
		 * Display settings notice
		 */
		function admin_notice()
			{
			$no_required = false;
			foreach(self::$tabs as $tab => $settings)
				{
				foreach($settings['settings'] as $option => $params)
					{
					if($params['required'] == 'yes')
						{
						if(isset($_POST[$option]))
							{
							if(trim($_POST[$option]) == '') $no_required = true;
							}
						else
							{
							if (trim(get_option($option)) == '' ) $no_required = true;
							}
						}
					}
				}

			if($no_required)
				{
				echo '<div class="error fade"><p>'.sprintf(__('Curlcast is not configured. Remember to <a href="%1$s">configure all required settings</a> when you are ready to start.', 'curlcast'), 'admin.php?page=curlcast/curlcast.php').'</p></div>';
				}



			}

		/**
		 * Init actions
		 */
		function main()
			{
			$page_prefix = get_option('curlcast_page_prefix');
			add_rewrite_rule($page_prefix.'/(.*)$', 'index.php?curlcast_page=$matches[1]', 'top');
			}

		/**
		 * Flush cache
		 */
		function flush_rules()
			{
			$rules = get_option('rewrite_rules');
			$page_prefix = get_option('curlcast_page_prefix');
			if(!isset($rules[$page_prefix.'/(.*)$']))
				{
				global $wp_rewrite;
				$wp_rewrite->flush_rules(false);
				}
			}

		/**
		 * Parse query vars
		 */
		function query_vars($query_vars)
			{
			$query_vars[] = 'curlcast_page';
    		return $query_vars;
			}

		/**
		 * Display
		 */
		function template_redirect($params = array())
			{
			global $post_type, $wp_query, $post, $withcomments;

			$curlcast_page = $wp_query->query_vars['curlcast_page'];
			if($curlcast_page != '')
				{
				$page_id = get_option('curlcast_page_id');
				$wp_query = new WP_Query(array('page_id' => $page_id));


				$curlcast_array = explode('/',trim($curlcast_page,'/'));
				$wp_query->post->post_content = self::process_routing($curlcast_array);
				$withcomments = false;
				}
			}


		/**
		 * Process page routing
		 */
		function process_routing($curlcast_array)
			{
			$access_key = get_option('curlcast_api_key');
			$page_prefix = get_option('curlcast_page_prefix');
			$url = WP_CURLCAST_PAGE_URL.'/'.implode('/', $curlcast_array).'?access_key='.$access_key.'&prefix='.$page_prefix;

			//$template = stripslashes(get_option('curlcast_template_page'));
			$template = self::$curlcast_template_page;
			$template = str_replace('{url}', $url, $template);

			return $template;
			}

		/**
		 * Init widget
		 */
		function load_widget()
			{
			register_widget('curlcast_widget');
			}

		/**
		 * Settings page
		 */
		function settings()
			{
			global $wpdb;

			$message = '';
			if(!empty($_POST['submit']))
				{
				$message = self::update_settings($_POST);
				$message = '<h3>'.$message.'</h3>';
				}

			$tabs = array(
				'settings' => __('Settings', 'curlcast'),
				'templates' => __('Templates', 'curlcast')
				);
			$current = $_GET['tab'];
			if(!$current) $current = 'settings';

			echo '<div class="wrap">
					<h2>Curlcast</h2>
					<br />';

    		if($message) echo $message.'<br/>';

    		if(count(self::$tabs) > 1)
    			{
	    		echo '<h2 class="nav-tab-wrapper">';
				foreach(self::$tabs as $tab => $settings)
					{
					$class = ( $tab == $current ) ? ' nav-tab-active' : '';
					echo '<a class="nav-tab'.$class.'" href="?page=curlcast/curlcast.php&tab='.$tab.'">'.$settings['title'].'</a>';
					}
				echo '</h2>';
    			}


			foreach(self::$tabs as $tab => $settings)
				{
				if($tab == $current)
					{
					self::settings_form($settings['settings']);
					}
				}

			echo '
				</div>';
			}

		/**
		 * Render form
		 */
		function settings_form($settings)
			{
			echo '
					<div class="stuffbox">
						<form action="" method="post">
							<h3 style="margin:0; padding: 10px">
								<input type="submit" name="submit" class="button action" value="Save">
							</h3>
							<table class="wp-list-table widefat fixed posts">
						';
			foreach($settings as $option => $params)
				{
				$help = $params['helptext'];

				$value = get_option($option, $params['default']);
				$color = '';
				if($params['required'] == 'yes')
					{
					$required = ' <span>*</span>';
					if(!empty($_POST['submit']) && trim($_POST[$option]) == '')
						{
						$color = 'color:#BD1C1C;';
						}
					}
				else
					{
					$required = '';
					}

			switch($params['type'])
				{
					case 'checkbox':
						if($value == 'yes')  $checked = 'checked="checked"'; else $checked = '';
						$edit = '<p style="margin: 5px"><input id="'.htmlspecialchars($option).'" type="checkbox" name="'.htmlspecialchars($option).'" value="yes" '.$checked.'/>&nbsp;&nbsp;&nbsp;<i style="color:#aaa">'.$help.'</i></p>';
						break;

					case 'radio':
						$edit = '<p style="margin: 5px">';
						while(list($option_key, $option_name) = each($params['values']))
							{
							if($value == $option_key)  $checked = 'checked="checked"'; else $checked = '';
							$edit .= '<input id="'.htmlspecialchars($option.$option_key).'" type="radio" name="'.htmlspecialchars($option).'" value="'.$option_key.'" '.$checked.'/>&nbsp;<i>'.$option_name.'</i>&nbsp;&nbsp;&nbsp;';
							}

						$edit .= '<i style="color:#aaa">'.$help.'</i></p>';
						break;

					case 'text':
						$edit = '<input id="'.htmlspecialchars($option).'" type="text" name="'.htmlspecialchars($option).'" value="'.htmlspecialchars($value).'" style="width:100%;"/><p style="margin:10px 0;color:#aaa"><i>'.$help.'</i></p>';
						break;

					case 'textarea':
						$edit = '<textarea id="'.htmlspecialchars($option).'" name="'.htmlspecialchars($option).'" style="width:100%;height:70px;">'.htmlspecialchars(stripslashes($value)).'</textarea><p style="margin:10px 0;color:#aaa"><i>'.$help.'</i></p>';
						break;
					}

				echo '
								<tr>
									<td width="100" valign="top" style="padding:10px;'.$color.'"><label for="'.htmlspecialchars($option).'">'.htmlspecialchars($params['name']).$required.'</label></td>
									<td valign="top">'.$edit.'</td>
								</tr>';
				}



			echo '			</table>

						</form>
					</div>';
			}

		/**
		 * Save settings
		 */
		function update_settings($saved)
			{
			$required = true;

			foreach(self::$tabs as $tab => $settings)
				{
				foreach($settings['settings'] as $option => $params)
					{
					if(isset($saved[$option]))
						{
						$value = trim($saved[$option]);
						if($params['required'] == 'yes' && $value == '') $required = false;
						update_option($option, $value);
						}
					}
				}

			if(!$required)
				{
				return __('Please fill in all required fields', 'curlcast');
				}
			else
				{
				return __('Settings have been updated', 'curlcast');
				}
			}

		/**
		 * Auto updates
		 */
		function check_for_new_version()
			{
			$last_check = get_option('curlcast_lastcheck');
			$last_check = intval($last_check);
    		if($last_check + 86400 > time()) return;

    		$latest_version = file_get_contents(WP_CURLCAST_URL_CHECK);

    		if($latest_version !== WP_CURLCAST_VERSION)
    			{
    			echo '<div class="error fade"><p>'.sprintf(__('There\'s a new version of Curlcast available! You should <a href="%1$s">upgrade now</a>', 'curlcast'), WP_CURLCAST_URL_UPDATE).'</p></div>';
    			}
    		update_option('curlcast_lastcheck', time());
			}
		}


		/**
		 * Custom widget
		 */
		class curlcast_widget extends WP_Widget
			{
			function __construct()
				{
				parent::__construct('curlcast_widget', __('Curlcast Widget', 'curlcast'), array( 'description' => __( 'Scoreboard mini widget', 'curlcast' )));
				}

			/**
			 * Widget render
			 */
			public function widget($args, $instance)
				{
				$title = apply_filters('widget_title', $instance['title']);
				echo $args['before_widget'];
				if(!empty($title))
					{
					echo $args['before_title'] . $title . $args['after_title'];
					}

				$height = $instance['height'];
				$access_key = get_option('curlcast_api_key');
				$page_prefix = get_option('curlcast_page_prefix');
				$url = WP_CURLCAST_WIDGET_URL.'?access_key='.$access_key.'&prefix='.$page_prefix;

				//$template = stripslashes(get_option('curlcast_template_widget'));
				$template = self::$curlcast_template_widget;
				$template = str_replace('{url}', $url, $template);
				$template = str_replace('{height}', $height, $template);


				echo $template;

				echo $args['after_widget'];
				}
			/**
			 * Widget admin form
			 */
			public function form($instance)
				{
				if($instance)
					{
					$title = $instance['title'];
					$height = $instance['height'];
					}
				else
					{
					$title = __( 'Scoreboard mini', 'curlcast' );
					$height = 300;
					}
				?>
				<p>
					<label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
					<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
				</p>
				<p>
					<label for="<?php echo $this->get_field_id('height'); ?>"><?php _e('Height:'); ?></label>
					<input class="widefat" id="<?php echo $this->get_field_id('height'); ?>" name="<?php echo $this->get_field_name('height'); ?>" type="text" value="<?php echo esc_attr($height); ?>" />
				</p>
				<?php
				}

			/**
			 * Update
			 */
			public function update($new_instance, $old_instance)
				{
				$instance = $old_instance;
				$instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
				$instance['height'] = intval($new_instance['height']);
				return $instance;
				}
			}


	/**
	Init plugin
	*/
	function curlcast_main()
		{
		//Init
		return curlcast::init();
		}

	curlcast_main();
	}
?>
