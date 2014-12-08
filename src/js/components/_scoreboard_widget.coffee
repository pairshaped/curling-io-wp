{div, p, a, strong, br, h4, table, tbody, tr, td} = React.DOM

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
          placeholderMessage: "There are no active competitions."
          competitions: results
      error: -> console.log "there was an error"
    )

  componentWillMount: ->
    @loadDataFromServer()
    setInterval(@loadDataFromServer, @props.pollInterval)

  render: ->
    if @state.competitions.length == 0
      div null,
        p null,
          strong null,
            @state.placeholderMessage
    else
      div id: 'curlcast_accordion', className: 'panel-group',
        @state.competitions.map (competition) =>
          Competition({key: competition.id, competition: competition, pathPrefix: @props.pathPrefix})

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
              Draw({draw: current_draw, pathPrefix: @props.pathPrefix})
            div className: "col-xs-12",
              if current_draw?
                p null,
                  a href: "/#{@props.pathPrefix}#{path}", dangerouslySetInnerHTML: {__html: "Full Scoreboard &raquo;"}
              else
                p null,
                  "No Draws Scheduled Yet"

Draw = React.createClass
  render: ->
    {id, label, starts, games} = @props.draw
    div className: "col-xs-12",
      p null,
        strong null,
          "Draw #{label}: "
        starts
      if games.length == 0
        p null,
          "No Games Scheduled Yet"
      else
        p null,
          "Prefix: #{@props.pathPrefix}"
        table className: "table table-bordered table-condensed",
          games.map (game) =>
            Game({key: game.id, game: game, pathPrefix: @props.pathPrefix})

Game = React.createClass
  render: ->
    {id, state, path, game_positions} = @props.game
    tbody null,
      tr null,
        GamePositionName({key: game_positions[0].id, game_position: game_positions[0], pathPrefix: @props.pathPrefix})
        GamePositionScore({key: "score-#{game_positions[0].id}", game_position: game_positions[0]})
        td className: "game-state", rowSpan: "2",
          strong null,
            state
          br null
          a href: "/#{@props.pathPrefix}#{path}",
            "Box"
      tr null,
        GamePositionName({key: game_positions[1].id, game_position: game_positions[1], pathPrefix: @props.pathPrefix})
        GamePositionScore({key: "score-#{game_positions[1].id}", game_position: game_positions[1]})


GamePositionName = React.createClass
  render: ->
    {name, short_name, team_path, result} = @props.game_position
    td className: "game-name",
      if team_path != null
        a href: "/#{@props.pathPrefix}#{team_path}", title: name,
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
