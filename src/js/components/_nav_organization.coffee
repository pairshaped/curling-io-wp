{a, div, strong} = React.DOM

OrganizationLink = React.createClass
  render: ->
    {title, url} = @props.competition
    active_class = ''
    active_class = ' active' if @props.active == true
    a className: "list-group-item#{active_class}", href: url || "#missing", title

OrganizationNavigation = React.createClass
  render: ->
    { competitions, current_competition, more_competitions_url } = @props
    div className: 'list-group', ref: 'linkParent',
      competitions.map (competition) ->
        OrganizationLink({key: competition.id, competition: competition, active: (competition.active == true)})
      a className: 'list-group-item', href: more_competitions_url,
        strong {}, 'More Competitions'


window.OrganizationNavigation = OrganizationNavigation
