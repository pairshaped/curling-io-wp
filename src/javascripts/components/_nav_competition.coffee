{nav, div, button, span, ul, li, a} = React.DOM
Link = ReactRouter.Link

CompetitionNavigation = React.createClass
  render: ->
    console.log 'CompetitionNavigation.render'
    {routerState, competition} = @props
    {title, short_name} = competition

    nav className: 'navbar navbar-default', role: 'navigation',
      div className: 'navbar-header',
        button className: 'navbar-toggle', 'data-target': '#curlcast-navigation', 'data-toggle': 'collapse', type: 'button',
          span className: 'sr-only', 'Toggle navigation'
          span className: 'icon-bar'
          span className: 'icon-bar'
          span className: 'icon-bar'
        span className: 'navbar-brand', short_name || title
      div className: 'collapse navbar-collapse', id: 'curlcast-navigation',
        ul className: 'nav navbar-nav',
          li {}, # TODO: Set className: 'active' on proper route(s)
            Link to: 'scoreboard', params: { competition_id: competition.id },
              'Scoreboard'
          li {}, # TODO: ...
            a href: '#standings_draw', 'Standings / Draw'
          li {}, # TODO: ...
            a href: '#teams', 'Teams'
          li className: 'visible-xs',
            Link to: 'competitions',
              'More Competitions'

window.CompetitionNavigation = CompetitionNavigation


