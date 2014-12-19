{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
Link = ReactRouter.Link

DrawListItem = React.createClass
  render: ->
    {day, draw} = @props
    active_class = ''
    active_class = 'active' if @props.active == true

    dayParam = @props.dayToStr day
    drawParam = @props.drawToStr draw

    li className: active_class,
      Link to: 'scoreboard-draw', params: { competition_id: @props.routerState.params.competition_id, day: dayParam, draw: drawParam }, activeClassName: 'router-active',
      #a {},
        "#{CURLCAST_LANG.common.draw} #{draw.label}"
        br {}
        draw.starts_at

DrawList = React.createClass
  render: ->
    {draws, changeDraw, day} = @props
    draw = @props.draw
    ul className: 'nav nav-tabs', role: 'tablist',
      day.draws.map (draw_item) =>
        drawProps = @props
        drawProps.key = draw_item.id
        drawProps.draw = draw_item
        drawProps.active = (draw_item.id == draw.id)
        DrawListItem drawProps

DrawSheetPosition = React.createClass
  render: ->
    { game, position, boxscore, ends } = @props
    lsfe = ''
    lsfe = '*' if position.first_hammer == true
    end_scores = position.end_scores || []
    is_final = game.state.toLowerCase() == "final"
    for es in end_scores
      unless es.score?
        es.score = 'X' if is_final
      else
        es.score = es.score.toString()

    # Add some padding for endscores
    if end_scores.length < ends
      padding = ends - end_scores.length
      for es in [0..padding]
        end_scores.push { score: '' }

    total = ''
    if position.end_scores?
      total = 0
      for score in end_scores
        total += parseInt(score.score) || 0

    if position.team?
      team_id = @props.teamToStr position.team

    tr {},
      td {},
        if position.team?
          Link to: 'teams-show', params: { competition_id: @props.routerState.params.competition_id, team_id: team_id },
          #a href: @props.teams_url + '#!' + position.team.url,
            span className: 'hidden-xs', position.team.name
            span className: 'visible-xs', position.team.short_name
        else
          CURLCAST_LANG.common.tbd
      td className: 'lsfe', "#{lsfe}"
      [0..(ends-1)].map (endscore, key) ->
        td key: key, className: 'end-score', end_scores[endscore].score
      td className: 'total', total
      if boxscore == true
        td rowSpan: '2', className: 'hidden-xs',
          strong {}, game.state
          br {}
          Link to: 'boxscore', params: { competition_id: @props.routerState.params.competition_id, game_id: game.id }, onClick: @props.shellComponentChanged,
            'Boxscore'
          #a href: game.boxscore_url || '#boxscore-missing', 'Boxscore'

DrawSheetItem = React.createClass
  render: ->
    {competition, sheet, teams_url, competition} = @props
    number_of_ends = Math.max competition.number_of_ends || (sheet.game_positions[0].end_scores || []).length, (sheet.game_positions[1].end_scores || []).length
    game_state = sheet.game.state.toLowerCase()
    boxscore_display = (game_state == "final") || (game_state.substr(0,5) == "after")
    sheet_name = sheet.name
    sheet_name += " : #{sheet.game.name}" if sheet.game.is_bracket == true
    div className: 'row',
      div className: 'col-xs-12',
        div className: 'table-responsive',
          table className: 'table table-bordered table-condensed',
            thead {},
              tr {},
                th {},
                  strong {}, sheet_name
                th className: 'lsfe',
                  span className: 'hidden-xs', 'LSFE'
                [1..number_of_ends].map (endscore, key) ->
                  th className: 'end-score', key: key, "#{endscore}"
                th className: 'total',
                  span className: 'hidden-xs', 'TOT'
                  span className: 'visible-xs', 'T'
                if boxscore_display
                  th className: 'hidden-xs', width: '10%', ''
            tbody {},
              DrawSheetPosition position: sheet.game_positions[0], ends: number_of_ends, game: sheet.game, teamToStr: @props.teamToStr, routerState: @props.routerState, shellComponentChanged: @props.shellComponentChanged, boxscore: boxscore_display
              DrawSheetPosition position: sheet.game_positions[1], ends: number_of_ends, game: sheet.game, teamToStr: @props.teamToStr, routerState: @props.routerState, shellComponentChanged: @props.shellComponentChanged

DrawSheetList = React.createClass
  render: ->
    {draw, competition, teams_url} = @props
    active_class = ''
    active_class = ' in active' if @props.active == true
    div className: "tab-pane fade#{active_class}", id: "draw#{draw.id}",
      div className: 'spacer'
      draw.draw_sheets.map (sheet, key) =>
        props = @props
        props.key = key
        props.sheet = sheet
        DrawSheetItem props

DrawContentList = React.createClass
  render: ->
    {day, competition, draw} = @props
    div className: 'tab-content',
      day.draws.map (draw_item) =>
        props = @props
        props.key = draw_item.id
        props.active = (draw.id == draw_item.id)
        props.draw = draw_item
        DrawSheetList props

ScoreboardDraw = React.createClass
  getInitialState: ->
    draw: null

  getDraw: ->
    currentDraw = @props.routerState.params.draw
    for draw in @props.day.draws
      str = @props.drawToStr(draw)
      if !currentDraw?
        if draw.active
          return draw
      else
        if str == currentDraw
          return draw
    return @props.day.draws[0]

  componentDidMount: ->
    @setState draw: @getDraw()

  render: ->
    draw = @getDraw()

    drawProps = @props
    drawProps.draw = draw

    div className: 'row',
      div className: 'col-xs-12',
        DrawList drawProps
        DrawContentList drawProps
        p {}, CURLCAST_LANG.common.legend_lsfe

window.CurlcastScoreboardDraw = ScoreboardDraw

