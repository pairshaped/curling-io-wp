# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :sprockets, destination: 'build/js', asset_paths: ['src/js'] do
  watch 'src/js/app.js'
end

# Guard::Compass
#
# You don't need to configure watchers for guard 'compass' declaration as they generated
# from your Compass configuration file. You might need to define the Compass working directory
# and point to the configuration file depending of your project structure.
#
# Available options:
#
# * working_directory: Define the Compass working directory, relative to the Guardfile directory
# * configuration_file: Path to the Compass configuration file, relative to :project_path
#
# Like usual, the Compass configuration path are relative to the :project_path

# guard 'compass', project_path: 'not_current_dir', configuration_file: 'path/to/my/compass_config.rb'
guard :compass, working_directory: 'src/css', configuration_file: 'compass_config.rb'

# Any files created or modified in the 'source' directory
# will be copied to the 'target' directory. Update the
# guard as appropriate for your needs.

guard :copy, :from => 'src/views', :to => 'build/views'
guard :copy, :from => 'src/images', :to => 'build/images'
