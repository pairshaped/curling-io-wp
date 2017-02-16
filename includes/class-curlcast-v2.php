<?php

include 'class-curlcast-shortcodes.php';

class CurlcastV2 {

    protected $loader;

    protected $plugin_name;

    protected $version;

    protected $plugin_path;

    public function __construct() {
        $this->plugin_name = 'curling-io';
        $this->version = CURLCAST_V2_RELEASE;

        $this->plugin_path = plugin_dir_path( dirname( __FILE__ ) );

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    private function load_dependencies() {
        /**
         * The class responsible for orchestrating the actions and filters of the
         * core plugin.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-curlcast-loader.php';

        /**
         * The class responsible for defining internationalization functionality
         * of the plugin.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-curlcast-i18n.php';

        /**
         * The class responsible for defining all actions that occur in the admin area.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-curlcast-admin.php';

        /**
         * The class responsible for defining all actions that occur in the public-facing
         * side of the site.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-curlcast-public.php';

        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-curlcast-sidebar-widget.php';

        $this->loader = new Curlcast_Loader();
    }

    private function set_locale() {
        $plugin_i18n = new Curlcast_i18n();
        $plugin_i18n->set_domain( $this->get_plugin_name() );

        $this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
    }

    private function define_admin_hooks() {
        $plugin_admin = new Curlcast_Admin( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
        $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_options_page' );
        $this->loader->add_action( 'admin_init', $plugin_admin, 'register_setting' );
    }

    private function define_public_hooks() {
        global $curlcast_v2_shortcode_full;
        global $curlcast_v2_shortcode_sidebar;

        $plugin_public = new Curlcast_Public( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

        add_shortcode( $curlcast_v2_shortcode_full, array( $plugin_public, 'add_shortcode') );
        add_shortcode( $curlcast_v2_shortcode_sidebar, array( $plugin_public, 'add_widget') );

        $this->loader->add_action( 'widgets_init', $plugin_public, 'register_widget');
    }

    public function run() {
        $this->loader->run();
    }

    public function get_plugin_name() {
        return $this->plugin_name;
    }

    public function get_loader() {
        return $this->loader;
    }

    public function get_version() {
        return $this->version;
    }

}
