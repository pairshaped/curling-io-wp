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

$curlcast_widgets_api = get_option($this->curlcast_setting_prefix . '_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option($this->curlcast_setting_prefix . '_api_host', 'http://widgets.curlcast.ca');
$curlcast_api_key = get_option($this->curlcast_setting_prefix . '_api_key', 'http://widgets.curlcast.ca');

$base_url = '/scoreboard';

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
      <td id="curlcast__summary" data-widgets-location="<?php echo $curlcast_widgets_api; ?>">
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
  <table class="widget-sample__table">
    <tr>
      <td class="widget-sample__full">
        <div class="test-container">
          <div id='curlcast-full' class="curlcast">Attempting to mount the Full Widget....</div>
        </div>
      </td>
      <td class="widget-sample__mini">
          <div id='curlcast-mini' class="curlcast">Attempting to mount the Mini Widget...</div>
      </td>
    </tr>
  </table>
</div>

<script type="text/javascript">
  (function(window, ajaxGet){
    'use strict';

    var createScript,
        loadScripts,
        widgets_api = "<?php echo $curlcast_widgets_api; ?>",
        api_host = "<?php echo $curlcast_api_host; ?>",
        api_key = "<?php echo $curlcast_api_key; ?>";

    createScript = function(scriptUrl) {
      var scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.src = scriptUrl;
      return scriptTag;
    };

    loadScripts = function(scripts, afterAll) {
      var script;
      script = scripts.shift();
      document.body.appendChild(script);
      script.onload = function() {
        if (scripts.length > 0) {
          loadScripts(scripts, afterAll);
        } else {
          if (afterAll) afterAll();
        }
      }
    }

    addEventListener('DOMContentLoaded', function() {
      ajaxGet(widgets_api + "/manifest.json", {
        success: function(response) {
          var scriptFile,
              index,
              scriptTags = [];
          scriptTags = response.map(function(scriptFile) {
            return createScript(widgets_api + "/" + scriptFile)
          });
          loadScripts(scriptTags, function() {
            window.CurlCastWidgets.mountMini({
              apiKey: api_key,
              apiHost: api_host,
              basePath: "<?php echo $base_url ?>"
            }, document.getElementById('curlcast-mini'));

            window.CurlCastWidgets.mountFull({
              history: false,
              apiKey: api_key,
              apiHost: api_host
            }, document.getElementById('curlcast-full'));
          });
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }, true)

  })(window, ajaxGet);
</script>

