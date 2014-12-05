<div class="curlcast">
  <div class="container-fluid" id="curlcast_scoreboard"></div>
</div>
<script>
  React.renderComponent(
    CurlcastShell({
        component: CurlcastScoreboard,
        componentProps: {
          url: "{url}",
          pathPrefix: "{path_prefix}",
          pollInterval: 30000
        },
        highlight: 'scoreboard'
      }
    ),
    document.getElementById('curlcast_scoreboard')
  );

</script>


