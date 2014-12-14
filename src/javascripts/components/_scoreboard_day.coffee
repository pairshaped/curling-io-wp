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
    li className: "text-center#{active_class}",
      Link to: 'scoreboard-day', params: { competition_id: routerState.params.competition_id, day: dayToStr( day ) }, activeClassName: '', onClick: @changeToToday,
        day.date
        br {}
        day.day

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

  dayToStr: (day) ->
    "#{day.day}-#{day.date}"

  getSelectedDay: ->
    selectedDay = @props.routerState.params.day
    for day in @props.days
      dayStr = @dayToStr day
      if dayStr == selectedDay
        return day
      if day.draws?
        for draw in day.draws
          if draw.active == true
            unless selectedDay?
              return day
    console.log 'getSelectedDay - could not find day', @props.routerState

  componentWillMount: ->
    @changeDay @getSelectedDay()

  render: ->
    {competition, days, scoreboard} = @props
    day = @state.day

    unless day?
      return div className: 'col-xs-12', 'Loading competition...'

    location_str = ''
    if scoreboard.location? && scoreboard.venue?
      location_str = [scoreboard.venue, scoreboard.location].filter( (i) -> (i? && i) ).join ', '

    drawProps = @props
    drawProps.day = day

    div className: 'row',
      div className: 'col-xs-12 col-sm-10',
        DayList days: days, day: day, routerState: @props.routerState, dayToStr: @dayToStr, changeDay: @changeDay
        h3 className: 'hidden-xs', day.starts_on
        h4 className: 'visible-xs', day.starts_on
      div className: 'col-sm-2 hidden-xs',
        h6 className: 'text-right',
          'Current Time'
          br {}
          scoreboard.time_now
      div className: 'col-xs-12',
        ReactRouter.RouteHandler drawProps
          #div className: 'col-xs-12',
          #  DrawList({competition: competition, draws: day.draws, day: day, draw: draw, changeDraw: @changeDraw})
          #  DrawContentList({competition: competition, draws: day.draws, day: day, draw: draw, teams_url: @props.teams_url})
          #  p {}, 'LSFE: Last shot in the first end'

window.CurlcastScoreboardDay = ScoreboardDay

