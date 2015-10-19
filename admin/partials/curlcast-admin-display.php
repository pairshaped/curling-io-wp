<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Curlcast
 * @subpackage Curlcast/admin/partials
 */

$curlcast_api = get_option($this->curlcast_setting_prefix . '_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_manifest_json = get_option($this->curlcast_setting_prefix . '_manifest_json', '{}');

?>

<div class="wrap">
  <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
  <form action="options.php" method="POST">
      <?php
          settings_fields( $this->plugin_name );
          do_settings_sections( $this->plugin_name );
          submit_button();
      ?>
  </form>

  <hr />

  <h2>Summary</h2>
  <table id="curlcast__summary" class='form-table' data-widgets-location="<?php echo "{$curlcast_api}" ?>">
    <tr>
      <td colspan="2">
        <h3>Short Codes</h3>
      </td>
    </tr>
    <tr>
      <td>Full Scoreboard</td>
      <td><input type="text" readonly="readonly" length="24" value="[curlcast]" /></td>
    </tr>
    <tr>
      <td colspan="2">
        <h3>Widgets Debug</h3>
      </td>
    </tr>
    <tr>
      <td>Full Entry Point</td>
      <td id="widgets-debug-full-entry"></td>
    </tr>
    <tr>
      <td>Mini Entry Point</td>
      <td id="widgets-debug-mini-entry"></td>
    </tr>
    <tr>
      <td>Icons Entry Point</td>
      <td id="widgets-debug-icons-entry"></td>
    </tr>
  </table>

</div>

