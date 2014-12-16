{div, p, a, hr, img, br} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ol, li} = React.DOM
Link = ReactRouter.Link

TeamShowBreadcrumb = React.createClass
  render: ->
    ol className: 'breadcrumb',
      li {},
        Link to: 'teams', params: { competition_id: @props.routerState.params.competition_id },
          'Teams'
      li className: 'active',
        @props.team.name

TeamShowAthlete = React.createClass
  render: ->
    team_athlete = @props.team_athlete
    role_identifier = team_athlete.position
    role_identifier = team_athlete.role + ', ' + role_identifier if team_athlete.role?
    div className: 'col-xs-6 col-sm-3 col-md-2',
      img src: @props.absoluteUrl(team_athlete.athlete.photo_url), width: 105, height: 105
      div className: 'caption',
        p {},
          team_athlete.athlete.last_first
          br {}
          "#{role_identifier}"

TeamShowAthleteList = React.createClass
  render: ->
    div className: 'col-xs-12',
      div className: 'row',
        @props.team_athletes.map (team_athlete) =>
          TeamShowAthlete key: team_athlete.id, team_athlete: team_athlete, absoluteUrl: @props.absoluteUrl

TeamShowScoresGame = React.createClass
  render: ->
    game = @props.game
    game_position_self = if game.game_positions[0].name == @props.team.name then 0 else 1
    game_position_opponent = if game_position_self == 0 then 1 else 0
    #console.log 'TeamShowScoreGame.render', @props.team, game.game_positions
    tr {},
      td {}, game.draw.label
      td {}, game.draw.starts_at
      td {}, game.result
      td {}, "#{game.game_positions[game_position_self].total || ''} - #{game.game_positions[game_position_opponent].total || ''}"
      td className: 'hidden-xs', game.game_positions[game_position_opponent].name


TeamShowScores = React.createClass
  render: ->
    table className: 'table table-bordered table-condensed',
      thead {},
        tr {},
          th {}, 'Draw'
          th {}, 'Started at'
          th {}, 'Result'
          th {}, 'Score'
          th className: 'hidden-xs', 'Opponent'
      tbody {},
        @props.games.map (game) =>
          TeamShowScoresGame key: game.id, game: game, team: @props.team

TeamShowScoringAnalysis = React.createClass
  render: ->
    team = @props.team
    table className: 'table table-bordered table-condensed',
      thead {},
        tr {},
          th {}, 'Games'
          th className: 'hidden-xs', 'Ends'
          th {}
          th className: 'hidden-xs', 'LSFE'
          th className: 'hidden-xs', 'Blank Ends'
          th className: 'hidden-xs', '1pt'
          th className: 'hidden-xs', '2pt'
          th className: 'hidden-xs', '3pt'
          th className: 'hidden-xs', '4pt'
          th className: 'hidden-xs', '>4pt'
          th {}, 'Tot'
          th className: 'hidden-xs', 'Avg'
      tbody {},
        tr {},
          td rowSpan: '2', team.games_started
          td rowSpan: '2', className: 'hidden-xs', team.number_of_ends
          td {}, 'For'
          td className: 'hidden-xs', team.lsfe_for
          td className: 'hidden-xs', team.blank_ends_for
          td className: 'hidden-xs', team.ends_for_with_1pt
          td className: 'hidden-xs', team.ends_for_with_2pt
          td className: 'hidden-xs', team.ends_for_with_3pt
          td className: 'hidden-xs', team.ends_for_with_4pt
          td className: 'hidden-xs', team.ends_for_with_gt_4pt
          td {}, team.ends_for_total_points
          td className: 'hidden-xs', team.games_for_average_points
        tr {},
          td {}, 'Against'
          td className: 'hidden-xs', team.lsfe_against
          td className: 'hidden-xs', team.blank_ends_against
          td className: 'hidden-xs', team.ends_against_with_1pt
          td className: 'hidden-xs', team.ends_against_with_2pt
          td className: 'hidden-xs', team.ends_against_with_3pt
          td className: 'hidden-xs', team.ends_against_with_4pt
          td className: 'hidden-xs', team.ends_against_with_gt_4pt
          td {}, team.ends_against_total_points
          td className: 'hidden-xs', team.games_against_average_points


TeamShow = React.createClass
  render: ->
    div className: 'row',
      div className: 'col-xs-12',
        TeamShowBreadcrumb team: @props.team, routerState: @props.routerState
      div className: 'col-xs-12',
        h3 {}, @props.team.name
        TeamShowAthleteList team_athletes: @props.team.team_athletes, absoluteUrl: @props.absoluteUrl
        hr {}
        h3 {}, 'Team Scores'
        TeamShowScores games: @props.team.games, team: @props.team
        h3 {}, 'Scoring Analysis'
        TeamShowScoringAnalysis team: @props.team

TeamListItem = React.createClass
  render: ->
    team = @props.team
    tr {},
      td {},
        #a href: "#!" + team.url, onClick: @showTeam,
        Link to: 'teams-show', params: { competition_id: @props.routerState.params.competition_id, team_id: team.to_param },
          team.name
      td {}, team.coach || ''
      td {}, team.affiliation
      td {}, team.location


TeamList = React.createClass
  render: ->
    table className: 'table table-bordered table-condensed',
      thead {},
        tr {},
          th {}, "Team Name"
          th {}, "Coach"
          th {}, "Affliation"
          th {}, "Location"
      tbody {},
        @props.teams.map (team) =>
          teamProps = @props
          teamProps.key = team.id
          teamProps.team = team
          TeamListItem teamProps

Teams = React.createClass
  getInitialState: ->
    {teams: null, team: null, base_url: null}

  baseUrl: ->
    @props.apiRoot.substr(0, @props.apiRoot.indexOf('/', 8))

  absoluteUrl: -> # Variable arguments accepted
    return @state.base_url unless arguments.length > 0
    args = []
    for i in [0..(arguments.length-1)]
      args.push arguments[i]
    uri = args.join "/"
    base_url = @baseUrl()
    url = ""
    url = base_url unless uri.toLowerCase().indexOf(base_url.toLowerCase()) == 0
    return url + uri

  processServerData: (props) ->
    results = props.data
    if props.routerState.params.team_id?
      @setState team: results, teams: null
    else
      if results?
        for team in results
          team.to_param = @props.teamToStr team

      @setState teams: results, team: null #, baseUrl: @baseUrl()

  componentWillReceiveProps: (nextProps) ->
    @processServerData nextProps

  render: ->
    unless @state.teams? || @state.team?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Teams...'

    passedProps = @props
    passedProps.absoluteUrl = @absoluteUrl

    if @state.team == null
      passedProps.teams = @state.teams
      TeamList passedProps
    else
      passedProps.team = @state.team
      TeamShow passedProps

window.CurlcastTeams = Teams

