function log() {
  if (console.error) {
    console.error.apply(console, arguments)
    return;
  }
  if (console.log) {
    console.log.apply(console, arguments)
    return;
  }
  alert(JSON.stringify(arguments));
}

function ajaxGet(url, callbacks) {
  var dataReady, request;

  dataReady = function(request, callbacks) {
    var response;
    if (request.status == 200) {
      response = JSON.parse(request.responseText);
      if (callbacks.success) callbacks.success(response);
    } else {
      if (callbacks.error) callbacks.error(request);
    }
  };


  useXDomainRequest = false;
  request = new XMLHttpRequest();
  if (typeof XDomainRequest != "undefined") {
    useXDomainRequest = true
    request = new XDomainRequest();
  }

  if (!request) {
    log("Cannot XMLHttpRequest");
    return request;
  }

  request.open('GET', url, true);

  if (useXDomainRequest) {
    request.onload = function() {
      if (callbacks.success) callbacks.success(JSON.parse(request.responseText))
    };
    request.onerror = function() {
      if (callbacks.error) callbacks.error(request)
    };
  } else {
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
        dataReady(request, callbacks);
      }
    };
  }

  request.send(null);

  return request;
}
