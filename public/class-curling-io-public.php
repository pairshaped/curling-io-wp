<?php

class CurlingIO_Public {

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

        $widgetsHost = CURLING_IO_DEFAULT_WIDGETS;

        $manifest = $this->join_url( array($widgetsHost, 'manifest.json') );
        $jsonManifest = wp_remote_retrieve_body( wp_remote_get($manifest) );

        $manifest = json_decode($jsonManifest);

        foreach($manifest as $idx => $remoteScript) {
            $url = $this->join_url( array($widgetsHost, $remoteScript) );
            wp_enqueue_script(
                $this->plugin_name . '_remote_' . $idx,
                $url,
                array(),
                $this->version,
                false
            );
        }
    }

    public function add_full_widget( $args ) {
        ob_start();
        $language = CurlingIO_i18n::guess_language();
        $plugin_version = $this->version;
        include_once 'partials/curling-io-public-display.php';
        return ob_get_clean();
    }

    public function register_widget() {
        register_widget('CurlingIOSidebarWidget');
    }

    // -----------

    private function join_url($pieces = array()) {
        $stripped_pieces = array_map($this->strip_trailing_slash, $pieces);
        return implode('/', $stripped_pieces);
    }

    private function strip_trailing_slash($str) {
        return rtrim($str, '/');
    }
}
