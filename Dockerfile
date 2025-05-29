FROM php:8.2-apache

# Copy app files to Apache's web root
COPY . /var/www/html/

# Enable mod_rewrite
RUN a2enmod rewrite

# Confirm that index.php was copied (output to build logs)
RUN ls -l /var/www/html && cat /var/www/html/index.php || echo "index.php not found"

# Ensure correct permissions
RUN chown -R www-data:www-data /var/www/html/

# Enable .htaccess support
RUN echo "<Directory /var/www/html/> \n\
    AllowOverride All \n\
    Require all granted \n\
</Directory>" >> /etc/apache2/apache2.conf

EXPOSE 80
