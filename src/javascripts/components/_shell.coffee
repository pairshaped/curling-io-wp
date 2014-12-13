{ div, span } = React.DOM

Shell = React.createClass
  getInitialState: ->
    other_competitions: []
    competition: null
    status: 'Loading curling data...'
    retryDelay: 5000

  redrawShell: ->
    console.log 'Attempting to change competition'
    @forceUpdate()

  statics:
    willTransitionTo: ( transition, params, to ) ->
      console.log 'Shell.willTranslateTo', [ transition, params, to ], @

  loadDataFromServer: ->
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

  componentWillMount: ->
    @loadDataFromServer()

  componentWillUnmount: ->
    #console.log 'Shell.componentWillUnmount', @

  render: ->
    unless @state.competition?
      return div className: 'row',
        div className: 'col-xs-12', @state.status

    {other_competitions, competition} = @state

    routedProps = @props
    routedProps.competition = competition

    div className: 'row',
      div className: 'col-sm-3 hidden-xs',
        OrganizationNavigation competitions: other_competitions, current_id: competition.to_param, redrawShell: @redrawShell
      div className: 'col-sm-9 col-xs-12',
        CompetitionNavigation competition: competition, redrawShell: @redrawShell
        ReactRouter.RouteHandler @props

window.CurlcastShell = Shell
