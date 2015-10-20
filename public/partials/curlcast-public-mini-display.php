<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Curlcast
 * @subpackage Curlcast/public/partials
 */

$curlcast_widgets_api = get_option($this->curlcast_setting_prefix . '_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option($this->curlcast_setting_prefix . '_api_host', 'http://widgets.curlcast.ca');
$curlcast_api_key = get_option($this->curlcast_setting_prefix . '_api_key', 'http://widgets.curlcast.ca');

$page = $this->get_full_widget_page();
$base_url = get_page_link($page->ID);

?>

<div id='curlcast-mini' class="curlcast"></div>

<script type="text/javascript">
  (function(window, ajaxGet){
    'use strict';

    var injectScript,
        widgets_api = "<?php echo $curlcast_widgets_api; ?>",
        api_host = "<?php echo $curlcast_api_host; ?>",
        api_key = "<?php echo $curlcast_api_key; ?>";

    injectScript = function(scriptUrl) {
      var scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.src = scriptUrl;
      document.body.appendChild(scriptTag);
      return scriptTag;
    };

    addEventListener('DOMContentLoaded', function() {
      ajaxGet(widgets_api + "/manifest.json", {
        success: function(response) {
          var loadIndexes = [1, 2],
              scriptIndex,
              scriptFile,
              index;
          for(index=0; index < loadIndexes.length; index++) {
            scriptIndex = loadIndexes[index]
            scriptFile = response[scriptIndex]
            injectScript(widgets_api + "/" + scriptFile);
          }
          window.CurlCastWidgets.mountMini({
            history: false,
            apiKey: api_key,
            apiHost: api_host,
            basePath: "<?php echo $base_url ?>"
          }, document.getElementById('curlcast-mini'));
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }, true)

  })(window, ajaxGet);
</script>


