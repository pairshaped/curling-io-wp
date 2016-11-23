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

        $widgetsHost = 'http://widgets.curling.io';

        $jsonManifest = wp_remote_retrieve_body( wp_remote_get($widgetsHost . '/manifest.json') );

        $manifest = json_decode($jsonManifest);

        foreach($manifest as $idx => $remoteScript) {
            wp_enqueue_script(
                $this->plugin_name . '_remote_' . $idx,
                $widgetsHost . $remoteScript,
                array(),
                $this->version,
                false
            );
        }
    }

    public function add_shortcode( $args ) {
        ob_start();
        $curlcast_language = Curlcast_i18n::guess_language();
        include_once 'partials/curlcast-public-display.php';
        return ob_get_clean();
    }

    public function add_widget( $args ) {
        ob_start();
        $curlcast_language = Curlcast_i18n::guess_language();
        include_once 'partials/curlcast-public-mini-display.php';
        return ob_get_clean();
    }

    public function register_widget() {
        register_widget('CurlcastSidebarWidget');
    }
}
