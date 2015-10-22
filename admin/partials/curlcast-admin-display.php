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

// $curlcast_widgets_api = get_option($this->curlcast_setting_prefix . '_widgets_api', 'http://widgets.curlcast.ca');
// $curlcast_api_host = get_option($this->curlcast_setting_prefix . '_api_host', 'http://widgets.curlcast.ca');
// $curlcast_api_key = get_option($this->curlcast_setting_prefix . '_api_key', 'http://widgets.curlcast.ca');

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

  <!-- <h3>Previews</h3> -->
  <!--  -->
  <!-- <a class="button button&#45;primary" id="curlcast&#45;preview&#45;full" href="#">Preview Full&#45;Page Widget</a> -->
  <!-- <a class="button button&#45;primary" id="curlcast&#45;preview&#45;sidebar" href="#">Preview Side&#45;Bar Widget</a> -->
  <!--  -->
  <!-- <div id='curlcast&#45;widget&#45;area'> -->
  <!--   <div id='curlcast&#45;preview' class="curlcast"></div> -->
  <!-- </div> -->
</div>

<script type="text/javascript">
  (function(window, ajaxGet){
    'use strict';

    var createScript,
        loadScripts;

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

    var revealWidgetArea = function() {
      var element = document.getElementById('curlcast-widget-area');
      element.style.display = 'block';
    }

    var fullPreview = document.getElementById('curlcast-preview-full');
    fullPreview.addEventListener('click', function(e) {
      e.preventDefault();
      revealWidgetArea()

      var widgets_api = document.getElementById('curlcast_widgets_api').value,
          api_host = document.getElementById('curlcast_api_host').value,
          api_key = document.getElementById('curlcast_api_key').value;

       ajaxGet(widgets_api + "/manifest.json", {
         success: function(response) {
           var scriptFile,
               index,
               scriptTags = [];

           scriptTags = response.map(function(scriptFile) {
             return createScript(widgets_api + "/" + scriptFile)
           });
           loadScripts(scriptTags, function() {
             window.CurlCastWidgets.mountFull({
               history: false,
               apiKey: api_key,
               apiHost: api_host
             }, document.getElementById('curlcast-preview'));
           });
         },
         error: function(request) {
           log('Something bad happened', request);
         }
       });
    });

    var sidebarPreview = document.getElementById('curlcast-preview-sidebar');
    sidebarPreview.addEventListener('click', function(e) {
      e.preventDefault();
      revealWidgetArea()

      var widgets_api = document.getElementById('curlcast_widgets_api').value,
          api_host = document.getElementById('curlcast_api_host').value,
          api_key = document.getElementById('curlcast_api_key').value;

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
               history: false,
               apiKey: api_key,
               apiHost: api_host,
              basePath: ''
             }, document.getElementById('curlcast-preview'));
           });
         },
         error: function(request) {
           log('Something bad happened', request);
         }
       });
    });

  })(window, ajaxGet);
</script>
