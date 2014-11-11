<!--<iframe id="stats-frame" src="{url}" frameborder="0" border="0" cellspacing="0" style="width:100%;"></iframe>

<script>
  window.handleIFrameHeightResponse = function(e) {
    var action = e.data.split(':')[0]
    if (action == 'height') {
      document.getElementById("stats-frame").style.height = e.data.split(':')[1];
    }
  }
  window.addEventListener('message', handleIFrameHeightResponse, false);
</script>-->

<div class="curlcast" id="boxscore">
  <div class="container-fluid" id="curlcast_boxscore">
  </div>
</div>
<script>
  React.renderComponent(
    CurlcastBoxScore({url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 100}),
    document.getElementById('curlcast_boxscore')
  );
</script>