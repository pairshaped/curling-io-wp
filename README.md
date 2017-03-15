# Wordpress Plugin for Curling I/O Stats

## Specification

The plugin will provide the `[curling_io_full]` shortcode for the full widget, and a sidebar widget. Administrators can specify an API key and select the page that the widget is embedded in.

The routes / pages will be:
* /your_scoreboard_page_here/
* /your_scoreboard_page_here/#!/competitions
* /your_scoreboard_page_here/#!/competitions/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/draws/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/games/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/standings
* /your_scoreboard_page_here/#!/competitions/:competition_id/standings/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/teams
* /your_scoreboard_page_here/#!/competitions/:competition_id/teams/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/team_athletes/:id
* /your_scoreboard_page_here/#!/competitions/:competition_id/reports/*

The scoreboard_mini is an embeddable widget with a minmum size of 350px.

## Installation

### Using Git (Recommended)

```
cd [wp-install-dir]/wp-content/plugins
git clone git@github.com:pairshaped/curling-io-wp.git
```

### From zip archive

1. Download the latest release archive from: [https://github.com/pairshaped/curling-io-wp/releases](https://github.com/pairshaped/curling-io-wp/releases)
2. Log into your wordpress admin panel
3. Click "Add New" then "Upload"
4. Choose the release archive you just downloaded (I.e. curling-io.zip) and click "Install Now"


### After install

1. Log into your wordpress admin panel.
2. Go to "Settings" > "Permalinks"
3. Select any of the common settings options and save. It doesn't matter which you select. This just ensures the creation of an .htaccess file which we need in order to handle the custom routes.
4. Create a new page for your stats/scoreboard to be embedded.  You can use the shortcode ```[curling_io_full]``` on the page.  You may want to set the page's url to /scoreboard/ or /stats/ depending on your desired setup.
5. Go to "Plugins"
6. Click "Activate" next to "Curling IO Wordpress Plugin"
7. Go to "Settings" > "Curling IO"
8. Enter the access key for your organization.
9. Select the scoreboard page that you created in step 4
10. Save settings.
12. Done. Go ahead and hit http://yourwpsite.com/stats

The scoreboard widget will be listed in the widgets section of the wordpress admin. This should be placed in an area that supports at least IAB medium box guidelines (300px wide) as anything smaller will look funky.
