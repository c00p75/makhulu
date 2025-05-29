FROM php:8.2-apache

# Copy app files to Apache's web root
COPY . /var/www/html/

# Enable mod_rewrite
RUN a2enmod rewrite

# Ensure correct permissions
RUN chown -R www-data:www-data /var/www/html/

# Optional: Configure Apache to prioritize index.php
RUN echo "<Directory /var/www/html/> \n\
    AllowOverride All \n\
    Require all granted \n\
</Directory>" >> /etc/apache2/apache2.conf

