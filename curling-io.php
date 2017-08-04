<?php

/**
 * Plugin Name:       Curling I/O
 * Description:       Curling I/O Live Curling Statistics
 * Version:           3.0.4
 * Author:            PairShaped
 * Author URI:        http://pairshaped.ca
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

include_once(plugin_dir_path( __FILE__ ) . 'includes/constants.php');

function activate_plugin_name() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-curling-io-activator.php';
    CurlingIO_Activator::activate();
}

function deactivate_plugin_name() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/class-curling-io-deactivator.php';
    CurlingIO_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_plugin_name' );
register_deactivation_hook( __FILE__, 'deactivate_plugin_name' );

require plugin_dir_path( __FILE__ ) . 'includes/class-curling-io.php';

function run_plugin_name() {
    $plugin = new CurlingIO( 'curling-io', '3.0.4' );
    $plugin->run();
}

run_plugin_name();
