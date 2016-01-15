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

        $jsonManifest = wp_remote_retrieve_body( wp_remote_get('http://widgets.curlcast.ca/manifest.json') );

        $manifest = json_decode($jsonManifest);

        foreach($manifest as $idx => $remoteScript) {
            wp_enqueue_script(
                $this->plugin_name . '_remote_' . $idx,
                'http://widgets.curlcast.ca/' . $remoteScript,
                array(),
                $this->version,
                false
            );
        }
    }

    public function add_shortcode( $args ) {
        ob_start();
        $curlcast_language = $this->guess_language();
        include_once 'partials/curlcast-public-display.php';
        return ob_get_clean();
    }

    public function add_widget( $args ) {
        ob_start();
        $curlcast_language = $this->guess_language();
        include_once 'partials/curlcast-public-mini-display.php';
        return ob_get_clean();
    }

    public function register_widget() {
        register_widget('CurlcastSidebarWidget');
    }

    private function guess_language() {
      $language_setting = substr( get_bloginfo('language'), 0, 2 );

      $supported_languages = array('en', 'fr');

      foreach( $supported_languages as $lang )
      {
        if ( $lang == $language_setting ) {
          return $lang;
        }
      }

      return $supported_languages[0];
    }
}
