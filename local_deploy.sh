#!/usr/bin/env sh

PLUGINS_PATH=/var/www/curlcast-wordpress/wp-content/plugins

sudo mkdir -p ${PLUGINS_PATH}/curlcast-v2
sudo cp -r ./* ${PLUGINS_PATH}/curlcast-v2/
sudo chmod -R 755 ${PLUGINS_PATH}/curlcast-v2
sudo chown -R www-data ${PLUGINS_PATH}/curlcast-v2

