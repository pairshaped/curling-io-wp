<?php

class CurlingIO_Admin {

    private $plugin_name;

    private $version;

    private $settings_prefix = 'curling_io';

    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;

    }

    public function enqueue_styles() {
        wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/curling-io-admin.css', array(), $this->version, 'all' );
    }

    public function enqueue_scripts() {
        $plugins_root = plugin_dir_url(dirname(__FILE__));
    }

    public function add_options_page() {
        $this->plugin_screen_hook_suffix = add_options_page(
            __('Curling I/O Settings', 'curling_io'),
            __('Curling I/O', 'curling_io'),
            'manage_options',
            $this->plugin_name,
            array($this, 'display_options_page')
        );
    }

    public function display_options_page() {
        $plugin_version = $this->version;

        include_once 'partials/curling-io-admin-display.php';
    }

    private function create_settings_section( $section, $title ) {
        $section_id = $this->settings_prefix . '_' . $section;
        $section_title = __( $title, 'curling_io' );
        $section_render_method = array( $this, $section_id . '_render' );

        add_settings_section(
            $section_id,
            $section_title,
            $section_render_method,
            $this->plugin_name
        );
    }

    private function create_settings_field($id, $label, $section = 'general', $sanitize_callback = NULL) {
        $option_id = $this->settings_prefix . '_' . $id;
        $option_render_method = array( $this, $option_id . '_render' );
        $option_label = __( $label, 'curling_io' );
        $option_section = $this->settings_prefix . '_' . $section;
        $option_args = array( 'label_for' => $option_id );

        add_settings_field(
            $option_id,
            $option_label,
            $option_render_method,
            $this->plugin_name,
            $option_section,
            $option_args
        );

        register_setting(
          $this->plugin_name,
          $option_id,
          array(
            'sanitize_callback' => $sanitize_callback
          )
        );
    }


    public function register_setting() {
        $this->create_settings_section('general', 'General');
        $this->create_settings_field('api_key', 'Access Key', 'general', array($this, 'curling_io_sanitize_default'));
        $this->create_settings_field('scoreboard_page', 'Scoreboard Page', 'general', array($this, 'curling_io_sanitize_default'));

        register_setting( $this->plugin_name, $this->settings_prefix . '_manifest_json');
    }


    public function curling_io_sanitize_default( $value ) {
        return addslashes(strip_tags($value));
    }

    public function curling_io_general_render($args) {
        echo "<p>" . __('Please change the settings accordingly', 'curling_io') . "</p>";
    }

    public function curling_io_api_key_render() {
        $html_name = $this->settings_prefix . '_api_key';
        $value = get_option($html_name);
        echo "<input type='text' name='$html_name' id='$html_name' value='$value' style='width: 450px;' />";
        echo "<br /><em>The organization key from legacy.curling.io</em>\r\n";
    }

    public function curling_io_scoreboard_page_render() {
        $html_name = $this->settings_prefix . '_scoreboard_page';
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

}
?>
