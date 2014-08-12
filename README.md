# Wordpress Plugin for Curlcast Stats

## Specification

The plugin will create several specific pages and routes, and allow the administrator to specify an API key on a configuration page.

The routes / pages will be:
* /stats/competitions
* /stats/competitions/[id]/teams
* /stats/competitions/[id]/standings
* /stats/competitions/[id]/scoreboard
* /stats/games/[id]/boxscore

Here are some real corresponding pages which you can hit via iframe:
* http://tothebutton.com/stats/competitions?access_key=SMqQStXP7bE
* http://tothebutton.com/stats/competitions/1201-curling-canada-cup/teams?access_key=SMqQStXP7bE
* http://tothebutton.com/stats/competitions/1201-curling-canada-cup/standings?access_key=SMqQStXP7bE
* http://tothebutton.com/stats/competitions/1201-curling-canada-cup/scoreboard?access_key=SMqQStXP7bE
* http://tothebutton.com/stats/games/2401?access_key=SMqQStXP7bE

We also need an embeddable widget for the sidebar:
[http://widgets.tothebutton.com/stats/scoreboard_mini.html](http://widgets.tothebutton.com/stats/scoreboard_mini.html)

[http://widgets.tothebutton.com](http://widgets.tothebutton.com/)
