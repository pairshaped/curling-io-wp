{ div } = React.DOM

Dummy = React.createClass
  render: ->
    console.log 'Dummy render', @
    div {}, 'Dummy Element'

window.CurlcastDummy = Dummy
