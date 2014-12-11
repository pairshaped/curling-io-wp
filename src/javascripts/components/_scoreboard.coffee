{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
Link = ReactRouter.Link

CompetitionDay = React.createClass
  changeDraw: ->
    @props.changeDraw @props.day
    false

  render: ->
    { date, day } = @props.day
    active_class = ''
    active_class = ' active' if @props.active == true
    li className: "text-center#{active_class}",
      a href: "#day-#{date}-#{day}", onClick: @changeDraw,
        date
        br {}
        day

CompetitionDayList = React.createClass
  render: ->
    { days, filter, day, changeDraw } = @props
    ul className: 'pagination',
      days.map (day_item) ->
        CompetitionDay({key: day_item.id, day: day_item, active: (day.id == day_item.id), changeDraw: changeDraw})

DrawListItem = React.createClass
  changeDraw: ->
    @props.changeDraw @props.day, @props.draw
    false

  render: ->
    {draw} = @props
    active_class = ''
    active_class = 'active' if @props.active == true
    li className: active_class,
      a href: "#draw#{draw.label}", role: 'tab', onClick: @changeDraw,
        "Draw #{draw.label}"
        br {}
        draw.starts_at

DrawList = React.createClass
  render: ->
    {draws, changeDraw, day} = @props
    draw = @props.draw
    ul className: 'nav nav-tabs', role: 'tablist',
      draws.map (draw_item) ->
        DrawListItem({key: draw_item.id, draw: draw_item, day: day, active: (draw_item.id == draw.id), changeDraw: changeDraw})

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
    {competition, sheet, teams_url} = @props
    num_ends = Math.max competition.number_of_ends || (sheet.game_positions[0].end_scores || []).length, (sheet.game_positions[1].end_scores || []).length
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
                [1..num_ends].map (endscore, key) ->
                  th className: 'end-score', key: key, "#{endscore}"
                th className: 'total',
                  span className: 'hidden-xs', 'TOT'
                  span className: 'visible-xs', 'T'
                if boxscore_display
                  th className: 'hidden-xs', width: '10%', ''
            tbody {},
              DrawSheetPosition position: sheet.game_positions[0], ends: num_ends, game: sheet.game, boxscore: boxscore_display, teams_url: teams_url
              DrawSheetPosition position: sheet.game_positions[1], ends: num_ends, game: sheet.game, teams_url: teams_url

DrawSheetList = React.createClass
  render: ->
    {draw, competition, teams_url} = @props
    active_class = ''
    active_class = ' in active' if @props.active == true
    div className: "tab-pane fade#{active_class}", id: "draw#{draw.id}",
      div className: 'spacer'
      draw.draw_sheets.map (sheet, key) ->
        DrawSheetItem key: key, draw: draw, sheet: sheet, competition: competition, teams_url: teams_url

DrawContentList = React.createClass
  render: ->
    {draws, competition, draw, teams_url} = @props
    div className: 'tab-content',
      draws.map (draw_item) ->
        DrawSheetList key: draw_item.id, draw: draw_item, competition: competition, active: (draw.id == draw_item.id), teams_url: teams_url

Competition = React.createClass
  getInitialState: ->
    { day: null, draw: null }

  changeDraw: ( day, draw = null ) ->
    @setState { day: day, draw: draw || day.draws[0] }
    @props.drawChanged()

  discoverActiveDraw: ->
    return if @state.draw? && @state.day?
    for d in @props.days
      for dr in d.draws
        if dr.active?
          @changeDraw( d, dr )
          return
    @changeDraw( @props.days[0], @props.days[0].draws[0] )

  refreshActiveDraw: ->
    return unless @state.draw? && @state.day?
    for d in @props.days
      if d.id == @state.day.id
        for dr in d.draws
          if dr.id == @state.draw.id
            #@changeDraw d, dr
            # TODO: This is very much a hack, and I should probably fix this soon
            @state.day = d
            @state.draw = dr
            return

  componentWillMount: ->
    @discoverActiveDraw()

  render: ->
    {competition, days, scoreboard} = @props
    @refreshActiveDraw()
    {day, draw} = @state

    if !day? || !draw?
      return div className: 'col-xs-12', 'Loading Competition...'

    location_str = ''
    if scoreboard.location? && scoreboard.venue?
      location_str = [scoreboard.venue, scoreboard.location].join ', '

    div className: 'row',
      div className: 'col-xs-12 col-sm-10',
        div className: 'row',
          div className: 'col-xs-12',
            p {},
              location_str
              br {}
              scoreboard.starts_on
              ' to '
              scoreboard.ends_on
            CompetitionDayList({days: days, day: day, changeDraw: @changeDraw})
            h3 className: 'hidden-xs', day.starts_on
            h4 className: 'visible-xs', day.starts_on
      div className: 'col-sm-2 hidden-xs',
        h6 className: 'text-right',
          'Current Time'
          br {}
          scoreboard.time_now
      div className: 'col-xs-12',
        div className: 'row',
          div className: 'col-xs-12',
            DrawList({competition: competition, draws: day.draws, day: day, draw: draw, changeDraw: @changeDraw})
            DrawContentList({competition: competition, draws: day.draws, day: day, draw: draw, teams_url: @props.teams_url})
            p {}, 'LSFE: Last shot in the first end'

Scoreboard = React.createClass
  getInitialState: ->
    {scoreboard: null, days: [], mounted: false}

  drawChanged: ->
    #@props.fixLinks()

  loadDataFromServer: ->
    return unless @state.mounted == true
    scoreboard_url = @props.apiRoot + @props.routerState.path.substr(1) + '.js'
    jQuery.ajax(
      url: scoreboard_url
      dataType: 'jsonp'
      cache: true
      success: (results) =>
        days = []
        last_day_id = -1
        id = 0
        for draw, k in results.draws
          d = days[days.length-1] || null
          last_day = d.day if d

          unless last_day == draw.starts_at_day
            obj = { day: draw.starts_at_day, draws: [], date: draw.starts_at_date, id: id, starts_on: draw.starts_on, starts_at_timestamp: draw.starts_at_timestamp }
            days.push obj
            last_day_id = days.length - 1
            id++
          days[last_day_id].draws.push draw

        @setState {scoreboard: results, days: days }
        setTimeout @loadDataFromServer, @props.pollInterval
    )

  componentWillMount: ->
    @setState mounted: true
    @loadDataFromServer()

  componentWillUnmount: ->
    @setState mounted: false

  componentDidUpdate: ->
    #@props.fixLinks()

  componentDidMount: ->
    #@props.fixLinks()

  render: ->
    unless @state.scoreboard?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Scoreboard...'

    { days, scoreboard } = @state
    Competition({competition: @props.competition, days: days, scoreboard: scoreboard, drawChanged: @drawChanged })

window.CurlcastScoreboard = Scoreboard

