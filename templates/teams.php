<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast_teams">
  </div>
</div>
<script>
  React.renderComponent(
    CurlcastShell({
        component: CurlcastTeams,
        componentProps: {url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 60000},
        highlight: 'teams'
      }
    ),
    document.getElementById('curlcast_teams')
  );
</script>
