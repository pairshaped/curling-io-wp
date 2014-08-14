<div id="curlcast-stats">
  <div id="teams"></div>
</div>


<script type="text/jsx">
  /*** @jsx React.DOM */

  jQuery(function() {
    var CurlcastTeam = React.createClass({
      render: function() {
        return (
          <tr key={this.props.team.id}>
            <td><a href="#" data-toggle="tooltip" title="Some tooltip text!">{this.props.team.name}</a></td>
            <td></td>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teams}
            </tbody>
          </table>
        );
      }
    });

    React.renderComponent(
      CurlcastTeams({
        // TODO: use the proper url
        url: "http://tothebutton.com/stats/competitions/1201/teams.js?access_key=SMqQStXP7bE"
      }), document.getElementById('teams')
    );

    console.log("{url}");
  });
</script>
