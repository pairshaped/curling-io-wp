function resizeIframeReceive(frame_id) {
  jQuery.receiveMessage(function(event) {
    jQuery('#' + frame_id).css({
      height: event.data * 1 + 50 + 'px'
    });
    // console.log("resized in parent", frame_id, event.data);
  });
}

jQuery('document').ready(function() {
  resizeIframeReceive('stats-frame');
});
