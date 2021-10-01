#!/bin/bash

php /var/www/html/artisan config:cache
chmod 777 -R /var/www/html/storage

cd /var/www/html/ && touch health.ok && composer install

apache2ctl -D FOREGROUND
