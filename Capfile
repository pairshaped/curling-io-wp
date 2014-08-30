load 'deploy'

default_run_options[:pty] = true

set :application, "curlcast-wordpress"
set :repository,  "git@github.com:pairshaped/#{application}.git"
set :use_sudo, false
set :keep_releases, 5
set :deploy_to, "/var/www/wordpress"
set :user, "deploy"

server 'curlcast-staging.ca', :app, :web, :db, :primary => true

# clean up old releases
after "deploy:restart", "deploy:cleanup"

