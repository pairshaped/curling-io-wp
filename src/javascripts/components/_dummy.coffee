window.curlcastTrackPageView = ->
  if window.ga?
    window.ga 'send', 'pageview',
      'page': location.pathname + location.search + location.hash

jQuery(document).ready ->
  jQuery(window).on 'hashchange', ->
    curlcastTrackPageView()

Dummy = React.createClass
  render: ->
    ReactRouter.RouteHandler @props

  componentDidMount: ->
    window.curlcastTrackPageView()

window.CurlcastDummy = Dummy
