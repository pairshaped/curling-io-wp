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
        wp_enqueue_script( $this->plugin_name . '_public_full', $plugins_root . 'common/js/load_full.js', array(), $this->version, false );
        wp_enqueue_script( $this->plugin_name . '_public_mini', $plugins_root . 'common/js/load_mini.js', array(), $this->version, false );
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

      $supported_languages = ['en', 'fr'];

      foreach( $supported_languages as $lang )
      {
        if ( $lang == $language_setting ) {
          return $lang;
        }
      }

      return $supported_languages[0];
    }
}
