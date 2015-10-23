<?php

class CurlcastAutoUpdate {

    public $current_version;
    public $update_path;

    /**
     * Plugin Slug (plugin_directory/plugin_file.php)
     *
     * @var string
     */
    public $plugin_slug;

    /**
     * Plugin name (plugin_file)
     *
     * @var string
     */
    public $plugin_name;

    function __construct($current_version, $update_path, $plugin_slug) {
        // Set the class public variables
        $this->current_version = $current_version;
        $this->update_path     = $update_path;
        $this->plugin_slug     = $plugin_slug;

        list($plugin_path, $plugin_file) = explode('/', $plugin_slug);

        $this->plugin_name = str_replace('.php', '', $plugin_file);

        // define the alternative API for updating checking
        add_filter('pre_set_site_transient_update_plugins', array(
          &$this,
          'check_update'
        ));

        // Define the alternative response for information checking
        add_filter('plugins_api', array(
          &$this,
          'check_info'
        ), 10, 3);
    }

    /**
     * Add our self-hosted autoupdate plugin to the filter transient
     *
     * @param $transient
     * @return object $ transient
     */
    public function check_update($transient) {
      if (empty($transient->checked)) {
        return $transient;
      }

      // Get the remote version
      $remote_version = $this->get_remote_version();

      // If a newer version is available, add the update
      if (version_compare($this->current_version, $remote_version, '<')) {
        $obj                                     = new stdClass();
        $obj->slug                               = $this->plugin_name;
        $obj->new_version                        = $remote_version;
        $obj->url                                = $this->update_path;
        $obj->package                            = $this->update_path;
        $transient->response[$this->plugin_slug] = $obj;
      }
      return $transient;
    }

    /**
     * Add our self-hosted description to the filter
     *
     * @param boolean $false
     * @param array $action
     * @param object $arg
     * @return bool|object
     */
    public function check_info($false, $action, $arg) {
      if ($arg->slug === $this->plugin_name) {
        $information = $this->get_remote_information();
        return $information;
      }
      return false;
    }

    /**
     * Return the remote version
     *
     * @return string $remote_version
     */
    public function get_remote_version() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'version'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return $request['body'];
      }
      return false;
    }

    /**
     * Get information about the remote version
     *
     * @return bool|object
     */
    public function get_remote_information() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'info'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return unserialize($request['body']);
      }
      return false;
    }

    /**
     * Return the status of the plugin licensing
     *
     * @return boolean $remote_license
     */
    public function get_remote_license() {
      $request = wp_remote_post($this->update_path, array(
        'body' => array(
          'action' => 'license'
        )
      ));
      if (!is_wp_error($request) || wp_remote_retrieve_response_code($request) === 200) {
        return $request['body'];
      }
      return false;
    }
}
