{ div, ul, li, a, p } = React.DOM
{ h4 }  = React.DOM
{ table, thead, tr, th, tbody, td } = React.DOM

StandingsBracketGameTeam = React.createClass
  render: ->
    {position} = @props
    div className: 'game-team-name', position.team.short_name.substr(0,10)

StandingsBracketGame = React.createClass
  popoverHtml: ->
    game = @props.game
    game_date = "Not yet scheduled"
    game_date = "Draw #{game.draw.label}, #{game.draw.starts_at_formatted}" if game.draw?

    game_moves_to = []
    game_moves_to.push "Winner to #{game.winner_to.game.name}" if game.winner_to?
    game_moves_to.push "Loser to #{game.loser_to.game.name}" if game.loser_to?
    game_moves_to = game_moves_to.join ", "

    "<div class='game-positions'>" + \
      game.game_positions.map( (pos) ->
        "<div class='game-position game-position-result-" + (pos.result || '') + "'><div class='game-position-name'>" + pos.team.short_name + "</div></div>"
      ).join("") + \
    "</div>" + \
    "<div class='game-date'>" + game_date + "</div>" + \
    "<div class='game-moves-to'>" + game_moves_to + "</div>"

  popOver: ->
    jQuery(@refs.container.getDOMNode()).popover
      trigger: 'hover'
      placement: 'top'
      container: jQuery(jQuery(this).parent(".tab-content")[0]).parent(".row")[0]
      html: true
      template: "<div class='popover game-popover' style='z-index:99999;'><div class='arrow'></div><div class='popover-content'></div></div>"
      content: @popoverHtml()

  componentDidMount: ->
    @popOver()

  componentDidUpdate: ->
    @popOver()

  render: ->
    {group, game, zoom_factor} = @props
    game_attrs = {
      id: game.id
      'data-group': game.group_id
      className: "game game-state-#{game.state}"
      style: {
        left: Math.round(game.x * zoom_factor.x) + "px"
        top: Math.round((game.y - group.y) * zoom_factor.y) + "px"
      }
      'data-top-connecting-input': game.top_connecting_input.id
      'data-top-connecting-input-group': game.top_connecting_input.group_id
      'data-top-connecting-input-result': game.top_connecting_input.result
      'data-bottom-connecting-input': game.bottom_connecting_input.id
      'data-bottom-connecting-input-group': game.bottom_connecting_input.group_id
      'data-bottom-connecting-input-result': game.bottom_connecting_input.result
      ref: 'container'
    }
    div game_attrs,
      div className: 'game-name',
        game.name.substr(0,6)
      game.game_positions.map (pos, idx) ->
        StandingsBracketGameTeam key: idx, position: pos


StandingsBracketGroup = React.createClass
  render: ->
    {group, zoom_factor} = @props
    style = {}
    style = { height:  Math.round( (@props.group.games[@props.group.games.length-1].y + 200 - group.y) * zoom_factor.y) + "px" } if group.games.length > 0
    div className: 'bracket-group', id: group.id, style: style,
      unless @props.bracket.groups.length == 1
        h4 className: 'group-name', group.name || 'A Event'
      group.games.map (game, idx) =>
        StandingsBracketGame key: game.id, group: group, game: game, zoom_factor: zoom_factor

StandingsBracket = React.createClass
  getInitialState: ->
    { zoom_factor: { x: 0.8, y: 0.55 } }

  render: ->
    div className: 'row',
      div className: 'col-xs-12',
        p {}, 'Mouse-over or tap on a game below to view game details.'
        if @props.round.groups.length > 1
          ul className: 'pagination',
            @props.round.groups.map (group, idx) ->
              li key: idx,
                a href: "##{group.id}", group.name || 'A Event'
        @props.round.groups.map (group, idx) =>
          StandingsBracketGroup key: idx, bracket: @props.round, group: group, zoom_factor: @state.zoom_factor


StandingsRoundRobin = React.createClass
  render: ->
    div className: 'row',
      div className: 'col-sm-6',
        h4 {}, @props.round.name
        table className: 'table table-bordered table-condensed',
          thead {},
            tr {},
              th {}, 'Team'
              th className: 'round-robin-won', 'W'
              th className: 'round-robin-lost', 'L'
          tbody {}, # TODO: Refactor into it's own component
            @props.round.teams.map (team, idx) ->
              tr key: idx,
                td {}, team.team_name
                td className: 'round-robin-win', team.games_won
                td className: 'round-robin-lost', team.games_lost

StandingsPanel = React.createClass
  render: ->
    active_class = ''
    active_class = ' bracket' if @props.round.type == "bracket"
    active_class += ' active in' if @props.isActive( @props.round ) == true
    div className: 'tab-pane fade' + active_class, id: @props.id,
      div className: 'row',
        div className: 'col-xs-12', style: { height: '1em' }
      if @props.round.type == 'round_robin'
        StandingsRoundRobin(@props)
      else
        StandingsBracket(@props)

StandingsTab = React.createClass
  propogateTab: ->
    @props.setActive @props.round.type, @props.round.id

  render: ->
    li className: (if @props.isActive(@props.round) == true then 'active' else ''),
      a href: @props.href, 'data-toggle': 'tab', onClick: @propogateTab, @props.round.name

StandingsTabContainer = React.createClass
  render: ->
    {rounds} = @props
    div className: 'col-xs-12',
      ul className: 'nav nav-tabs', role: 'tablist',
        rounds.map (round, idx) =>
          StandingsTab key: "tab-#{round.type}-#{round.id}", href: "#tab#{idx+1}", round: round, setActive: @props.setActive, isActive: @props.isActive
      div className: 'tab-content',
        rounds.map (round, idx) =>
          StandingsPanel key: "pane-#{round.type}-#{round.id}", round: round, id: "tab#{idx + 1}", isActive: @props.isActive

Standings = React.createClass
  getInitialState: ->
    { active: null, rounds: null }

  updateActive: (rounds = @state.rounds) ->
    active = @state.active
    return active if active? && active.type? && active.id?
    return { type: rounds[0].type, id: rounds[0].id } if rounds.length > 0
    return null

  isActive: (round) ->
    active = @updateActive()
    return false unless round? && active?
    return true if round.type == active.type && round.id == active.id
    return false

  getActive: ->
    active = @updateActive()
    return null unless active?
    for round in @state.rounds
      return round if round.type == active.type && round.id == active.id
    # If the round was removed, reset active
    @state.active = null
    @getActive()

  setActive: (type, id) ->
    @setState active: {type: type, id: id}

  doPlumbing: ->
    connectPoints = (game, position) ->
      if (game.attr("data-#{position}-connecting-input") && game.attr('data-group') == game.attr("data-#{position}-connecting-input-group"))
        jpObj = jsPlumb.getInstance()
        jpObj.importDefaults Connector: "Flowchart"

        targetY = (game.attr("data-#{position}-connecting-input-result") == 'W' ? 0.25 : 0.75)
        jpObj.connect
          source: game.attr('id')
          target: game.attr("data-#{position}-connecting-input")
          endpoint: "Blank"
          anchors: [
            [0, 0.5, -1, 0]
            [1, 0.5, 1, 0]
          ]
          paintStyle: { strokeStyle: "#ccc", lineWidth: 1 }

    jQuery("a[data-toggle='tab']").on "shown.bs.tab", (e) ->
      activeTab = jQuery(jQuery(e.target).attr("href"))
      activeTab.find('.game').each ->
        game = jQuery(this)
        connectPoints(jQuery(this), 'top')
        connectPoints(jQuery(this), 'bottom')

    # On load we need to trigger the first tabs shown event
    # in case it's a bracket in order to draw the connections.
    jQuery("a[data-toggle='tab']").first().trigger("shown.bs.tab");

  loadDataFromServer: ->
    jQuery.ajax(
      url: @props.url
      dataType: 'jsonp'
      cache: true
      jsonpCallback: 'curlcastJSONP'
      success: (results) =>
        # do something with results
        rounds = []
        results.round_robins.map (roundRobin, idx) ->
          round = roundRobin
          round.type = "round_robin"
          round.index = idx + 1
          rounds.push round
        results.brackets.map (bracket, idx) ->
          round = bracket
          round.type = "bracket"
          round.index = results.round_robins.length + idx + 1
          rounds.push round
        @setState rounds: rounds, active: @updateActive(rounds)
        setTimeout @loadDataFromServer, @props.pollInterval
    )

  componentWillMount: ->
    @loadDataFromServer()

  componentDidUpdate: ->
    @props.fixLinks()
    @doPlumbing()

  componentDidMount: ->
    @doPlumbing()

  render: ->
    pathPrefix = @props.pathPrefix
    {rounds} = @state
    return div {}, 'Loading Standings...' unless rounds?
    div className: 'row',
      StandingsTabContainer({rounds: rounds, isActive: @isActive, setActive: @setActive})



window.CurlcastStandings = Standings
