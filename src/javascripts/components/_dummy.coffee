
Dummy = React.createClass
  render: ->
    ReactRouter.RouteHandler @props

window.CurlcastDummy = Dummy

trackPageView ->
  if window.ga?
    window.ga 'send', 'pageview', ->
     'page': location.pathname + location.search + location.hash

jQuery(document).ready ->
  $(window).on 'hashchange', ->
    console.log 'hash', location.hash
    trackPageView()
