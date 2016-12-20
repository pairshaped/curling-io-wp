<?php

class Curlcast_Admin {

    private $plugin_name;

    private $version;

    private $curlcast_setting_prefix = 'curlcast_v2';

    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;

    }

    public function enqueue_styles() {
        wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/curlcast-admin.css', array(), $this->version, 'all' );
    }

    public function enqueue_scripts() {
        $plugins_root = plugin_dir_url(dirname(__FILE__));
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
        $this->create_settings_section('general', 'General');
        $this->create_settings_field('api_key', 'Access Key', 'general', array($this, 'curlcast_sanitize_default'));
        $this->create_settings_field('scoreboard_page', 'Scoreboard Page', 'general', array($this, 'curlcast_sanitize_default'));

        $this->create_settings_section('developer', 'Developer Settings');
        $this->create_settings_field('widgets_api', 'Curlcast Widgets API Host', 'developer', array($this, 'curlcast_sanitize_default'));
        $this->create_settings_field('api_host', 'API Host URL', 'developer', array($this, 'curlcast_sanitize_default'));

        register_setting( $this->plugin_name, $this->curlcast_setting_prefix . '_manifest_json');
    }


    public function curlcast_sanitize_default( $value ) {
        return addslashes(strip_tags($value));
    }

    public function curlcast_v2_general_render($args) {
        echo "<p>" . __('Please change the settings accordingly', 'curlcast_v2') . "</p>";
    }

    public function curlcast_v2_api_key_render() {
        $html_name = $this->curlcast_setting_prefix . '_api_key';
        $value = get_option($html_name);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' style='width: 450px;' />";
        echo "<br /><em>The organization key from curling.io</em>\r\n";
    }

    public function curlcast_v2_scoreboard_page_render() {
        $html_name = $this->curlcast_setting_prefix . '_scoreboard_page';
        $value = get_option($html_name);
        $args = array(
            'depth' => 0,
            'child_of' => 0,
            'selected' => $value,
            'echo' => 0,
            'name' => $html_name,
            'id' => $html_name,
            'show_option_none' => '',
            'show_option_no_change' => '',
            'option_none_value' => ''
        );
        echo wp_dropdown_pages($args);
        echo "<br /><em>This is the page that you added the shortcode to.  This <strong><u>will not</u></strong> automatically create the shortcode page for you!</em>\r\n";
    }

    public function curlcast_v2_developer_render($args) {
        echo "<p>" . __('Please <strong><u>do not change</u></strong> these unless you know what you are doing!', 'curlcast_v2') . "</p>";
    }

    public function curlcast_v2_widgets_api_render() {
        $default = CURLCAST_V2_DEFAULT_WIDGETS;
        $html_name = $this->curlcast_setting_prefix . '_widgets_api';
        $value = get_option($html_name, $default);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' style='width: 450px;' />";
        echo "<br /><em>Where the curlcast widgets are hosted.  Defaults to {$default}</em>\r\n";
    }

    public function curlcast_v2_api_host_render() {
        $default = CURLCAST_V2_DEFAULT_API;
        $html_name = $this->curlcast_setting_prefix . '_api_host';
        $value = get_option($html_name, $default);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' style='width: 450px;' />";
        echo "<br /><em>Where the curlcast json data is hosted.  Defaults to {$default}</em>\r\n";
    }

}
?>
