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

Here are the pages that the iframes pull in:
[http://tothebutton.com/stats/orgs](http://tothebutton.com/stats/orgs)


## Installation

### Using Git (Recommended)
```
cd [wp-install-dir]/wp-content/plugins
git clone https://github.com/pairshaped/curlcast-wordpress.git
```

### From zip archive
1. Download the latest release archive from: [https://github.com/pairshaped/curlcast-wordpress/releases](https://github.com/pairshaped/curlcast-wordpress/releases)
2. Log into your wordpress admin panel
3. Click "Add New" then "Upload"
4. Choose the release archive you just downloaded (I.e. curlcast-wordpress-1.0.zip) and click "Install Now"


### After install
1. Log into your wordpress admin panel.
2. Go to "Settings" > "Permalinks"
3. Select any of the common settings options and save. It doesn't matter which you select. This just ensures the creation of an .htaccess file which we need in order to handle the custom routes.
4. Go to "Plugins"
5. Click "Activate" next to "Curlcast Stats"
6. Go to Curlcast (left menu bar).
7. Enter the access key for your organization and save it. All of the access keys can be seen here: [http://tothebutton.com/stats/orgs](http://tothebutton.com/stats/orgs)
8. Done. Go ahead and hit http://yourwpsite.com/stats

The scoreboard widget will be listed in the widgets section of the wordpress admin. This should be placed in an area that supports at least IAB medium box guidelines (300px wide) as anything smaller will look funky.



