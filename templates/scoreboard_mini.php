<div class="curlcast">
  <div class="container-fluid">
    <div class="row">
      <div id="curlcast_scoreboard-widget"></div>
    </div>
  </div>
</div>
<script>
  React.renderComponent(
    Scoreboard({url: '{url}', pathPrefix: '{path_prefix}', pollInterval: 5000}),
    document.getElementById('curlcast_scoreboard-widget')
  );
</script>
