#!/bin/sh

# Create our zip directory
mkdir ./curlcast

# If we need any files/directories, please add them here!
files=( "curlcast.php" "images/" "templates/" "js/" "css/" )

# Get the current version
version=`cat .version`

# Copy all the files
for i in "${files[@]}"
do
  fname=$(basename "$i")
  extension="${fname##*.}"
  # If it's a php file, preprocess it so the version number is static
  if [ "$extension" == "php" ]; then
    sed "s/__CURLCAST_VERSION__/${version}/g" "./$i" > "./curlcast/$i"
    # If it's anything but a php file, just copy it
  else
    cp -rf "./${i}" "./curlcast/${i}"
  fi
done

# Remove old zip
rm -f ./update.zip
# Compress new update.zip
zip -r update.zip ./curlcast
# Clean up old folder
rm -rf ./curlcast
