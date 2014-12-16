{ div, span } = React.DOM

# Some server pinging data
routes = []
routes.push route: [ 'root', 'shell', 'scoreboard' ], urlParts: [1,4], name: 'scoreboard', pollInterval: 30000
routes.push route: [ 'root', 'shell', 'boxscore' ], urlParts: [1,5], name: 'boxscore', pollInterval: 15000
routes.push route: [ 'root', 'shell', 'standings' ], urlParts: [1,4], name: 'standings', pollInterval: 30000
routes.push route: [ 'root', 'shell', 'teams' ], urlParts: [1,5], name: 'teams', pollInterval: 60000

_pageTimeout = null

Shell = React.createClass
  getInitialState: ->
    other_competitions: []
    competition: null
    rawServerData: null
    rawServerDataSucceeded: true
    queryInterval: null
    status: 'Loading curling data...'
    componentStatus: 'Loading...'
    retryDelay: 5000
    lastPageDataObject: null
    currentRoute: null

  getRoute: (currentRoute) ->
    for route in routes
      success = true
      for path, i in route.route
        unless path == currentRoute[i].name
          success = false
          break
      return route if success == true

    # Default to 10 seconds
    { name: 'unknown', pollInterval: 10000 }


  loadNavigationFromServer: (competition) ->
    return unless @isMounted()
    competition_parts = @props.routerState.path.split('/').slice(1,3)
    competition_parts[1] = competition.to_param if competition?
    competition_parts.push 'competition'

    competition_url = @props.apiRoot + competition_parts.join('/') + '.js'

    #console.log 'Shell.loadNavigationFromServer', competition_parts, competition_url

    jQuery.ajax
      url: competition_url
      dataType: 'jsonp'
      #cache: true
      jsonpCallback: 'curlcastJSONP2'
      success: (results) =>
        @setState
          other_competitions: results.other_competitions
          competition: results.current_competition
          retryDelay: 5000
      error: =>
        seconds = @state.retryDelay / 1000
        newStatus = "Could not load data, retrying in #{seconds} seconds..."
        newStatus = "Still having connectivity problems, retrying in #{seconds} seconds..." if seconds > 5
        @setState status: newStatus, retryDelay: if (@state.retryDelay >= 30000) then @state.retryDelay else (@state.retryDelay + 5000)
        setTimeout @loadNavigationFromServer, (seconds * 1000)

  getPageData: (url, interval) ->
    window.clearTimeout _pageTimeout if _pageTimeout
    _pageTimeout = null
    return unless url?
    callbackName = 'curlcastJSONP'
    callbackName += '_' +@state.currentRoute if @state.currentRoute?
    jQuery.ajax
      url: url
      dataType: 'jsonp'
      #cache: false
      jsonpCallback: callbackName #"curlcastJSONP#{routeSuffix}"
      success: (results) =>
        #console.debug 'Shell.getPageData.ajax.success'
        currentResultStr = JSON.stringify results
        if @state.lastPageDataObject != currentResultStr
          @setState rawServerData: results, lastPageDataObject: currentResultStr, rawServerDataSucceeded: true, componentStatus: 'Loading...'
          if interval?
            _pageTimeout = window.setTimeout(@getPageData, interval, url, interval)
      error: =>
        #console.debug 'Shell.getPageData.ajax.error'
        timing = if interval? then " in #{Math.round(interval/1000)} seconds" else ''
        @setState componentStatus: "Error getting page data, retrying#{timing}...", rawServerDataSucceeded: false
        if interval?
          _pageTimeout = window.setTimeout(@getPageData, interval, url, interval)

  setPageDataUrl: (url, interval) ->
    #console.debug '*** Shell.setPageDataUrl', arguments

    unless url?
      #console.debug '*** Shell.setPageDataUrl', 'no url provided, clearing timeout'
      window.clearTimeout _pageTimeout if _pageTimeout
      _pageTimeout = null
      return

    unless url == @state.lastPageDataUrl
      #console.debug '*** Shell.setPageDataUrl', 'url is new, clearing timeout and fetching new data'
      @setState rawServerData: null
      window.clearTimeout _pageTimeout if _pageTimeout
      _pageTimeout = null
      @getPageData url, interval
      @setState lastPageDataUrl: url

  componentDidMount: ->
    #console.log 'Shell.componentDidMount'
    @competitionChanged(null)

  componentWillUnmount: ->
    #console.log 'Shell.componentWillUnmount'
    @setPageDataUrl null

  competitionChanged: (competition) ->
    @loadNavigationFromServer(competition)
    @shellComponentUpdated(@props)

  shellComponentUpdated: (nextProps) ->
    #console.log 'Shell.shellComponentUpdated'
    r = @getRoute nextProps.routerState.routes
    new_url = null
    interval = null

    # TODO: Loop this!
    if r.name == 'scoreboard'
      scoreboard_path = nextProps.routerState.path.split('/').slice(1, 4).join('/')
      new_url = nextProps.apiRoot + scoreboard_path + '.js'
      interval = r.pollInterval

    else if r.name == 'boxscore'
      boxscore_path = nextProps.routerState.path.split('/').slice(1,5).join('/')
      new_url = nextProps.apiRoot + boxscore_path + '.js'
      interval = r.pollInterval

    else if r.name == 'standings'
      standings_path = nextProps.routerState.path.split('/').slice(1,4).join('/')
      new_url = nextProps.apiRoot + standings_path + '.js'
      interval = r.pollInterval

    else if r.name == 'teams'
      teams_path = nextProps.routerState.path.split('/').slice(1,5).join('/')
      new_url = nextProps.apiRoot + teams_path + '.js'
      interval = r.pollInterval

    currentRoute = if r? then r.name else null
    @setState currentRoute: currentRoute
    @state.currentRoute = currentRoute
    @setPageDataUrl new_url, interval

  componentWillReceiveProps: (nextProps) ->
    @shellComponentUpdated nextProps

  dayFromDraw: (draw) ->
    { day: draw.starts_at_day, date: draw.starts_at_date, starts_on: draw.starts_on, starts_at_timestamp: draw.starts_at_timestamp }

  dayToStr: (day) ->
    #console.log 'Shell.dayToStr', day
    "#{day.day}-#{day.date}"

  drawToStr: (draw) ->
    time = draw.starts_at.trim()
    "#{draw.label}-at-#{time}".replace(',', '').replace(' ', '_')

  roundToStr: (round) ->
    "#{round.type}-#{round.id}"

  teamToStr: (team) ->
    return team.to_param if team.to_param?
    name = team.name.replace(',', '').replace(' ', '-').toLowerCase()
    "#{team.id}-#{name}"

  render: ->
    unless @state.competition?
      return div className: 'row',
        div className: 'col-xs-12', @state.status

    {other_competitions, competition, rawServerData} = @state

    routedProps = @props
    routedProps.competition = competition
    routedProps.data = rawServerData
    routedProps.dayFromDraw = @dayFromDraw
    routedProps.dayToStr = @dayToStr
    routedProps.drawToStr = @drawToStr
    routedProps.roundToStr = @roundToStr
    routedProps.teamToStr = @teamToStr
    #routedProps.shellComponentChanged = @shellComponentChanged

    div className: 'row',
      div className: 'col-sm-3 hidden-xs',
        OrganizationNavigation key: 'org-nav', competitions: other_competitions, competitionChanged: @competitionChanged, routerState: @props.routerState #, shellComponentChanged: @shellComponentChanged
      div className: 'col-sm-9 col-xs-12',
        CompetitionNavigation key: 'comp-nav', competition: competition, currentRoute: @state.currentRoute #, shellComponentChanged: @shellComponentChanged
        if @state.rawServerDataSucceeded == false
          @state.componentStatus
        ReactRouter.RouteHandler routedProps

window.CurlcastShell = Shell
