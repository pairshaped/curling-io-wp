#!/usr/bin/env sh

PLUGINS_PATH=/var/www/curlcast-wordpress/wp-content/plugins

sudo mkdir -p ${PLUGINS_PATH}/curlcast
sudo cp -r ./* ${PLUGINS_PATH}/curlcast/
sudo chmod -R 755 ${PLUGINS_PATH}/curlcast
sudo chown -R www-data ${PLUGINS_PATH}/curlcast

