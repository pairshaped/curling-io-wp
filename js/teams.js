/** @jsx React.DOM */
jQuery(function() {

  var CurlcastTeam = React.createClass({
    render: function() {
      return (
        <tr key={this.props.team.id}>
          <td><a href="#" data-toggle="tooltip" title="Some tooltip text!">{this.props.team.name}</a></td>
        </tr>
      );
    }
  });

  var CurlcastTeams = React.createClass({
    fetchData: function() {
      jQuery.ajax({
        url: this.props.url,
        dataType: 'jsonp',
        success: function(data) {
          this.setState({
            teams: data
          });
        }.bind(this)
      });
    },

    getInitialState: function() {
      return { teams: [] };
    },

    componentWillMount: function() {
      this.fetchData();
    },

    render: function() {
      var teams = [];
      this.state.teams.map(function(team) {
        teams.push(<CurlcastTeam team={team} />);
      });

      return (
        <table className="table table-bordered table-condensed">
          <thead>
            <tr>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {teams}
          </tbody>
        </table>
      );
    }
  });

  console.log('rendering comp');
  React.renderComponent(
    CurlcastTeams({
      url: "http://tothebutton.com/stats/competitions/1201/teams.js?access_key=SMqQStXP7bE"
    }), document.getElementById('teams')
  );
});
