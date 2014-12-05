<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast_standings">
  </div>
</div>
<script>
  React.renderComponent(
    CurlcastShell({
        component: CurlcastStandings,
        componentProps: {url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 30000},
        highlight: 'standings'
      }
    ),
    document.getElementById('curlcast_standings')
  );
</script>
