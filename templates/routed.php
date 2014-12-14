<div class="curlcast" id="scoreboard">
  <div class="container-fluid" id="curlcast">
  </div>
</div>
<script type="text/javascript">
  routes = React.createElement( ReactRouter.Route, { handler: CurlcastDummy, path: '/', name: 'root' },
    React.createElement( ReactRouter.DefaultRoute, { handler: CurlcastCompetitions, name: 'competitions' } ),
    React.createElement( ReactRouter.Route, { name: 'shell', path: 'competitions/:competition_id', handler: CurlcastShell },
      React.createElement( ReactRouter.Route, { name: 'scoreboard', path: 'scoreboard', handler: CurlcastScoreboard },
        React.createElement( ReactRouter.Route, { name: 'scoreboard-day', path: ':day', handler: CurlcastScoreboardDay },
          React.createElement( ReactRouter.Route, { name: 'scoreboard-draw', path: ':draw', handler: CurlcastScoreboardDraw })
        )
      ),
      React.createElement( ReactRouter.Route, { name: 'boxscore', path: 'games/:game_id', handler: CurlcastBoxScore })
    )
  );

  ReactRouter.run( routes, function(Handler, state){
    React.renderComponent( React.createElement( Handler, {
      apiRoot: '{url}',
      prefix: '{path_prefix}',
      routerState: state
    }), document.getElementById('curlcast') );
  });

</script>
