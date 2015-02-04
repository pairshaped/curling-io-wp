{ div, ul, li, a, p, br } = React.DOM
{ h4 }  = React.DOM
{ table, thead, tr, th, tbody, td } = React.DOM
Link = ReactRouter.Link

StandingsBracketGameTeam = React.createClass
  render: ->
    {position} = @props
    div className: 'game-team-name', position.team.short_name

StandingsBracketGame = React.createClass
  popoverHtml: ->
    game = @props.game
    game_date = "Not yet scheduled"
    game_date = "#{CURLCAST_LANG.common.draw} #{game.draw.label}, #{game.draw.starts_at_formatted}" if game.draw?

    game_moves_to = []
    game_moves_to.push "#{CURLCAST_LANG.standings.winner_to} #{game.winner_to.game.name}" if game.winner_to?
    game_moves_to.push "#{CURLCAST_LANG.standings.loser_to} #{game.loser_to.game.name}" if game.loser_to?
    game_moves_to = game_moves_to.join ", "

    "<div class='game-positions'>" + \
      game.game_positions.map( (pos) ->
        "<div class='game-position game-position-result-#{pos.result || ''}'>
          <div class='game-position-name'>#{pos.team.short_name}</div>
          <div class='game-position-total'>#{pos.total || 0}</div>
        </div>"
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
        h4 className: 'group-name', group.name || "A #{CURLCAST_LANG.common.event}"
      group.games.map (game, idx) =>
        StandingsBracketGame key: game.id, group: group, game: game, zoom_factor: zoom_factor

StandingsBracket = React.createClass
  getInitialState: ->
    { zoom_factor: { x: 0.8, y: 0.55 } }

  render: ->
    div {},
      p {}, CURLCAST_LANG.standings.instructions
      br {}
      br {}
      # TODO: Might need to bring in a plugin to handle scrolling?
      #if @props.round.groups.length > 1
      #  ul className: 'pagination',
      #    @props.round.groups.map (group, idx) ->
      #      li key: idx,
      #        a href: "##{group.id}", group.name || "A #{CURLCAST_LANG.common.event}"
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
              th {}, CURLCAST_LANG.common.table.team
              th className: 'round-robin-won', CURLCAST_LANG.common.table.w
              th className: 'round-robin-lost', CURLCAST_LANG.common.table.l
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
    active_class += ' active in' if @props.round.active == true
    div className: 'tab-pane fade' + active_class, id: @props.round.to_param,
      div className: 'row',
        div className: 'col-xs-12', style: { height: '1em' }
      if @props.round.type == 'round_robin'
        StandingsRoundRobin(@props)
      else
        StandingsBracket(@props)

StandingsTab = React.createClass
  render: ->
    li className: (if @props.round.active == true then 'active' else ''), 'data-tab-target': @props.round.to_param,
      Link to: 'standings-round', params: { competition_id: @props.routerState.params.competition_id, round_id: @props.round.to_param }, className: 'tab-link',
        @props.round.name

StandingsTabContainer = React.createClass
  render: ->
    div className: 'col-xs-12',
      ul className: 'nav nav-tabs', role: 'tablist',
        @props.rounds.map (round, idx) =>
          roundProps = @props
          roundProps.key = "tab-#{round.to_param}"
          roundProps.round = round
          StandingsTab roundProps
      div className: 'tab-content',
        @props.rounds.map (round, idx) =>
          roundProps = @props
          roundProps.key = "pane-#{round.to_param}"
          roundProps.round = round
          StandingsPanel roundProps

Standings = React.createClass
  getInitialState: ->
    { rounds: null }

  connectPoints: (game, position) ->
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

  tabChanged: ->
    activeTabTarget = '#' + jQuery('.nav.nav-tabs li.active').attr('data-tab-target')
    activeTab = jQuery(activeTabTarget)
    activeTab.find('.game').each (index, game) =>
      $game = jQuery(game)
      @connectPoints($game, 'top')
      @connectPoints($game, 'bottom')

  processServerData: (props) ->
    results = props.data
    rounds = []
    hasActive = false
    results.round_robins.map (roundRobin, idx) =>
      round = roundRobin
      round.type = "round_robin"
      round.index = idx + 1
      round.to_param = @props.roundToStr round
      round.active = (props.routerState.params.round_id == round.to_param)
      hasActive = round.active if hasActive == false
      rounds.push round
    results.brackets.map (bracket, idx) =>
      round = bracket
      round.type = "bracket"
      round.index = results.round_robins.length + idx + 1
      round.to_param = @props.roundToStr round
      round.active = (props.routerState.params.round_id == round.to_param)
      hasActive = round.active if hasActive == false
      rounds.push round
    rounds[0].active = true if hasActive == false
    @setState rounds: rounds

  componentWillReceiveProps: (nextProps) ->
    @processServerData nextProps

  componentWillMount: ->
    @processServerData @props

  componentDidMount: ->
    @tabChanged()

  componentDidUpdate: ->
    @tabChanged()

  render: ->
    roundProps = @props
    roundProps.rounds = @state.rounds
    roundProps.isActive = @isActive

    div className: 'row',
      StandingsTabContainer roundProps

window.CurlcastStandings = Standings
