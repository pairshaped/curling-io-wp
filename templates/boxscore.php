<div class="curlcast">
  <div class="container-fluid" id="curlcast_boxscore"></div>
</div>
<script>
  React.renderComponent(
    CurlcastBoxScore({url: "{url}", pathPrefix: "{path_prefix}", pollInterval: 15000}),
    document.getElementById('curlcast_boxscore')
  );
</script>
