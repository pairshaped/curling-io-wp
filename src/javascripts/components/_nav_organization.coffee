{a, div, strong} = React.DOM
Link = ReactRouter.Link

OrganizationNavigationLink= React.createClass
  setCompetition: ->
    @props.setCompetition @props.competition

  render: ->
    {competition, current_id, active} = @props
    activeClass = if active == true then ' active' else ''
    Link to: 'scoreboard', params: { competition_id: competition.to_param }, className: "list-group-item#{activeClass}", activeClassName: 'active', onClick: @setCompetition,
      competition.title

OrganizationNavigation = React.createClass
  getInitialState: ->
    selectedCompetition: null

  setCompetition: (competition) ->
    @setState selectedCompetition: competition.id
    @props.competitionChanged competition

  render: ->
    { competitions, current_id } = @props
    div className: 'list-group',
      competitions.map (competition) =>
        OrganizationNavigationLink
          key: competition.id
          competition: competition
          active: (competition.id == @state.selectedCompetition)
          current_id: current_id
          setCompetition: @setCompetition
      Link to: 'competitions', className: 'list-group-item',
        strong {}, 'More Competitions'


window.OrganizationNavigation = OrganizationNavigation
