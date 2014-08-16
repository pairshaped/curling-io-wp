# Wordpress Plugin for Curlcast Stats

## Specification

The plugin will create several specific pages and routes, and allow the administrator to specify an API key on a configuration page.

The routes / pages will be:
* /stats/
* /stats/competitions/
* /stats/competitions/scoreboard_mini
* /stats/competitions/[id]/teams/
* /stats/competitions/[id]/standings/
* /stats/competitions/[id]/scoreboard/
* /stats/games/[id]/boxscore/

The scoreboard_mini is an embeddable widget with a minimum size of 280px.

[http://tothebutton.com/stats](http://tothebutton.com/stats)

## Installation

### From Github
```
cd [wp-install-dir]/wp-content/plugins
git clone https://github.com/pairshaped/curlcast-wordpress.git curlcast
```

### From zip archive
1. Download the latest release archive from: [https://github.com/pairshaped/curlcast-wordpress/releases](https://github.com/pairshaped/curlcast-wordpress/releases)
2. Move / copy it into your [wp-install-dir]/wp-content/plugins
3. Unzip it
4. Rename it's directory from "curlcast-wordpress" to just "curlcast"
