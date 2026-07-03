#!/bin/sh
set -e

cd /var/www

mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p bootstrap/cache

chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

if [ ! -d "vendor" ]; then
  echo "La carpeta vendor no existe. Ejecutando composer install..."
  composer install --no-interaction --prefer-dist --optimize-autoloader
fi

if [ -f ".env" ]; then
  echo "Archivo .env detectado."

  if grep -q '^DB_HOST=' .env && grep -q '^DB_DATABASE=' .env && grep -q '^DB_USERNAME=' .env; then
    echo "Variables de base de datos detectadas. Ejecutando migraciones..."
    php artisan config:clear || true
    php artisan migrate --seed --force || echo "No se pudieron ejecutar las migraciones automáticamente."
  else
    echo "El archivo .env existe, pero faltan variables de base de datos. Se omiten migraciones."
  fi
else
  echo "No existe archivo .env. Se omiten migraciones."
fi

exec "$@"