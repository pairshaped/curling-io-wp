<div class="curlcast">
  <div class="container-fluid" id="curlcast_scoreboard-widget"></div>
</div>
<script>
  React.renderComponent(
    CurlcastScoreboardWidget({url: '{url}', pathPrefix: '{path_prefix}', pollInterval: 5000}),
    document.getElementById('curlcast_scoreboard-widget')
  );
</script>
