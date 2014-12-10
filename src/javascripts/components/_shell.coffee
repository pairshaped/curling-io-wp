div = React.DOM.div

Shell = React.createClass
  getInitialState: ->
    {navigation: null, competitions: [], status: 'Loading curling data...', retryDelay: 5000}

  loadDataFromServer: ->
    navigationUrlPieces = @props.componentProps.url.split("/")
    competitionChunk = navigationUrlPieces.indexOf "competitions"
    pieces = navigationUrlPieces[0..(competitionChunk+1)]
    pieces.push 'navigation.js'

    url = pieces.join "/"

    jQuery.ajax
      url: url
      dataType: 'jsonp'
      cache: true
      success: (results) =>
        @setState navigation: results.navigation, competitions: results.competitions
      error: =>
        seconds = @state.retryDelay / 1000
        newStatus = "Could not load data, retrying in #{seconds} seconds..."
        newStatus = "Still having connectivity problems, retrying in #{seconds} seconds..." if seconds > 5
        @setState status: newStatus, retryDelay: if (@state.retryDelay >= 30000) then @state.retryDelay else (@state.retryDelay + 5000)
        setTimeout @loadDataFromServer, (seconds * 1000)


  # Reformat links to proper prefix
  fixLinks: (parent = null) ->
    # Grab a valid parent DOM element
    # If none is provided, use this shell
    parent = parent || @getDOMNode()
    # Grab the component prefix path
    pathPrefix = @props.componentProps.pathPrefix
    # Grab each anchor link inside this component
    jQuery("a", @getDOMNode()).each (i, anchor) ->
      url = jQuery(anchor).attr "href"
      # Only update the url if it's base is /stats/organizations
      # This will be the case from any urls passed from curlcast
      return unless url.substr(0, 21) == '/stats/organizations/'
      pieces = url.substr(1).split "/"
      # Remove the first two pieces of the url
      # Should be 'stats', 'organizations'
      for i in [0..2]
        pieces.shift()
      # Use the new path prefix
      pieces.unshift pathPrefix
      # Fix the url
      jQuery(anchor).attr "href", pieces.join "/"


  componentWillMount: ->
    @loadDataFromServer()

  render: ->
    unless @state.navigation?
      return div className: 'row',
        div className: 'col-xs-12', @state.status

    pathPrefix = @props.componentProps.pathPrefix
    {competitions, navigation } = @state

    # Get the active competition
    competition = competitions[0]
    for c in competitions
      if c.active == true
        competition = c
        break

    # Augment the componentProps with fixLinks
    # and the active competition
    componentProps = @props.componentProps
    augments =
      fixLinks: @fixLinks
      competition: competition
      navigation: navigation
    for k, v of augments
      componentProps[k] = v

    div className: 'row',
      div className: 'col-sm-3 hidden-xs', id: 'organization-nav',
        OrganizationNavigation({competitions: competitions, more_competitions_url: navigation.more_competitions, pathPrefix: pathPrefix})
      div className: 'col-sm-9 col-xs-12', id: 'scoreboard',
        CompetitionNavigation({competition: competition, navigation: navigation || {}, pathPrefix: pathPrefix, highlight: @props.highlight})
        @props.component componentProps

window.CurlcastShell = Shell
