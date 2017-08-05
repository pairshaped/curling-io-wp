PHP=/Applications/MAMP/bin/php/php7.0.12/bin/php
find . -name "**.php" -print0 | xargs -0 -n 1 -P 8 $PHP -l
