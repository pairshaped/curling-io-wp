PHP=/usr/local/Cellar/php53/5.3.29_4/bin/php
find . -name "*.php" -print0 | xargs -0 -n1 -P8 $PHP -l
