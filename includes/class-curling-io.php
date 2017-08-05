<?php

class CurlingIO {

    protected $loader;

    protected $plugin_name;

    protected $version;

    protected $plugin_path;

    public function __construct( $plugin_name, $plugin_version ) {
        $this->plugin_name = $plugin_name;
        $this->version = $plugin_version;

        $this->plugin_path = plugin_dir_path( dirname( __FILE__ ) );

        $this->load_dependencies();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    private function load_dependencies() {
        /**
         * The class responsible for orchestrating the actions and filters of the
         * core plugin.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-curling-io-loader.php';

        /**
         * The class responsible for defining internationalization functionality
         * of the plugin.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-curling-io-i18n.php';

        /**
         * The class responsible for defining all actions that occur in the admin area.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-curling-io-admin.php';

        /**
         * The class responsible for defining all actions that occur in the public-facing
         * side of the site.
         */
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-curling-io-public.php';

        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-curling-io-sidebar-widget.php';

        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-curling-io-updater.php';

        new CurlingIOUpdater(
          $this->plugin_path . $this->plugin_name . '.php',
          'pairshaped',
          'curling-io-wp'
        );

        $this->loader = new CurlingIO_Loader();
    }

    private function define_admin_hooks() {
        $plugin_admin = new CurlingIO_Admin( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
        $this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
        $this->loader->add_action( 'admin_menu', $plugin_admin, 'add_options_page' );
        $this->loader->add_action( 'admin_init', $plugin_admin, 'register_setting' );
    }

    private function define_public_hooks() {
        $plugin_public = new CurlingIO_Public( $this->get_plugin_name(), $this->get_version() );

        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
        $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

        add_shortcode( CURLING_IO_SHORTCODE, array( $plugin_public, 'add_full_widget') );
        add_shortcode( CURLING_IO_SHORTCODE_LEGACY, array( $plugin_public, 'add_full_widget') );

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
