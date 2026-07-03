# Prueba Técnica - Consulta de Clima Colombia

Aplicación web desarrollada como prueba técnica para consultar el clima actual de ciudades colombianas registradas en base de datos, utilizando Laravel para el backend, una interfaz web amigable para el frontend y la API de OpenWeatherMap para obtener información meteorológica en tiempo real.

## Tecnologías

- Laravel
- PHP
- HTML
- CSS
- JavaScript
- Base de datos SQL
- Docker
- OpenWeatherMap API

## Objetivo

El objetivo de esta prueba es construir una aplicación que permita registrar ciudades colombianas con su nombre, latitud, longitud e imagen, almacenar esa información en base de datos y consultar dinámicamente el clima actual al seleccionar una ciudad.

## Alcance funcional

- Registro de ciudades colombianas.
- Almacenamiento de ciudades en base de datos.
- Listado de ciudades registradas.
- Consulta del clima actual usando latitud y longitud.
- Visualización de datos meteorológicos en una interfaz amigable.

## Estructura general

```bash
.
├── api/
├── gui/
├── docker-compose.yml
└── README.md
```

- `api/`: backend del proyecto.
- `gui/`: frontend del proyecto.
- `docker-compose.yml`: orquestación de contenedores.
- `README.md`: documentación general del repositorio.

## Requisitos

Para ejecutar el proyecto localmente se requiere:

- Docker instalado.
- Docker Compose disponible.
- Una API key válida de OpenWeatherMap.

## Configuración inicial

Clonar el repositorio:

```bash
git clone https://github.com/Jhormanarias/clima-app
cd clima-app
```

Crear archivos de entorno según la estructura del proyecto:

```bash
cp api/.env.example api/.env
cp gui/.env.example gui/.env
cp .env.example .env
```

Configurar en el backend la API key de OpenWeatherMap:

```env
OPENWEATHER_API_KEY=tu_api_key_aqui
OPENWEATHER_UNITS=metric
```

## Ejecución con Docker

Para construir e iniciar el entorno:

```bash
docker compose up --build
```

El comando `docker compose up --build` construye e inicia los servicios definidos en el archivo de composición.

## Inicialización del backend

Si el proyecto te presenta algún error al ejecutarlo y requiere inicialización manual del backend, ejecutar dentro del contenedor de la API:

```bash
composer install
php artisan key:generate
php artisan migrate --seed
```

Laravel utiliza migraciones y seeders para preparar la estructura y los datos iniciales de la base de datos.

## Estado del proyecto

> Proyecto en desarrollo.  
> Este README será ampliado al finalizar la implementación completa.

## Autor

**Jhorman Gañan**  
Desarrollador Full Stack  
Colombia