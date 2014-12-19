{RouteHandler} = ReactRouter

Scoreboard = React.createClass
  getInitialState: ->
    scoreboard: null
    days: null
    dataUri: null
    loadingStatus: 'Loading...'

  processServerData: (props) ->
    results = props.data
    unless results?
      loadingStatus = CURLCAST_LANG.common.ajax_loading
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

  componentWillMount: ->
    @processServerData @props

  render: ->
    { days, scoreboard, day, draw } = @state

    dayProps = @props
    dayProps.days = @state.days
    dayProps.scoreboard = @state.scoreboard

    if @props.routerState.params.day?
      RouteHandler dayProps
    else
      CurlcastScoreboardDay dayProps

window.CurlcastScoreboard = Scoreboard
