(function(window, ajaxGet){
  'use strict';

  function mountFullWidget(target){
    var props = {
      history: false,
      apiKey: window.CurlcastV2.full.api_key,
      apiHost: window.CurlcastV2.full.api_host
    };

    window.CurlCastWidgets.mountFull(props, target);
  };

  document.addEventListener("DOMContentLoaded", function(){
    var domTarget;
    if (!window.CurlcastV2) return;
    domTarget = document.getElementById(window.CurlcastV2.full.domTarget);
    if (!domTarget) {
      return;
    }

    if (window.CurlcastScripts.areLoaded()) {
      mountFullWidget(domTarget);
    } else {
      ajaxGet(window.CurlcastV2.full.widgets_api + "/manifest.json", {
        success: function(response) {
          var scriptFile, index, scriptTags = [];
          scriptTags = response.map(function(scriptFile) {
            return CurlcastScripts.create(window.CurlcastV2.full.widgets_api + "/" + scriptFile)
          });

          CurlcastScripts.load(scriptTags, function() {
            mountFullWidget(domTarget)
          });
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }
  }, true);


})(window, ajaxGet);
