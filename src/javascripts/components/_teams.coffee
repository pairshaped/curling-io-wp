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
          CURLCAST_LANG.common.nav.teams
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
    game_result = ''

    startsAt = moment(game.draw.starts_at, 'MMM DD, YYYY h:mma', 'en').locale(CURLCAST_LANG.__locale).format('MMM DD, YYYY h:mma')

    if game.result?
      game_result = CURLCAST_LANG.common[game.result.toLowerCase()] || game.result
    tr {},
      td {}, game.draw.label
      td {}, startsAt
      td {}, game_result
      td {},
        if !(game.game_positions[0].total? && game.game_positions[1].total?)
          ' - '
        else
          "#{game.game_positions[game_position_self].total} - #{game.game_positions[game_position_opponent].total}"
      td className: 'hidden-xs', game.game_positions[game_position_opponent].name


TeamShowScores = React.createClass
  render: ->
    table className: 'table table-bordered table-condensed',
      thead {},
        tr {},
          th {}, CURLCAST_LANG.common.draw
          th {}, CURLCAST_LANG.common.table.started_at
          th {}, CURLCAST_LANG.common.table.result
          th {}, CURLCAST_LANG.common.table.score
          th className: 'hidden-xs', CURLCAST_LANG.common.table.opponent
      tbody {},
        @props.games.map (game) =>
          TeamShowScoresGame key: game.id, game: game, team: @props.team

TeamShowScoringAnalysis = React.createClass
  render: ->
    team = @props.team
    div className: 'table-responsive',
      table className: 'table table-bordered table-condensed',
        thead {},
          tr {},
            th {}, CURLCAST_LANG.common.table.games
            th className: 'hidden-xs', CURLCAST_LANG.common.table.ends
            th {}
            th className: 'hidden-xs', CURLCAST_LANG.common.table.lsfe
            th className: 'hidden-xs', CURLCAST_LANG.common.table.blank_ends
            th className: 'hidden-xs', "1#{CURLCAST_LANG.common.table.point}"
            th className: 'hidden-xs', "2#{CURLCAST_LANG.common.table.points}"
            th className: 'hidden-xs', "3#{CURLCAST_LANG.common.table.points}"
            th className: 'hidden-xs', "4#{CURLCAST_LANG.common.table.points}"
            th className: 'hidden-xs', ">4#{CURLCAST_LANG.common.table.points}"
            th {}, CURLCAST_LANG.common.table.total
            th className: 'hidden-xs', CURLCAST_LANG.common.table.average
        tbody {},
          tr {},
            td rowSpan: '2', team.games_started
            td rowSpan: '2', className: 'hidden-xs', team.number_of_ends
            td {}, CURLCAST_LANG.common.table.for
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
            td {}, CURLCAST_LANG.common.table.against
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
        h3 {}, CURLCAST_LANG.common.team_scores
        TeamShowScores games: @props.team.games, team: @props.team
        h3 {}, CURLCAST_LANG.common.scoring_analysis
        TeamShowScoringAnalysis team: @props.team

TeamListItem = React.createClass
  render: ->
    team = @props.team
    tr {},
      td {},
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
          th {}, CURLCAST_LANG.common.table.team
          th {}, CURLCAST_LANG.common.table.coach
          th {}, CURLCAST_LANG.common.table.affiliation
          th {}, CURLCAST_LANG.common.table.location
      tbody {},
        @props.teams.map (team) =>
          teamProps = @props
          teamProps.key = team.id
          teamProps.team = team
          TeamListItem teamProps

Teams = React.createClass
  getInitialState: ->
    {teams: null, team: null}

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
    url = base_url unless (uri.toLowerCase().indexOf(base_url.toLowerCase()) == 0) || (uri.indexOf('http') >= 0)
    return url + uri

  processServerData: (props) ->
    results = props.data
    if props.routerState.params.team_id?
      @setState team: results, teams: null
    else
      if results?
        for team in results
          team.to_param = @props.teamToStr team

      @setState teams: results, team: null

  componentWillReceiveProps: (nextProps) ->
    @processServerData nextProps

  componentWillMount: ->
    @processServerData @props

  render: ->
    passedProps = @props
    passedProps.absoluteUrl = @absoluteUrl

    if @state.team == null
      passedProps.teams = @state.teams
      TeamList passedProps
    else
      passedProps.team = @state.team
      TeamShow passedProps

window.CurlcastTeams = Teams
