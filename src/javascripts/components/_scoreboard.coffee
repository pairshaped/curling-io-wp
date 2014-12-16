{div, p, a, strong, br, nav, button, span, strong} = React.DOM
{table, thead, tbody, tr, td, th} = React.DOM
{h6, h4, h3} = React.DOM
{ul, li} = React.DOM
{Link, RouteHandler} = ReactRouter

Scoreboard = React.createClass
  getInitialState: ->
    scoreboard: null
    days: null
    dataUri: null
    loadingStatus: 'Loading...'

  processServerData: (props) ->
    results = props.data
    unless results?
      loadingStatus = 'Loading...'
      loadingStatus = "Loading #{props.competition.title}..." if props.competition?
      @setState scoreboard: null, days: null, loadingStatus: loadingStatus
      return

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

    @setState scoreboard: results, days: days, dataUri: props.routerState.path, loadingStatus: 'Loading...'

  componentWillReceiveProps: (nextProps) ->
    @processServerData nextProps

  render: ->
    unless @state.days?
      return div className: 'row',
        div className: 'col-xs-12', @state.loadingStatus

    { days, scoreboard, day, draw } = @state

    dayProps = @props
    dayProps.days = @state.days
    dayProps.scoreboard = @state.scoreboard

    if @props.routerState.params.day?
      RouteHandler dayProps
    else
      CurlcastScoreboardDay dayProps

window.CurlcastScoreboard = Scoreboard

