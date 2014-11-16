<div class="curlcast">
  <div class="container-fluid" id="curlcast_scoreboard"></div>
</div>
<script>
  React.renderComponent(
    CurlcastScoreboard({url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 30000}),
    document.getElementById('curlcast_scoreboard')
  );
</script>


