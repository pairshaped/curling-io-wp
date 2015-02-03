{div, form, input} = React.DOM
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
        input className: 'string optional form-control', ref: 'search', placeholder: CURLCAST_LANG.competitions.search_placeholder, autoComplete: 'off', type: 'text', onChange: @filterChanged

CompetitionItem = React.createClass
  render: ->
    competition = @props.competition
    competition_id = competition.to_param
    competitionOccurs = competition.occurs.split(' - ')
    # Occur format:
    # MMM DD, YYYY
    start = moment(competitionOccurs[0], 'MMM DD, YYYY').locale(CURLCAST_LANG.__locale).format('MMM DD, YYYY')
    end = moment(competitionOccurs[1], 'MMM DD, YYYY').locale(CURLCAST_LANG.__locale).format('MMM DD, YYYY')

    start = start.split('').map((char, idx) -> return if idx == 0 then char.toUpperCase() else char).join('')
    end = end.split('').map((char, idx) -> return if idx == 0 then char.toUpperCase() else char).join('')

    occurs = [start, end].join(' - ').replace(/\./g, '')

    tr {},
      td {},
        Link to: 'scoreboard', params: { competition_id: competition_id }, competition.title
      td {},
        competition.location
      td {},
        occurs

CompetitionList = React.createClass
  render: ->
    div className: 'table-responsive',
      table className: 'table table-bordered table-striped',
        thead {},
          tr {},
            th {}, CURLCAST_LANG.common.table.competition
            th {}, CURLCAST_LANG.common.table.location
            th {}, CURLCAST_LANG.common.table.occurs_at
        tbody {},
          @props.competitions.map (competition) ->
            CompetitionItem key: competition.id, competition: competition

CompetitionBox = React.createClass
  getInitialState: ->
    competitions: null
    search: null
    status: CURLCAST_LANG.common.ajax_loading

  changeFilter: (search) ->
    return if search == window.undefined
    @setState search: search
    @loadDataFromServer()

  loadDataFromServer: () ->
    jQuery.ajax
      url: "#{@props.apiRoot}competitions.js"
      type: 'GET'
      data: @state.search
      timeout: 10000
      dataType: 'jsonp'
      cache: true
      jsonpCallback: 'curlcastCompetitionsJSONP'
      success: (results) =>
        @setState competitions: results.competitions, status: CURLCAST_LANG.common.ajax_loading
      error: (xhr, status, error) =>
        @setState status: CURLCAST_LANG.common.ajax_error
        setTimeout @loadDataFromServer, 1000

  componentWillMount: ->
    @loadDataFromServer()

  render: ->
    unless @state.competitions?
      return div className: 'row',
        div className: 'col-xs-12',
          @state.status

    div className: 'row',
      div className: 'col-xs-12',
        CompetitionSearch changeFilter: @changeFilter
        CompetitionList competitions: @state.competitions

window.CurlcastCompetitions = CompetitionBox
