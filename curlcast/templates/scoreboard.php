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


