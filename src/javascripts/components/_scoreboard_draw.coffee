{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
Link = ReactRouter.Link

DrawListItem = React.createClass
  render: ->
    {draw} = @props
    active_class = ''
    active_class = 'active' if @props.active == true

    day = dayToStr @props.day
    draw = drawToStr @props.draw

    li className: active_class,
      Link to: 'scoreboard-draw', params: { competition_id: @props.routerState.params.competition_id, day: day, draw: draw }, activeClassName: 'router-active',
        "Draw #{draw.label}"
        br {}
        draw.starts_at

DrawList = React.createClass
  render: ->
    console.log 'DrawList', @props.draw
    {draws, changeDraw, day} = @props
    draw = @props.draw
    ul className: 'nav nav-tabs', role: 'tablist',
      draws.map (draw_item) =>
        DrawListItem key: draw_item.id, draw: draw_item, day: day, active: (draw_item.id == draw.id), routerState: @props.routerState

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
    tr {},
      td {},
        if position.team?
          a href: @props.teams_url + '#!' + position.team.url,
            span className: 'hidden-xs', position.team.name
            span className: 'visible-xs', position.team.short_name
        else
          'TBD'
      td className: 'lsfe', "#{lsfe}"
      [0..(ends-1)].map (endscore, key) ->
        td key: key, className: 'end-score', end_scores[endscore].score
      td className: 'total', total
      if boxscore == true
        td rowSpan: '2', className: 'hidden-xs',
          strong {}, game.state
          br {}
          a href: game.boxscore_url || '#boxscore-missing', 'Boxscore'

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
              DrawSheetPosition position: sheet.game_positions[0], ends: number_of_ends, game: sheet.game, routerState: @props.routerState, boxscore: boxscore_display
              DrawSheetPosition position: sheet.game_positions[1], ends: number_of_ends, game: sheet.game, routerState: @props.routerState

DrawSheetList = React.createClass
  render: ->
    {draw, competition, teams_url} = @props
    active_class = ''
    active_class = ' in active' if @props.active == true
    div className: "tab-pane fade#{active_class}", id: "draw#{draw.id}",
      div className: 'spacer'
      draw.draw_sheets.map (sheet, key) =>
        DrawSheetItem key: key, draw: draw, sheet: sheet, competition: competition, routerState: @props.routerState

DrawContentList = React.createClass
  render: ->
    {draws, competition, draw} = @props
    div className: 'tab-content',
      draws.map (draw_item) =>
        DrawSheetList key: draw_item.id, draw: draw_item, competition: competition, active: (draw.id == draw_item.id), routerState: @props.routerState

ScoreboardDraw = React.createClass
  getInitialState: ->
    draw: null

  drawToStr: (draw) ->
    "draw-#{draw.label}-#{draw.starts_at}"

  getDraw: ->
    currentDraw = @props.routerState.params.draw
    for draw in @props.day.draws
      if currentDraw?
        return draw if draw.active
      else
        return draw if @drawToStr(draw) == currentDraw
    return @props.day.draws[0]

  componentDidMount: ->
    @setState draw: @getDraw

  render: ->
    {competition, day} = @props

    console.log 'Scoreboard.render'

    div className: 'col-xs-12',
      DrawList({competition: competition, draws: day.draws, day: day, draw: draw, changeDraw: @changeDraw})
      DrawContentList({competition: competition, draws: day.draws, day: day, draw: draw, teams_url: @props.teams_url})
      p {}, 'LSFE: Last shot in the first end'

window.CurlcastScoreboardDraw = ScoreboardDraw

