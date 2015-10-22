<?php

class Curlcast_Public {

  private $plugin_name;

  private $version;

  public function __construct( $plugin_name, $version ) {

    $this->plugin_name = $plugin_name;
    $this->version = $version;

  }

  public function enqueue_styles() {

    wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/curlcast-public.css', array(), $this->version, 'all' );

  }

  public function enqueue_scripts() {

    $plugins_root = plugin_dir_url(dirname(__FILE__));

    wp_enqueue_script( $this->plugin_name, $plugins_root . '/public/js/curlcast-public.js', array(), $this->version, false );
    wp_enqueue_script( $this->plugin_name . '_common', $plugins_root . '/common/js/ajaxGet.js', array(), $this->version, false );

  }

    public function add_shortcode( $args ) {
        include_once 'partials/curlcast-public-display.php';
    }

    public function add_widget( $args ) {
        include_once 'partials/curlcast-public-mini-display.php';
    }

    public function get_full_widget_page() {
        return get_option('curlcast_scoreboard_page');
    }
}
