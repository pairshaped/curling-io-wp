require 'mina/git'

set :deploy_to, '/var/www/temp-curlcast-wordpress'
set :repository, 'git@github.com:pairshaped/curlcast-wordpress.git'
set :user, 'deploy'
set :forward_agent, true

if ENV['branch']
  set :branch, ENV['branch']
else
  set :branch, 'master'
end

set :domains, %w[app1.curlcast.pairshaped.ca app2.curlcast.pairshaped.ca]

desc "Setup all servers"
task :setup_all do
  isolate do
    domains.each do |domain|
      set :domain, domain
      invoke :setup
      run!
    end
  end
end

desc "Deploy to all servers"
task :deploy_all do
  isolate do
    domains.each do |domain|
      set :domain, domain
      invoke :deploy
      run!
    end
  end
end


task :environment do
end

task :setup => :environment do
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:cleanup'

    to :launch do
      %w[rb sh md markdown txt zip].each do |ext|
        queue "rm -f #{deploy_to}/#{current_path}/*.#{ext}"
      end
      queue "rm -f #{deploy_to}/#{current_path}/config"
      queue "cd #{deploy_to}"
      queue "zip -r update.zip #{current_path}"
      queue "mv update.zip #{current_path}/"
    end
  end
end

