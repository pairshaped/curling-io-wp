{div, span, a} = React.DOM
{ol, ul, li} = React.DOM
{table, thead, tr, th, tbody, td, tfoot} = React.DOM
{h1, h6} = React.DOM
Link = ReactRouter.Link

BreadCrumbDraw = React.createClass
  render: ->
    console.log 'Boxscore.BreadCrumbDraw', @props
    active_class = ''
    active_class = 'active' if @props.active == true

    dayParam = @props.dayToStr @props.dayFromDraw( @props.draw )
    drawParam = @props.drawToStr @props.draw

    li className: active_class, role: 'presentation',
      Link to: 'scoreboard-draw', params: { competition_id: @props.routerState.params.competition_id, day: dayParam, draw: drawParam }, href: '#', role: 'menuitem',
      #a href: @props.draw.game_url,
        "Draw #{@props.draw.label}, #{@props.draw.start_at_hour}"

BreadCrumbGame = React.createClass
  render: ->
    active_class = ''
    active_class = 'active' if @props.active == true
    li className: active_class, role: 'presentation',
      Link to: 'boxscore', params: { competition_id: @props.routerState.params.competition_id, game_id: @props.game.id }, href: '#', role: 'menuitem',
        @props.game.display_name
      #a href: @props.game.boxscore_url, @props.game.display_name

BreadCrumbNavigation = React.createClass
  render: ->
    {draws, draw, game} = @props
    if !draw? || !game?
      return span {}, "Waiting for navigation data..."

    dayParam = @props.dayToStr @props.dayFromDraw( @props.draw )
    drawParam = @props.drawToStr @props.draw

    ol className: 'breadcrumb',
      li {},
        Link to: 'scoreboard', params: { competition_id: @props.routerState.params.competition_id, day: dayParam },
          'Scores'
      li className: 'dropdown hidden-xs',
        Link to: 'scoreboard-draw', params: { competition_id: @props.routerState.params.competition_id, day: dayParam, draw: drawParam },
          "Draw #{draw.label}, #{draw.start_at_hour}"
        a href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown',
          span className: 'caret'
        ul className: 'dropdown-menu', role: 'menu',
          draws.map (draw_item) =>
            drawProps = @props
            drawProps.key = draw_item.id
            drawProps.draw = draw_item
            drawProps.active = (draw_item.id == draw.id)
            BreadCrumbDraw drawProps
      li className: 'dropdown active',
        "#{game.display_name}"
        a href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown',
          span className: 'caret'
        ul className: 'dropdown-menu', role: 'menu',
          draw.games.map (game_item) =>
            gameProps = @props
            gameProps.key = game_item.id
            gameProps.game = game_item
            gameProps.active = (game_item.d == game.id)
            BreadCrumbGame gameProps

BoxScoreBoardPositions = React.createClass
  render: ->
    { game, position, ends } = @props
    lsfe = ''
    lsfe = '*' if position.first_hammer == true
    end_scores = position.end_scores || []
    total = ''
    is_final = game.state.toLowerCase() == "final"
    if position.end_scores?
      total = 0
      for end_score in end_scores
        total += (parseInt(end_score.score) || 0)
        unless end_score.score?
          end_score.score = 'X' if is_final == true
        else
          end_score.score = end_score.score.toString()
    time_remaining = '00:00'
    minutes = Math.floor( position.time_remaining / 60 ) + ""
    seconds = position.time_remaining - (minutes * 60)
    seconds = "0" + seconds if seconds < 10
    time_remaining = "#{minutes}:#{seconds}"
    team_url_parts = position.team.url.split('/')
    team_url_parts.shift()
    team_url_parts.pop()
    team_url = team_url_parts.join('/') + "#!" + position.team.url

    tr {},
      td {},
        if position.team?
          a href: position.team.url || "#team-url",  # FIXME: team url
            span className: 'hidden-xs', position.team.name
            span className: 'visible-xs', position.team.short_name
        else
          'TBD'
      td className: 'lsfe', lsfe
      [0..(ends-1)].map (endscore, key) ->
        td key: key, className: 'end-score', end_scores[endscore].score
      td className: 'total', total
      td className: 'time-remaining', time_remaining

BoxScoreBoard = React.createClass
  render: ->
    unless @props.draw?
      return span {}, "Loading Scores..."

    {competition, game, draw} = @props
    num_ends = Math.max competition.number_of_ends || (game.positions[0].end_scores || []).length, (game.positions[1].end_scores || []).length

    div className: 'jumbotron',
      div className: 'row',
        div className: 'col-xs-12 text-center',
          h6 {}, @props.draw.starts_at
      div className: 'row spacer'
      div className: 'row',
        div className: 'col-xs-12',
          div className: 'table-responsive',
            table className: 'table table-bordered table-condensed',
              thead {},
                tr {},
                  th {}, game.name
                  th className: 'lsfe',
                    span className: 'hidden-xs', 'LSFE'
                  [1..num_ends].map (endscore, key) ->
                    th className: 'end-score', key: key, "#{endscore}"
                  th className: 'total',
                    span className: 'hidden-xs', 'TOT'
                    span className: 'visible-xs', 'T'
                  th className: 'time-remaining',
                    span className: 'visible-xs', ''
                    span className: 'hidden-xs', 'Time'
              if game.positions?
                tbody {},
                  BoxScoreBoardPositions({position: game.positions[0], ends: num_ends, game: game})
                  BoxScoreBoardPositions({position: game.positions[1], ends: num_ends, game: game})

BoxScoreTeamRosterAthlete = React.createClass
  render: ->
    tr {},
      td {}, @props.athlete.name
      td {}, @props.athlete.position
      td className: 'hidden-xs', @props.athlete.delivery

BoxScoreTeamRoster = React.createClass
  render: ->
    {team} = @props
    div className: 'col-sm-6 col-xs-12',
      table className: 'table table-bordered table-condensed table-striped',
        thead {},
          tr {},
            th colSpan: '3', team.name
          tr {},
            th {}, "Athlete"
            th width: '35%', "Position"
            th className: 'hidden-xs', width: '25%', "Delivery"
        tbody {},
          team.athletes.map (athlete) ->
            BoxScoreTeamRosterAthlete({key: athlete.id, athlete: athlete})

BoxScoreTeamRosters = React.createClass
  render: ->

    positions = @props.positions

    div className: 'row',
      div className: 'col-xs-12',
        h1 {}, 'Team Rosters'
      if positions?
        positions.map (position) ->
          if position.team? && position.team.athletes.length > 0
            BoxScoreTeamRoster({key: position.team.id, team: position.team})
      else
        span {}, "Loading positions..."

BoxScoreAnalysisTeam = React.createClass
  render: ->
    # TODO: This should be refactored if possible
    team = @props.team
    tbody {},
      tr {},
        td rowSpan: '2',
          span className: 'hidden-xs', team.name
          span className: 'visible-xs', team.short_name
        td rowSpan: '2', team.games_started || 0
        td rowSpan: '2', team.number_of_ends || 0
        td {}, "For"
        td {}, team.lsfe_for || 0
        td {}, team.blank_ends_for || 0
        td {}, team.ends_for_with_points_1 || 0
        td {}, team.ends_for_with_points_2 || 0
        td {}, team.ends_for_with_points_3 || 0
        td {}, team.ends_for_with_points_4 || 0
        td {}, team.ends_for_with_points_gt_4 ||0
        td {}, team.ends_for_total_points || 0
        td {}, team.games_for_average_points || 0
      tr {},
        td {}, "Against"
        td {}, team.lsfe_against || 0
        td {}, team.blank_ends_against || 0
        td {}, team.ends_against_with_points_1 || 0
        td {}, team.ends_against_with_points_2 || 0
        td {}, team.ends_against_with_points_3 || 0
        td {}, team.ends_against_with_points_4 || 0
        td {}, team.ends_against_with_points_gt_4 || 0
        td {}, team.ends_against_total_points || 0
        td {}, team.games_against_average_points || 0

BoxScoreAnalysis = React.createClass
  render: ->
    teams = @props.teams
    div className: 'row',
      div className: 'col-xs-12',
        h1 {}, 'Scoring Analysis'
      div className: 'col-xs-12',
        div className: 'table-responsive',
          table className: 'table table-bordered table-condensed table-striped table-hover',
            thead {},
              tr {},
                th {}, 'Team'
                th {}, 'Games'
                th {}, 'Ends'
                th {}
                th {}, 'LSFE'
                th {}, 'Blank Ends'
                th {}, '1pt'
                th {}, '2pt'
                th {}, '3pt'
                th {}, '4pt'
                th {}, '>4pt'
                th {}, 'Tot'
                th {}, 'Avg'
            teams.map (team) ->
              BoxScoreAnalysisTeam({key: team.id, team: team})

BoxScoreShootingPercentagesAthletes = React.createClass
  render: ->
    { athlete } = @props


    blank_athlete =
      position: ''
      name: ''
      statistics:
        shot_count: ''
        total_actual: ''
        percentage: ''

    athlete ||= blank_athlete
    tr {},
      td {}, athlete.name
      td {}, athlete.position
      td {}, athlete.statistics.shot_count
      td {}, athlete.statistics.total_actual
      td {}, athlete.statistics.percentage

BoxScoreShootingPercentages = React.createClass
  # This function lines up players from both teams so the shooting
  # percentage tables line up to easily compare teams.  It appears
  # that the vast majority of matches will have equal members on
  # each team, but in some cases there may be multiple/backup leads
  # or missing players.
  matchTeamPositionsFromBothTeams: ->
    teams = @props.teams
    # Left and right team and counter
    left = { team: teams[0], counter: 0 }
    right = { team: teams[1], counter: 0 }

    # Set the rank order
    ranking = [ "Fourth", "Third", "Second", "Lead" ]
    players = []
    # Set the maximum number of athletes available between both teams
    num = Math.max left.team.athletes.length, right.team.athletes.length
    # Loop through all the players
    for i in [0...num]
      # Default to no player position
      position_left = position_right = -1
      # Get the ranked position of both athletes if the athlete has a valid index
      position_left = ranking.indexOf(left.team.athletes[left.counter].position) if left.team.athletes.length > left.counter
      position_right = ranking.indexOf(teams[1].athletes[right.counter].position) if right.team.athletes.length > right.counter

      # If both players are in the same position, record them side-by-side, move to next players on both teams
      if position_left == position_right && (position_left >= 0)
        players.push [ left.team.athletes[left.counter], right.team.athletes[right.counter] ]
        left.counter++
        right.counter++

      # If team a's athlete is ranked higher than b's, then only show a's athlete
      # Since the lowest value has to be -1 (invalid), if position_a is larger,
      # then position_a should always be a valid position
      else if position_left > position_right
        players.push [ left.team.athletes[left.counter], null ]
        left.counter++

      # Same idea as above, except swap a and b
      else if position_right > position_left
        players.push [ null, right.team.athletes[right.counter] ]
        right.counter++

      # This should only happen if both positions are the same, and they are -1
      # which means we have hit the end of the player list.
      # Technically, the loop should end before this point, but I'd rather keep
      # this in as a precaution
      else
        break

    return players

  # Get cumulative shots, points and percentage for a whole team
  totalTeamScore: (team_idx) ->
    stats = { shots: 0, points: 0, percentage: 0 }
    for athlete in @props.teams[team_idx].athletes
      stats.shots += athlete.statistics.shot_count || 0
      stats.points += athlete.statistics.total_actual || 0
    stats.percentage = Math.round( stats.points / (stats.shots * 4) * 100 ) if stats.shots > 0
    stats


  render: ->
    teams = @props.teams
    players = @matchTeamPositionsFromBothTeams()

    div className: 'row',
      div className: 'col-xs-12',
        h1 {}, 'Shooting Percentages'
      [0..1].map (team_idx) =>
        total = @totalTeamScore(team_idx)
        div key: team_idx, className: 'col-xs-12 col-sm-6',
          div className: 'table-responsive',
            table className: 'table table-bordered table-condensed table-hover',
              thead {},
                tr {},
                  th colSpan: 5, teams[team_idx].name
                tr {},
                  th {}, 'Athlete'
                  th {}, 'Position'
                  th {}, 'Shots'
                  th {}, 'Pts'
                  th {}, '%'
              tbody {},
                players.map (set, index) ->
                  BoxScoreShootingPercentagesAthletes({key: index, athlete: set[team_idx]})
              tfoot {},
                tr {},
                  th colSpan: 2, "Team Total"
                  td {}, total.shots
                  td {}, total.points
                  td {}, "#{total.percentage}%"


BoxScoreContent = React.createClass
  componentDidMount: ->
  render: ->
    {draws, competitions, competition} = @props

    contentProps = @props
    contentProps.draw = null
    contentProps.game = null
    contentProps.teams = []

    for d in draws
      for g in d.games
        continue unless g.active?
        contentProps.draw = d
        contentProps.game = g
        break

    if contentProps.game?
      for position in contentProps.game.positions
        contentProps.teams.push position.team
    else
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Boxscore...'

    div className: 'row',
      div className: 'col-xs-12',
        BreadCrumbNavigation contentProps
        BoxScoreBoard contentProps
        if (contentProps.game.positions[0].team? && (contentProps.game.positions[0].team.athletes.length > 0)) ||
           (contentProps.game.positions[1].team? && (contentProps.game.positions[1].team.athletes.length > 0))
          BoxScoreTeamRosters contentProps
        if contentProps.game.positions[0].team? && contentProps.game.positions[1].team?
          BoxScoreAnalysis contentProps
        if contentProps.game.shot_by_shot == true
          BoxScoreShootingPercentages contentProps

BoxScore = React.createClass
  getInitialState: ->
    {game: null, draws: []}

  componentWillReceiveProps: (nextProps) ->
    results = nextProps.data
    console.log 'Boxscore.componentWillReceiveProps', nextProps
    @setState
      game: results
      draws: results.draws


  render: ->
    console.log 'Boxscore.render', @state.game?, @state
    unless @state.game?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Boxscore...'

    props = @props
    props.draws = @state.draws
    props.game = @state.game
    BoxScoreContent props

window.CurlcastBoxScore = BoxScore
