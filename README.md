# Prueba Técnica - Consulta de Clima Colombia

Aplicación web full stack para administrar ciudades colombianas y consultar su clima actual mediante la integración con OpenWeatherMap.

## Descripción

Este proyecto fue desarrollado como prueba técnica con el objetivo de construir una solución desacoplada, mantenible y fácil de ejecutar en entornos locales usando contenedores Docker.

La aplicación permite registrar ciudades colombianas con su información geográfica, administrar estos registros mediante operaciones CRUD y consultar el estado climático actual de cada ciudad a través de un servicio externo.

## Tecnologías utilizadas

- **Backend:** Laravel + PHP
- **Frontend:** React + Tailwind CSS + Context API
- **Base de datos:** PostgreSQL
- **Infraestructura:** Docker + Docker Compose
- **API externa:** OpenWeatherMap

## Características principales

- Gestión completa de ciudades.
- Creación, listado, edición y eliminación lógica de registros.
- Registro de nombre, latitud, longitud e imagen por ciudad.
- Carga de imágenes asociadas a ciudades.
- Consulta de clima actual por ciudad seleccionada.
- Seeder inicial con datos base.
- Arquitectura separada entre frontend y backend.
- Despliegue local simplificado mediante contenedores.

## Estructura del proyecto

```bash
.
├── api/
├── gui/
├── docker-compose.yml
└── README.md
```

- `api/`: expone la API REST y contiene la lógica de negocio.
- `gui/`: contiene la interfaz de usuario.
- `docker-compose.yml`: define los servicios necesarios para la ejecución del proyecto.

## Endpoints disponibles

```http
GET     /api/v1/cities
POST    /api/v1/cities
GET     /api/v1/cities/{city}
PUT     /api/v1/cities/{city}
DELETE  /api/v1/cities/{city}
GET     /api/v1/cities/{city}/weather
```

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jhormanarias/clima-app
cd clima-app
```

### 2. Configurar variables de entorno

```bash
cp api/.env.example api/.env
cp gui/.env.example gui/.env
cp .env.example .env
```

### 3. Registrar credenciales de OpenWeatherMap

Editar `api/.env`:

```env
OPENWEATHER_API_KEY=tu_api_key_aqui
OPENWEATHER_UNITS=metric
```

### 4. Construir y levantar los contenedores

```bash
docker compose up --build
```
## Inicialización del backend

Si el proyecto te presenta algún error al ejecutarlo y requiere inicialización manual del backend, ejecutar dentro del contenedor de la API:

```bash
composer install
php artisan key:generate
php artisan migrate --seed
```

Laravel utiliza migraciones y seeders para preparar la estructura y los datos iniciales de la base de datos.


## Consideraciones técnicas

- El backend fue desarrollado con Laravel siguiendo una estructura orientada a API REST.
- La eliminación lógica permite conservar trazabilidad de registros.
- PostgreSQL se ejecuta dentro del entorno Docker para facilitar portabilidad y consistencia.
- El frontend fue construido con React y Tailwind CSS, priorizando componentes reutilizables y una interfaz clara.
- La integración con OpenWeatherMap permite consultar condiciones climáticas actuales por ciudad.

## Autor

Jhorman Gañan  
Desarrollador Full Stack  
Colombia