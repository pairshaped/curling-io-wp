{a, div, strong} = React.DOM
Link = ReactRouter.Link

OrganizationLink = React.createClass
  render: ->
    {title, url} = @props.competition
    competition_id = @props.competition.url.split('/').slice(-2)[0]
    active_class = ''
    active_class = ' active' if @props.active == true
    Link to: 'scoreboard', params: { competition_id: competition_id }, className: "list-group-item#{active_class}", title

OrganizationNavigation = React.createClass
  render: ->
    { competitions, current_competition, more_competitions_url } = @props
    div className: 'list-group', ref: 'linkParent',
      competitions.map (competition) ->
        OrganizationLink({key: competition.id, competition: competition, active: (competition.active == true)})
      Link to: 'competitions', className: 'list-group-item', href: more_competitions_url,
        strong {}, 'More Competitions'


window.OrganizationNavigation = OrganizationNavigation
