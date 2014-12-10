{nav, div, button, span, a, form, input} = React.DOM
{table, thead, tr, th, tbody, td}= React.DOM

Link = ReactRouter.Link

CompetitionSearch = React.createClass
  cancelSubmission: (e) ->
    e.preventDefault()
    false

  setFilter: ->
    newFilter = { search: { q: @refs.search.getDOMNode().value }, 'utf-8': @refs.utf8.getDOMNode().value }
    @props.changeFilter newFilter

  filterChanged: ->
    clearTimeout @props.timeout if @props.timeout?
    @props.timeout = setTimeout @setFilter, 1000

  componentWillMount: ->
    @props.timeout = null

  render: ->
    form className: 'simple_form search', onSubmit: @cancelSubmission,
      div style: { display: 'none' },
        input name:'utf8', type: 'hidden', value: '✓', ref: 'utf8'
      div className: 'form-group string optional search_q',
        input className: 'string optional form-control', ref: 'search', placeholder: 'Search Competitions', autoComplete: 'off', type: 'text', onChange: @filterChanged

CompetitionItem = React.createClass
  render: ->
    competition = @props.competition
    competition_id = competition.url.split('/').slice(-2,1)[0]
    console.log 'id=', competition_id
    tr {},
      td {},
        Link to: 'scoreboard', params: { competition_id: competition.id }, competition.title
      td {},
        competition.location
      td {},
        competition.occurs

CompetitionList = React.createClass
  render: ->
    console.log 'CompetitionList'
    div className: 'table-responsive',
      table className: 'table table-bordered table-striped',
        thead {},
          tr {},
            th {}, 'Competition'
            th {}, 'Location'
            th {}, 'Occurs'
        tbody {},
          @props.competitions.map (competition) ->
            CompetitionItem({key: competition.id, competition: competition})

CompetitionBox = React.createClass
  getInitialState: ->
    { competitions: null, search: null }

  changeFilter: (search) ->
    return if search == window.undefined
    @setState search: search
    @loadDataFromServer()

  loadDataFromServer: () ->
    jQuery.ajax
      url: @props.apiRoot + 'competitions.js'
      type: 'GET'
      data: @state.search
      dataType: 'jsonp'
      cache: true
      jsonpCallback: 'curlcastJSONP'
      success: (results) =>
        # If we do a loadData pre-emptively, cancel the old timeout
        @setState competitions: results.competitions

  componentWillMount: ->
    @loadDataFromServer()

  fixLinks: ->
    pathPrefix = @props.pathPrefix
    jQuery(@getDOMNode()).find("a").each ->
      url = jQuery(this).attr "href"
      return unless url? && url.substr(0, 21) == '/stats/organizations/'
      pieces = url.substr(1).split "/"
      for i in [0..2]
        pieces.shift()
      pieces.unshift pathPrefix
      jQuery(this).attr "href", pieces.join "/"

  componentDidUpdate: ->
    @fixLinks()

  render: ->
    console.log 'Competitions', @
    unless @state.competitions?
      return div className: 'col-xs-12', 'Loading competition list...'
    div className: 'col-xs-12',
      CompetitionSearch({changeFilter: @changeFilter})
      CompetitionList({competitions: @state.competitions})

window.CurlcastCompetitions = CompetitionBox


