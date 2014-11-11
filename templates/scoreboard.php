<!--<iframe id="stats-frame" src="{url}" frameborder="0" border="0" cellspacing="0"></iframe>

<script>
  window.handleIFrameHeightResponse = function(e) {
    var action = e.data.split(':')[0]
    if (action == 'height') {
      document.getElementById("stats-frame").style.height = e.data.split(':')[1];
    }
  }
  window.addEventListener('message', handleIFrameHeightResponse, false);
</script>-->

<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast_scoreboard">
  </div>
</div>
<script>
  React.renderComponent(
    CurlcastScoreboard({url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 5000}),
    document.getElementById('curlcast_scoreboard')
  );
</script>


