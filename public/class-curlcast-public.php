<?php

class Curlcast_Public {

    private $plugin_name;

    private $version;

    public function __construct( $plugin_name, $version ) {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    public function enqueue_styles() {
        $plugins_root = plugin_dir_url(dirname(__FILE__));
    }

    public function enqueue_scripts() {
        $plugins_root = plugin_dir_url(dirname(__FILE__));

        wp_enqueue_script( $this->plugin_name . '_public_ajax_get', $plugins_root . 'common/js/ajaxGet.js', array(), $this->version, false );
        wp_enqueue_script( $this->plugin_name . '_public_scripts', $plugins_root . 'common/js/script.js', array(), $this->version, false );
    }

    public function add_shortcode( $args ) {
        include_once 'partials/curlcast-public-display.php';
    }

    public function add_widget( $args ) {
        include_once 'partials/curlcast-public-mini-display.php';
    }

    public function register_widget() {
        register_widget('CurlcastSidebarWidget');
    }
}
