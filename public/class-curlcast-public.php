<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Curlcast
 * @subpackage Curlcast/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Curlcast
 * @subpackage Curlcast/public
 * @author     Your Name <email@example.com>
 */
class Curlcast_Public {

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

  /**
   * Initialize the class and set its properties.
   *
   * @since    1.0.0
   * @param      string    $plugin_name       The name of the plugin.
   * @param      string    $version    The version of this plugin.
   */
  public function __construct( $plugin_name, $version ) {

    $this->plugin_name = $plugin_name;
    $this->version = $version;

  }

  /**
   * Register the stylesheets for the public-facing side of the site.
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

    wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/curlcast-public.css', array(), $this->version, 'all' );

  }

  /**
   * Register the stylesheets for the public-facing side of the site.
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
