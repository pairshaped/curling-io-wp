# A sample Guardfile
# More info at https://github.com/guard/guard#readme

## Uncomment and set this to only include directories you want to watch
# directories %(app lib config test spec feature)
directories ['src', 'css', 'js', 'templates']

## Uncomment to clear the screen before every task
clearing :on

guard :sprockets, destination: 'js/', asset_paths: ['src/javascripts'] do
  watch 'src/javascripts/app.js'
end

guard :sass, input: 'src/stylesheets/app.sass', output: 'css', style: :compressed, smart_partials: true do
  watch 'src/stylesheets/app.sass'
end

guard 'livereload' do
  watch(%r{css/.+\.css$})
  watch(%r{js/.+\.js$})
  watch(%r{templates/.+\.php$})
end

