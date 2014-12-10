{nav, div, button, span, ul, li, a} = React.DOM

CompetitionNavigation = React.createClass
  render: ->
    {title, short_name} = @props.competition
    {navigation} = @props

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
          li className: (if !@props.highlight? || @props.highlight == 'scoreboard' then 'active' else null),
            a href: navigation.scoreboard || '#scoreboard', 'Scoreboard'
          li className: (if @props.highlight == 'standings' then 'active' else null),
            a href: navigation.standings_draw || '#standings_draw', 'Standings / Draw'
          li className: (if @props.highlight == 'teams' then 'active' else null),
            a href: navigation.teams || '#teams', 'Teams'
          li className: 'visible-xs',
            a href: navigation.more_competitions || '#more_competitions', 'More Competitions'

window.CompetitionNavigation = CompetitionNavigation


