<div class="curlcast">
  <div class="container-fluid" id="curlcast_boxscore"></div>
</div>
<script>
  React.renderComponent(
    CurlcastShell({
        component: CurlcastBoxScore,
        componentProps: {
          url: "{url}",
          pathPrefix: "{path_prefix}",
          pollInterval: 15000
        },
        highlight: 'scoreboard'
      }
    ),
    document.getElementById('curlcast_boxscore')
  );
</script>
