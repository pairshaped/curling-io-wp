<div class="curlcast" id="scoreboard">
  <div class="container" id="curlcast">
  </div>
</div>


<script type="text/javascript">
  (function(){
    'use strict';

    var routes = React.createElement( ReactRouter.Route, { handler: CurlcastDummy, path: '/', name: 'root' },
      React.createElement( ReactRouter.DefaultRoute, { handler: CurlcastCompetitions, name: 'competitions' } ),
      React.createElement( ReactRouter.Route, { name: 'shell', path: 'competitions/:competition_id', handler: CurlcastShell },
        React.createElement( ReactRouter.Route, { name: 'scoreboard', path: 'scoreboard', handler: CurlcastScoreboard },
          React.createElement( ReactRouter.Route, { name: 'scoreboard-day', path: ':day', handler: CurlcastScoreboardDay },
            React.createElement( ReactRouter.Route, { name: 'scoreboard-draw', path: 'draw/:draw', handler: CurlcastScoreboardDraw })
          )
        ),
        React.createElement( ReactRouter.Route, { name: 'boxscore', path: 'games/:game_id', handler: CurlcastBoxScore }),
        React.createElement( ReactRouter.Route, { name: 'standings', path: 'standings', handler: CurlcastStandings },
          React.createElement( ReactRouter.Route, { name: 'standings-round', path: ':round_id', handler: CurlcastDummy })
        ),
        React.createElement( ReactRouter.Route, { name: 'teams', path: 'teams', handler: CurlcastTeams },
          React.createElement( ReactRouter.Route, { name: 'teams-show', path: ':team_id', handler: CurlcastDummy })
        )
      )
    );

    ReactRouter.run(routes, function(Handler, state){
      React.renderComponent( React.createElement( Handler, {
        apiRoot: '{url}',
        //prefix: '{path_prefix}',
        routerState: state
      }), document.getElementById('curlcast') );
    });

  })();
</script>
