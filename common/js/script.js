
function createScript(scriptUrl) {
  var scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.src = scriptUrl;
  return scriptTag;
};

function loadScripts(scripts, afterAll) {
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
