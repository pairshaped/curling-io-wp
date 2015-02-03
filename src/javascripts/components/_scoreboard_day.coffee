{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
Link = ReactRouter.Link

DayItem = React.createClass
  changeToToday: ->
    @props.changeDay @props.day

  render: ->
    { day, routerState, dayToStr } = @props
    dayString = dayToStr day
    active_class = ''
    active_class = ' active' if (routerState.params.day? && ( routerState.params.day == dayString )) || (!routerState.params.day? && @props.active)
    dayName = moment(day.day, 'ddd').locale(CURLCAST_LANG.__locale).format('ddd').replace(/\./g, '')
    dayName = dayName.split('').map((char, idx) -> return if idx ==0 then char.toUpperCase() else char).join('')
    li className: "text-center#{active_class}",
      Link to: 'scoreboard-day', params: { competition_id: routerState.params.competition_id, day: dayToStr( day ) }, activeClassName: '', onClick: @changeToToday,
        day.date
        br {}
        dayName

DayList = React.createClass
  render: ->
    { days, day } = @props
    ul className: 'pagination',
      days.map (day_item) =>
        DayItem key: day_item.id, day: day_item, active: (day_item.id == day.id), routerState: @props.routerState, dayToStr: @props.dayToStr, changeDay: @props.changeDay

ScoreboardDay = React.createClass
  getInitialState: ->
    day: null

  changeDay: (day) ->
    @setState day: day

  getSelectedDay: ->
    selectedDay = @props.routerState.params.day
    for day in @props.days
      dayStr = @props.dayToStr day
      if dayStr == selectedDay
        return day
      if day.draws?
        for draw in day.draws
          if draw.active == true
            unless selectedDay?
              return day
    @props.days[0]

  componentWillMount: ->
    @changeDay @getSelectedDay()

  render: ->
    {competition, days, scoreboard} = @props
    day = @state.day

    unless day?
      return div className: 'col-xs-12', CURLCAST_LANG.common.ajax_loading

    location_str = ''
    if scoreboard.location? && scoreboard.venue?
      location_str = [scoreboard.venue, scoreboard.location].filter( (i) -> (i? && i) ).join ', '

    drawProps = @props
    drawProps.day = day

    div className: 'row',
      div className: 'col-xs-12 col-sm-10',
        DayList days: days, day: day, routerState: @props.routerState, dayToStr: @props.dayToStr, changeDay: @changeDay
        h3 className: 'hidden-xs', day.starts_on
        h4 className: 'visible-xs', day.starts_on
      div className: 'col-sm-2 hidden-xs',
        h6 className: 'text-right',
          CURLCAST_LANG.common.current_time
          br {}
          scoreboard.time_now
      div className: 'col-xs-12',
        if @props.routerState.params.draw?
          ReactRouter.RouteHandler drawProps
        else
          CurlcastScoreboardDraw drawProps

window.CurlcastScoreboardDay = ScoreboardDay
