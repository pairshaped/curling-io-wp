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
$curlcast_api = get_option($this->curlcast_setting_prefix . '_widgets_api', 'http://widgets.curlcast.ca');

?>

<div id='curlcastFull' class="curlcast"></div>

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
    }, true)


  })(ajaxGet);
</script>

