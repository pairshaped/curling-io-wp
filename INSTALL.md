## Installation

Copy **curlcast** dir to **wp-content/plugins** or install using zip archive

Replace config options:

* define('WP_CURLCAST_PAGE_URL', 'http://tothebutton.com/stats');
* define('WP_CURLCAST_WIDGET_URL', 'http://widgets.tothebutton.com/stats/scoreboard_mini.html');
* define('WP_CURLCAST_UPDATE_URL', 'http://curlcast.ulko.net/update.php'); 

and

* static $templates

with your own.

Copy **update.php** to your server, put **update.zip** with a new version right next to it. 

**update.zip** contains **curlcast** dir with all files inside this dir, not in root of archive.

## Developing

* Install ruby 2.x if you don't have it (https://rvm.io/rvm/install)
* Clone the repo into a local wordpress plugins dir as curlcast. I.e. ```git clone git@github.com:pairshaped/curlcast-wordpress.git curlcast```
* cd into the repo and run bundle ```cd curlcast && bundle```
* Start up guard: ```guard```

