## Install notes

Copy **curlcast** dir to **wp-content/plugins** or istall using zip archive

Replace config options:

* define('WP_CURLCAST_PAGE_URL', 'http://tothebutton.com/stats');
* define('WP_CURLCAST_WIDGET_URL', 'http://widgets.tothebutton.com/stats/scoreboard_mini.html');
* define('WP_CURLCAST_UPDATE_URL', 'http://curlcast.ulko.net/update.php'); 

and

* static $templates

with your own.

Copy **update.php** to your server, put **update.zip** with a new version right next to it. 
**update.zip** contains "curlcast" dir with all files inside this dir, not in root of archive.