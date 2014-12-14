{ div, span } = React.DOM

# Some server pinging data
routes = []
routes.push route: [ 'root', 'shell', 'scoreboard' ], name: 'scoreboard', pollInterval: 5000

Shell = React.createClass
  getInitialState: ->
    other_competitions: []
    competition: null
    rawServerData: null
    queryInterval: null
    status: 'Loading curling data...'
    retryDelay: 5000

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


  loadNavigationFromServer: ->
    return unless @isMounted()
    competition_parts = @props.routerState.path.split('/').slice(1,3)
    competition_parts.push 'competition'

    competition_url = @props.apiRoot + competition_parts.join('/') + '.js'

    jQuery.ajax
      url: competition_url
      dataType: 'jsonp'
      cache: true
      success: (results) =>
        @setState
          other_competitions: results.other_competitions
          competition: results.current_competition
          retryDelay: 5000
      error: =>
        console.log "Could not hit ", @props.url
        seconds = @state.retryDelay / 1000
        newStatus = "Could not load data, retrying in #{seconds} seconds..."
        newStatus = "Still having connectivity problems, retrying in #{seconds} seconds..." if seconds > 5
        @setState status: newStatus, retryDelay: if (@state.retryDelay >= 30000) then @state.retryDelay else (@state.retryDelay + 5000)
        setTimeout @loadDataFromServer, (seconds * 1000)

  getPageData: (url) ->
    jQuery.ajax
      url: url
      dataType: 'jsonp'
      cache: false
      success: (results) =>
        console.log 'Shell.setPageDataUrl.ajax.success', results
        @setState rawServerData: results
      error: ->
        console.log 'Could not load server page data'


  setPageDataUrl: (url, interval) ->
    clearInterval @state._pageInterval if @state._pageInterval?

    unless url?
      @setState _pageInterval: null
      return

    @getPageData url
    @setState _pageInterval: window.setInterval(@getPageData, interval, url)

  componentDidMount: ->
    @competitionChanged()

  competitionChanged: ->
    @loadNavigationFromServer()

    r = @getRoute @props.routerState.routes
    if r.name == 'scoreboard'
      scoreboard_path = @props.routerState.path.split('/').slice(1, 4).join('/')
      new_url = @props.apiRoot + scoreboard_path + '.js'
      @setPageDataUrl new_url, r.pollInterval

    else
      @setPageDataUrl null

  render: ->
    unless @state.competition?
      return div className: 'row',
        div className: 'col-xs-12', @state.status

    {other_competitions, competition, rawServerData} = @state

    routedProps = @props
    routedProps.competition = competition
    routedProps.data = rawServerData

    div className: 'row',
      div className: 'col-sm-3 hidden-xs',
        OrganizationNavigation key: 'org-nav', competitions: other_competitions, current_id: competition.to_param, competitionChanged: @competitionChanged
      div className: 'col-sm-9 col-xs-12',
        CompetitionNavigation key: 'comp-nav', competition: competition
        ReactRouter.RouteHandler routedProps

window.CurlcastShell = Shell
