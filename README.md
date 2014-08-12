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
* http://curling.dev/stats/competitions?access_key=O5s2XesQLts
* http://curling.dev/stats/competitions/1201-curling-canada-cup/teams?access_key=O5s2XesQLts
* http://curling.dev/stats/competitions/1201-curling-canada-cup/standings?access_key=O5s2XesQLts
* http://curling.dev/stats/competitions/1201-curling-canada-cup/scoreboard?access_key=O5s2XesQLts
* http://curling.dev/stats/games/2401?access_key=O5s2XesQLts

We also need an embeddable widget for the sidebar:
[http://widgets.tothebutton.com/stats/scoreboard_mini.html](http://widgets.tothebutton.com/stats/scoreboard_mini.html)

[http://widgets.tothebutton.com](http://widgets.tothebutton.com/)
