<iframe id="stats-frame" src="{url}" frameborder="0" border="0" cellspacing="0"></iframe>

<script>
  $(function() {
    window.handleIFrameHeightResponse = function(e) {
      var action = e.data.split(':')[0]
      if (action == 'height') {
        $("#stats-frame").css('height', e.data.split(':')[1]);
      }
    }
    window.addEventListener('message', handleIFrameHeightResponse, false);
  });
</script>
