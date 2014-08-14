//= require_tree ./vendor
//= require_self

$(function() {

  // Parse return the named param
  window.getParam = function(sVar) {
    return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }

  window.getCurrentCompetition = function(competitions) {

    // Grab the current competition based on param
    var id = parseInt(getParam('competition'));
    result = _.find(competitions, function(competition) {
      return competition.id === id;
    });

    // Assign the first competition returned if one wasn't defined via param
    if (!result && competitions.length > 0) {
      result = competitions[0];
    }
    return result;
  }

});
