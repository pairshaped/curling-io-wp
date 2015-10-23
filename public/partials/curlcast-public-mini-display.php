<?php

$curlcast_widgets_api = get_option('curlcast_v2_widgets_api', 'http://widgets.curlcast.ca');
$curlcast_api_host = get_option('curlcast_v2_api_host', 'http://curlcast.ca');
$curlcast_api_key = get_option('curlcast_v2_api_key', '');

$page_id = $this->get_full_widget_page();
$base_url = get_page_link($page_id);

?>

<div id='curlcast-mini' class="curlcast"></div>

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


