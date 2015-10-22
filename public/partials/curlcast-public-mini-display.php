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

$curlcast_widgets_api = get_option('curlcast_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option('curlcast_api_host', 'http://curlcast.ca');
$curlcast_api_key = get_option('curlcast_api_key', '');

$page = $this->get_full_widget_page();
$base_url = get_page_link($page->ID);

?>

<div id='curlcast-mini' class="curlcast"></div>

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
            var props;

            props = {
              apiKey: api_key,
              apiHost: api_host,
              basePath: '<?php echo $base_url; ?>'
            };

            window.CurlCastWidgets.mountMini(props, document.getElementById('curlcast-mini'));
          });
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }, true)

  })(window, ajaxGet);
</script>


