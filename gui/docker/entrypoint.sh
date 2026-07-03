#!/bin/sh
set -e

cd /app

if [ ! -d "node_modules" ]; then
  echo "node_modules no existe. Ejecutando npm install..."
  npm install
else
  echo "node_modules ya existe. Omitiendo npm install."
fi

exec "$@"