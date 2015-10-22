<?php

$curlcast_widgets_api = get_option('curlcast_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option('curlcast_api_host', 'http://curlcast.ca');
$curlcast_api_key = get_option('curlcast_api_key', '');

?>

<div id='curlcast-full' class="curlcast"></div>

<script type="text/javascript">
  (function(window, ajaxGet){
    'use strict';

    var widgets_api = "<?php echo $curlcast_widgets_api; ?>",
        api_host = "<?php echo $curlcast_api_host; ?>",
        api_key = "<?php echo $curlcast_api_key; ?>";

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
              history: false,
              apiKey: api_key,
              apiHost: api_host
            };

            window.CurlCastWidgets.mountFull(props, document.getElementById('curlcast-full'));
          });
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }, true)

  })(window, ajaxGet);
</script>

