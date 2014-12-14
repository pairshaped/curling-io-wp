{div, p, a, hr, img, br} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ol, li} = React.DOM

TeamShowBreadcrumb = React.createClass
  showTeamIndex: (e) ->
    @props.showTeam null

  render: ->
    ol className: 'breadcrumb',
      li {},
        a href: '#', onClick: @showTeamIndex, 'Teams'
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
    game_position_self = if game.game_positions[0].team_id == @props.team.id then 0 else 1
    game_position_opponent = if game_position_self == 1 then 0 else 1
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
        TeamShowBreadcrumb team: @props.team, showTeam: @props.showTeam
      div className: 'col-xs-12',
        h3 {}, @props.team.name
        TeamShowAthleteList team_athletes: @props.team.team_athletes, absoluteUrl: @props.absoluteUrl
        hr {}
        h3 {}, 'Team Scores'
        TeamShowScores games: @props.team.games, team: @props.team
        h3 {}, 'Scoring Analysis'
        TeamShowScoringAnalysis team: @props.team

TeamListItem = React.createClass
  showTeam: ->
    @props.showTeam @props.absoluteUrl( @props.team.url ) + ".js"

  render: ->
    team = @props.team
    tr {},
      td {},
        a href: "#!" + team.url, onClick: @showTeam,
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
          TeamListItem key: team.id, team: team, showTeam: @props.showTeam, absoluteUrl: @props.absoluteUrl

Teams = React.createClass
  getInitialState: ->
    {teams: null, team: null, base_url: null}

  baseUrl: ->
    @props.url.substr(0, @props.url.indexOf('/', 8))

  loadDataFromServer: ->
    unless @state.base_url?
      @setState base_url: @baseUrl()

    jQuery.ajax(
      url: @props.url
      dataType: 'jsonp'
      cache: true
      jsonpCallback: 'curlcastJSONP'
      success: (results) =>
        @setState teams: results
        setTimeout @loadDataFromServer, @props.pollInterval
    )

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

  showTeam: (url = null) ->
    if url?
      jQuery.ajax(
        url: url
        dataType: 'jsonp'
        cache: true
        jsonpCallback: 'curlcastJSONP'
        success: (results) =>
          @setState team: results
      )
    else
      @setState team: null

  parseUrl: ->
    # Get hash value of url
    if window.location.hash
      if window.location.hash[1] == "!"
        @showTeam @absoluteUrl(window.location.hash.substr(2) + ".js")

  componentWillMount: ->
    @loadDataFromServer()
    @parseUrl()

  componentDidMount: ->
    @props.fixLinks()

  componentDidUpdate: ->
    @props.fixLinks()

  render: ->
    unless @state.teams?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Teams...'

    if @state.team == null
      TeamList teams: @state.teams, showTeam: @showTeam, absoluteUrl: @absoluteUrl
    else
      TeamShow team: @state.team, teams: @state.teams, showTeam: @showTeam, absoluteUrl: @absoluteUrl

window.CurlcastTeams = Teams

