{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
{Link, RouteHandler} = ReactRouter

Scoreboard = React.createClass
  getInitialState: ->
    scoreboard: null
    days: null
    day: null
    draw: null
    pollInterval: 30000

  processServerData: (results) ->
    console.log 'Scoreboard.results', results
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

  componentWillReceiveProps: (nextProps) ->
    @processServerData(nextProps.data)

  render: ->
    unless @state.days?
      return div className: 'row',
        div className: 'col-xs-12', 'Loading Scoreboard...'

    { days, scoreboard, day, draw } = @state

    dayProps = @props
    dayProps.days = @state.days
    dayProps.scoreboard = @state.scoreboard

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

