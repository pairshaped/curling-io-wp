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

  request = new XMLHttpRequest();
  if ("withCredentials" in request) {
    request.withCredentials = false; //true;
  } else if (typeof XDomainRequest != "undefined") {
    request = new XDomainRequest();
  } else {
    log("CORS NOT SUPPORTED BY THE BROWSER.");
  }

  if (!request) {
    log("Cannot XMLHttpRequest");
    return request;
  }

  request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
      dataReady(request, callbacks);
    }
  };

  request.open('GET', url, true);
  request.send(null);

  return request;
}
