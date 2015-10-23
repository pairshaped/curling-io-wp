(function(window) {
  'use strict';
  window.onload = function() {
    var dom, host, url;

    host = document.getElementById('curlcast_v2_widgets_api').value
    url = host + '/manifest.json';

    ajaxGet(
      url,
      {
        success: function(response) {
          var idsAndData, idAndData, index, element, entryUrl;

          idsAndData = [
            ['full-entry', response[0]],
            ['icons-entry', response[1]],
            ['mini-entry', response[2]]
          ];

          for(index=0; index < idsAndData.length; index++) {
            idAndData = idsAndData[index]
            element = document.getElementById('widgets-debug-' + idAndData[0]);
            if (!element) continue;
            entryUrl = [host, idAndData[1]].join("/")
            element.innerHTML = "<input type='text' readonly='readonly' style='width: 450px !important;' value='" + entryUrl + "' />";
          }

        },
        error: function(request) {
          log('Something bad happened', request);
        }
      }
    );
  };

})(window);
