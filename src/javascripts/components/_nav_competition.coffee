{nav, div, button, span, ul, li, a} = React.DOM
Link = ReactRouter.Link

CompetitionNavigation = React.createClass
  render: ->
    {routerState, competition, currentRoute} = @props
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
          li className: (if currentRoute == 'scoreboard' || currentRoute == 'boxscore' then 'active' else null), # TODO: Set className: 'active' on proper route(s)
            Link to: 'scoreboard', params: { competition_id: competition.to_param }, #, onClick: @props.shellComponentChanged,
              'Scoreboard'
          li className: (if currentRoute == 'standings' then 'active' else null),
            Link to: 'standings', params: { competition_id: competition.to_param },
              'Standings / Draw'
          li className: (if currentRoute == 'teams' then 'active' else null),
            Link to: 'teams', params: { competition_id: competition.to_param },
              'Teams'
          li className: 'visible-xs',
            Link to: 'competitions',
              'More Competitions'

window.CompetitionNavigation = CompetitionNavigation


