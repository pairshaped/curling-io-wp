{div, p, a, strong, br, h4, table, tbody, tr, td} = React.DOM
Link = ReactRouter.Link

# FIXME: ReactRouter.HistoryLocation doesn't seem to actually
#        work, and there is a lack of documentation, so we
#        should assume that we are always using hash urls
scoreboardUrl = (prefix, url) ->
  #return "#{prefix}#{url}" if window.history.pushState?
  "#{prefix}##{url}"

Scoreboard = React.createClass
  getInitialState: ->
    placeholderMessage: "Loading competitions..."
    competitions: []

  loadDataFromServer: ->
    jQuery.ajax(
      url: @props.url
      dataType: 'jsonp'
      cache: true
      jsonpCallback: 'curlcastJSONP'
      success: (results) =>
        @setState
          placeholderMessage: CURLCAST_LANG.scoreboard_widget.no_competitions
          competitions: results
      error: ->
        @setState placeholderMessage: CURLCAST_LANG.common.ajax_error
    )

  componentWillMount: ->
    @loadDataFromServer()
    setInterval(@loadDataFromServer, @props.pollInterval)

  baseUrl: ->
    @props.url.substr(0, @props.url.indexOf('/', 8))

  render: ->
    if @state.competitions.length == 0
      div null,
        p null,
          strong null,
            @state.placeholderMessage
    else
      div id: 'curlcast_accordion', className: 'panel-group',
        @state.competitions.map (competition) =>
          Competition({key: competition.id, competition: competition, pathPrefix: @props.pathPrefix, baseUrl: @baseUrl()})

Competition = React.createClass
  render: ->
    {id, title, short_name, current_draw, path, open} = @props.competition
    div className: "panel panel-default",
      div className: "panel-heading",
        h4 className: "panel-title", title: title,
          a "data-parent": "#curlcast_accordion", "data-toggle": "collapse", href: "#comp-#{id}", title: title,
            {short_name}
      div className: "panel-collapse collapse#{if open then ' in' else ''}", id: "comp-#{id}",
        div className: "panel-body",
          div className: "row",
            if current_draw?
              Draw({draw: current_draw, pathPrefix: @props.pathPrefix, baseUrl: @props.baseUrl})
            div className: "col-xs-12",
              if current_draw?
                p null,
                  a href: scoreboardUrl(@props.pathPrefix, path), dangerouslySetInnerHTML: {__html: "#{CURLCAST_LANG.common.full_scoreboard} &raquo;"}
              else
                p null,
                  CURLCAST_LANG.scoreboard_widget.no_draws_scheduled

Draw = React.createClass
  render: ->
    {id, label, starts, games} = @props.draw
    div className: "col-xs-12",
      p null,
        strong null,
          "#{CURLCAST_LANG.common.draw} #{label}: "
        starts
      if games.length == 0
        p null,
          CURLCAST_LANG.scoreboard_widget.no_games_scheduled
      else
        table className: "table table-bordered table-condensed",
          games.map (game) =>
            Game({key: game.id, game: game, pathPrefix: @props.pathPrefix, baseUrl: @props.baseUrl})

Game = React.createClass
  render: ->
    {id, state, path, game_positions} = @props.game
    tbody null,
      tr null,
        GamePositionName({key: game_positions[0].id, game_position: game_positions[0], pathPrefix: @props.pathPrefix, baseUrl: @props.baseUrl})
        GamePositionScore({key: "score-#{game_positions[0].id}", game_position: game_positions[0]})
        td className: "game-state", rowSpan: "2",
          strong null,
            state
          br null
          a href: scoreboardUrl(@props.pathPrefix, path),
            CURLCAST_LANG.scoreboard_widget.boxscore_link
      tr null,
        GamePositionName({key: game_positions[1].id, game_position: game_positions[1], pathPrefix: @props.pathPrefix, baseUrl: @props.baseUrl})
        GamePositionScore({key: "score-#{game_positions[1].id}", game_position: game_positions[1]})


GamePositionName = React.createClass
  render: ->
    {name, short_name, team_path, team_path_url, result} = @props.game_position
    path = "#{@props.pathPrefix}#{team_path}"
    td className: "game-name",
      if team_path != null
        a href: scoreboardUrl(@props.pathPrefix, team_path), title: name,
          if result == 'won'
            strong null,
              short_name
          else
            short_name
      else
        name

GamePositionScore = React.createClass
  render: ->
    {total, result} = @props.game_position
    td className: "game-score",
      if result == 'won'
        strong null,
          total
      else
        total

window.CurlcastScoreboardWidget = Scoreboard
