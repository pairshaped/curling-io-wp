<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://curlcast.ca
 * @since             1.0.0
 * @package           CurlcastV2
 *
 * @wordpress-plugin
 * Plugin Name:       Curlcast V2 Wordpress Plugin
 * Description:       Curlcast Live Curling Statistics
 * Version:           2.1.0
 * Author:            PairShaped
 * Author URI:        http://pairshaped.ca
 * Text Domain:       curlcast
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

include_once(plugin_dir_path( __FILE__ ) . 'includes/version.php');

function activate_plugin_name() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-curlcast-activator.php';
    Curlcast_Activator::activate();
}

function deactivate_plugin_name() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-curlcast-deactivator.php';
    Curlcast_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_plugin_name' );
register_deactivation_hook( __FILE__, 'deactivate_plugin_name' );

require plugin_dir_path( __FILE__ ) . 'includes/class-curlcast-v2.php';

function run_plugin_name() {
    $plugin = new CurlcastV2();
    $plugin->run();
}

run_plugin_name();
