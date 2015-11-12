
window.CurlcastScripts = {
  create: function(scriptUrl) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.className = 'curlcast-v2'
    scriptTag.src = scriptUrl;
    return scriptTag;
  },

  load: function(scripts, afterAll) {
    var script;
    script = scripts.shift();
    document.body.appendChild(script);
    script.onload = function() {
      if (scripts.length > 0) {
        window.CurlcastScripts.load(scripts, afterAll);
      } else {
        if (afterAll) afterAll();
      }
    }
  },

  areLoaded: function() {
    var i;
    scripts = document.scripts;
    for(i=0; i < scripts.length; i++){
      s = scripts[i]
      if (s.className.indexOf("curlcast-v2") >= 0) return true;
    }
    return false;
  }
};

