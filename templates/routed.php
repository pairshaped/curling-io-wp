<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast">
  </div>
</div>
<script type="text/javascript">
  routes = React.createElement( ReactRouter.Route, { handler: CurlcastDummy, path: '/' },
    React.createElement( ReactRouter.DefaultRoute, { handler: CurlcastCompetitions, name: 'competitions' } ),
    React.createElement( ReactRouter.Route, { path: 'competitions/:competition_id', handler: CurlcastShell },
      React.createElement( ReactRouter.Route, { name: 'scoreboard', path: 'scoreboard', handler: CurlcastScoreboard } )
    )
  );

  ReactRouter.run( routes, function(Handler, state){
    console.log( 'ReactRouter', Handler(), state )
    React.renderComponent( React.createElement( Handler, {
      apiRoot: '{url}',
      prefix: '{path_prefix}',
      routerState: state
    }), document.getElementById('curlcast') );
  });

</script>
