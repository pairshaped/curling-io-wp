{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
Link = ReactRouter.Link

DayItem = React.createClass
  render: ->
    { day, routerState, dayToStr } = @props
    dayString = dayToStr day
    active_class = ''
    active_class = ' active' if (routerState.params.day? && ( routerState.params.day == dayString )) || (!routerState.params.day? && @props.active)
    li className: "text-center#{active_class}",
      Link to: 'scoreboard-day', params: { competition_id: routerState.params.competition_id, day: dayToStr( day ) },
        day.date
        br {}
        day.day

DayList = React.createClass
  render: ->
    { days, day } = @props
    ul className: 'pagination',
      days.map (day_item) =>
        DayItem key: day_item.id, day: day_item, active: (day_item.id == day.id), routerState: @props.routerState, dayToStr: @props.dayToStr

ScoreboardDay = React.createClass
  render: ->
    {competition, days, day, draw, scoreboard} = @props

    console.log 'ScoreboardDay', @

    if !day?
      return div className: 'col-xs-12', 'Loading Competition Day...'

    location_str = ''
    if scoreboard.location? && scoreboard.venue?
      location_str = [scoreboard.venue, scoreboard.location].filter( (i) -> (i? && i) ).join ', '

    drawProps = @props

    div className: 'row',
      div className: 'col-xs-12 col-sm-10',
        DayList days: days, day: day, routerState: @props.routerState, dayToStr: @props.dayToStr
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

