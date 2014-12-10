<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast">
  </div>
</div>
<script type="text/javascript">
  routes = React.createElement( ReactRouter.Route, { name: 'competition-list', path: '/competitions', handler: CurlcastCompetitions },
    React.createElement( ReactRouter.Route, { name: 'scoreboard', path: '/competitions/:competition_id/scoreboard', handler: CurlcastScoreboard } )
  );

  console.log( 'Routes', routes );
  console.log( 'Path Prefix:', '{path_prefix}');
  console.log( 'Url:', '{url}' );

  ReactRouter.run( routes, function(Handler, state){
    console.log( 'ReactRouter', Handler(), state )
    React.renderComponent( React.createElement( Handler, {
      apiRoot: 'http://curlcast.ca/stats/organizations/qw4LUsJ1_aQ/',
      pathPrefix: 'stats'
    }), document.getElementById('curlcast') );
  });

</script>
