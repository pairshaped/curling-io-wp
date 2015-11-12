(function(window, ajaxGet){
  'use strict';

  function mountFullWidget(target){
    var props = {
      history: false,
      apiKey: window.CurlcastV2.mini.api_key,
      apiHost: window.CurlcastV2.mini.api_host
    };

    window.CurlCastWidgets.mountFull(props, target);
  };

  document.addEventListener("DOMContentLoaded", function(){
    var domTarget;
    if (!window.CurlcastV2) return;
    domTarget = document.getElementById(window.CurlcastV2.mini.domTarget);
    if (!domTarget) {
      return;
    }

    if (window.CurlcastScripts.areLoaded()) {
      mountMiniWidget(domTarget);
    } else {
      ajaxGet(window.CurlcastV2.mini.widgets_api + "/manifest.json", {
        success: function(response) {
          var scriptFile, index, scriptTags = [];
          scriptTags = response.map(function(scriptFile) {
            return CurlcastScripts.create(window.CurlcastV2.mini.widgets_api + "/" + scriptFile)
          });

          CurlcastScripts.load(scriptTags, function() {
            mountMiniWidget(domTarget)
          });
        },
        error: function(request) {
          log('Something bad happened', request);
        }
      });
    }
  }, true);


})(window, ajaxGet);
