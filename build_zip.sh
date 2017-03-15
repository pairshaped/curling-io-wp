TARGET=./curling-io.zip
echo "=============================="
echo " Removing old update"
echo "=============================="
rm -rfv $TARGET

echo "=============================="
echo " Zipping new update"
echo "=============================="
zip -r $TARGET ./ -x \*.git* \*.zip \*.sh
