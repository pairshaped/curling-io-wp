{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
{Link, RouteHandler} = ReactRouter

# -- Utils
# -- Components

Scoreboard = React.createClass
  getInitialState: ->
    scoreboard: null
    days: []
    day: null
    draw: null
    pollInterval: 30000

  dayToStr: (day) ->
    "#{day.day}-#{day.date}"

  drawToStr: (draw) ->
    "draw-#{draw.label}-#{draw.starts_at}"

  determineDraw: (days) ->
    console.log 'Scoreboard.determineDraw', days

    # Get supplied routing parameters, if they exist
    selected_day = if @props.routerState.params.day? then @props.routerState.params.day else null
    selected_draw = if @props.routerState.params.draw? then @props.routerState.params.draw else null
    for day in days
      # Get the day as a string
      day_str = @dayToStr day
      is_selected_day = (selected_day? && selected_day == day_str)
      if day.draws? && (is_selected_day || !selected_day?)
        for draw in day.draws
          # Get the draw as a string
          draw_str = @drawToStr draw
          if (draw.active && !selected_draw?) || (selected_draw? && is_selected_day && (selected_draw == draw_str))
            @setState day: day, draw: draw
            return

    _days = days
    _days.reverse()
    for day in _days
      if day.draws?
        id = day.draws.length-1
        @setState day: day, draw: day.draws[id]
        return


  loadDataFromServer: ->
    return unless @isMounted()
    scoreboard_path = @props.routerState.path.split('/').slice(1, 4).join('/')
    scoreboard_url = @props.apiRoot + scoreboard_path + '.js'
    jQuery.ajax
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
        setTimeout @loadDataFromServer, @state.pollInterval

  componentDidMount: ->
    console.log 'Scoreboard.componentWillMount'
    @loadDataFromServer()

  componentWillUnmount: ->
    console.log 'Scoreboard.componentWillUnmount'

  #componentWillUpdate: ->
  #  @determineDraw @state.days if @state.days?

  render: ->
    unless @state.day? && @state.draw?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Scoreboard...'

    { days, scoreboard, day, draw } = @state

    dayProps = @props
    dayProps.days = @state.days
    dayProps.day = @state.day
    dayProps.draw = @state.draw
    dayProps.scoreboard = @state.scoreboard
    dayProps.dayToStr = @dayToStr
    dayProps.drawToStr = @drawToStr

    @determineDraw days

    if @props.routerState.params.day?
      RouteHandler dayProps
    else
      CurlcastScoreboardDay dayProps
    #div className: 'row',
    #  div className: 'col-xs-12 col-sm-10',
    #    div className: 'row',
    #      div className: 'col-xs-12',
    #        p {},
    #          location_str
    #          br {}
    #          scoreboard.starts_on
    #          ' to '
    #          scoreboard.ends_on
    #        CompetitionDayList days: days, day: day, routerState: @props.routerState
    #        h3 className: 'hidden-xs', day.starts_on
    #        h4 className: 'visible-xs', day.starts_on
    #  div className: 'col-sm-2 hidden-xs',
    #    h6 className: 'text-right',
    #      'Current Time'
    #      br {}
    #      scoreboard.time_now
    #  div className: 'col-xs-12',
    #    div className: 'row',
    #      div className: 'col-xs-12',
    #        DrawList draws: day.draws, day: day, draw: draw, routerState: @props.routerState
    #        DrawContentList draws: day.draws, draw: draw, competition: @props.competition, routerState: @props.routerState
    #        p {}, 'LSFE: Last shot in the first end'


window.CurlcastScoreboard = Scoreboard

