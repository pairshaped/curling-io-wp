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

?>

<div class="wrap">
  <table>
    <tr>
      <td id="curlcast__settings">
        <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>
        <form action="options.php" method="POST">
            <?php
                settings_fields( $this->plugin_name );
                do_settings_sections( $this->plugin_name );
                submit_button();
            ?>
        </form>
      </td>
      <td id="curlcast__summary" data-widgets-location="<?php echo $curlcast_api; ?>">
        <h2>Summary</h2>
        <h3>Short Codes</h3>
        <p>Copy and Paste to embed full widget</p>

        <h4>Full Scoreboard</h4>
        <input type="text" readonly="readonly" length="24" value="[curlcast]" />

        <h3>Widgets Debug</h3>
        <p>When reporting a bug, please copy and paste these values to us</p>
        <h4>Full Entry Point</h4>
        <span id="widgets-debug-full-entry"></span>
        <h4>Mini Entry Point</h4>
        <span id="widgets-debug-mini-entry"></span>
        <h4>Icons Entry Point</h4>
        <span id="widgets-debug-icons-entry"></span>
      </td>
    </tr>
  </table>

  <h3>Widget Sample</h3>
  <table>
    <tr>
      <td width="75%">
        <div class="test-container">
          <div id='curlcastFull' class="curlcast" ></div>

        </div>
      </td>
      <td>
        TODO: Mini Widget
      </td>
    </tr>
  </table>
</div>
<script type="text/javascript">
  (function(ajaxGet){
    'use strict';

    var injectScript;

    injectScript = function(scriptUrl) {
      var scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.src = scriptUrl;
      document.body.appendChild(scriptTag);
    };

    addEventListener('DOMContentLoaded', function() {
      ajaxGet("<?php echo $curlcast_api; ?>/manifest.json", {
        success: function(response) {
          var loadIndexes = [0, 1],
              scriptIndex,
              scriptFile,
              index;
          for(index=0; index < loadIndexes.length; index++) {
            scriptIndex = loadIndexes[index]
            scriptFile = response[scriptIndex]
            injectScript("<?php echo $curlcast_api; ?>/" + scriptFile);
          }
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }, true);


  })(ajaxGet);
</script>
