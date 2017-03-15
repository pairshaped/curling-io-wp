# Wordpress Plugin for Curling I/O Stats

## Overview

The plugin will provide the `[curling_io_full]` shortcode for the full widget, and a sidebar widget. Administrators can specify an API key and select the page that the widget is embedded in.

The paths will be:
* /scoreboard/
* /scoreboard/#!/competitions
* /scoreboard/#!/competitions/:id
* /scoreboard/#!/competitions/:competition_id/draws/:id
* /scoreboard/#!/competitions/:competition_id/games/:id
* /scoreboard/#!/competitions/:competition_id/standings
* /scoreboard/#!/competitions/:competition_id/standings/:id
* /scoreboard/#!/competitions/:competition_id/teams
* /scoreboard/#!/competitions/:competition_id/teams/:id
* /scoreboard/#!/competitions/:competition_id/team_athletes/:id
* /scoreboard/#!/competitions/:competition_id/reports/*

The scoreboard_mini is an embeddable widget with a minmum size of 350px.

## Installation

After the first time installing, updates will be available automatically in the same manner as any other wordpress plugin.

1. Download the latest release archive from: [https://github.com/pairshaped/curling-io-wp/releases](https://github.com/pairshaped/curling-io-wp/releases)
2. Log into your wordpress admin panel
3. Click "Add New" then "Upload"
4. Choose the release archive you just downloaded (I.e. curling-io.zip) and click "Install Now"

## Post installation

1. Log into your wordpress admin panel.
2. Go to "Settings" > "Permalinks"
3. Select any of the common settings options and save. It doesn't matter which you select. This just ensures the creation of an .htaccess file which we need in order to handle the custom routes.
4. Create a new page for your scoreboard to be embedded.  You can use the shortcode ```[curling_io_full]``` on the page.  You can then set the page's permalink to /scoreboard/.
5. Go to "Plugins"
6. Click "Activate" next to "Curling IO Wordpress Plugin"
7. Go to "Settings" > "Curling IO"
8. Enter the access key for your organization. If you do not have an access key, you will need to ask your organization administrator.
9. Select the scoreboard page that you created in step 4
10. Save settings.
12. Done. Go ahead and hit http://yourwpsite.com/scoreboard

The scoreboard widget will be listed in the widgets section of the wordpress admin. This should be placed in an area that supports at least IAB medium box guidelines (300px wide) as anything smaller will look funky.
