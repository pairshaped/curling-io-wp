{a, div, strong} = React.DOM
Link = ReactRouter.Link

OrganizationNavigation = React.createClass
  render: ->
    console.log 'OrganizationNavigation.render'
    { competitions, current_id, competitionChanged } = @props
    div className: 'list-group',
      competitions.map (competition) =>
        #OrganizationLink key: competition.id, competition: competition, active: (competition.to_param == current_id), competitionChanged: competitionChanged
        console.log 'OrganizationNavigation.nav', (competition.to_param == current_id), competition.to_param, current_id
        active_class = if (competition.to_param == current_id) then ' active' else ''
        Link key: competition.to_param, to: 'scoreboard', params: { competition_id: competition.to_param }, className: "list-group-item#{active_class}", onClick: @props.redrawShell,
          competition.title

      Link to: 'competitions', className: 'list-group-item',
        strong {}, 'More Competitions'


window.OrganizationNavigation = OrganizationNavigation
