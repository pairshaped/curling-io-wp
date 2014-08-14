var CurlcastScoreboard = React.createClass({
  render: function() {
    return null;
  }
});

var CurlcastBoxscore = React.createClass({
  render: function() {
    return null;
  }
});

var CurlcastStandings = React.createClass({
  render: function() {
    return null;
  }
});

var Curlcast = React.createClass({
  fetchData: function() {
    jQuery.ajax({
      url: "http://curling.dev/stats/competitions.js?acceess_key=" + this.props.access_key,
      dataType: 'jsonp',
      success: function(data) {
        this.setState({
          competitions: data
        });
      }.bind(this)
    });
  },

  getInitialState: function() {
    return { competitions: [] };
  },

  componentWillMount: function() {
    this.fetchData();
  },

  render: function() {
    var currentCompetition = getCurrentCompetition(this.state.competitions);
    var view = this.props.view;
    var competitionId = this.props.competition_id;
    var gameId = this.props.game_id;
    var competitionLis = this.stats.competitions.map(function(competition) {
      return (
        <a className={ "list-group-item" + (competition.id === competitionId ? " active" : "") } href={ "/stats/competitions/" + competition.id + "/" + view>
          {competition.name}
        </a>
      );
    });
    var contentView = null;
    if (view == "teams") {
      contentView = <CurlcastTeams access_key={access_key} competition_id={competition_id} />
    } else if (view == "standings") {
      contentView = <CurlcastStandings access_key={access_key} competition_id={competition_id} />
    } else if (view == "scoreboard") {
      contentView = <CurlcastScoreboard access_key={access_key} competition_id={competition_id} />
    } else if (view == "boxscore") {
      contentView = <CurlcastBoxscore access_key={access_key} game_id={game_id} />
    }

    return (
      <div className="row">
        <div className="col-xs-3" id="organization-nav">
          <div className="list-group">
            {competitionLis}
          </div>
        </div>
        <div className="col-xs-9">
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button className="navbar-toggle" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="navbar-brand">Curling Canada Cup</span>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={view === "scoreboard" ? "active" : ""}>
                  <a href={"/stats/competitions/" + competitionId + "/scoreboard">Scoreboard</a>
                </li>
                <li className={view === "standings" ? "active" : ""}>
                  <a href={"/stats/competitions/" + competitionId + "/standings">Standings</a>
                </li>
                <li className={view === "teams" ? "active" : ""}>
                  <a href={"/stats/competitions/" + competitionId + "/teams">Teams</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-xs-12" id="teams">
              {contentView}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

