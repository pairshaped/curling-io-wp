# A sample Guardfile
# More info at https://github.com/guard/guard#readme

## Uncomment and set this to only include directories you want to watch
# directories %(app lib config test spec feature)
directories ['src']

## Uncomment to clear the screen before every task
clearing :on

guard :sprockets, destination: 'js/', asset_paths: ['src/js'] do
  watch 'src/js/app.js'
end

guard :sass, input: 'src/css/app.sass', output: 'css', style: :compressed, smart_partials: true do
  watch 'src/css/app.sass'
end

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

