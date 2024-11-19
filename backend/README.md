# Backend

Este proyecto es parte de la prueba prácitca para medir conocimientos en el stack Angular - NestJS - TypeORM

La versión de NestJS CLI es 10.4.5.

# Preparacion de ambiente

## Docker

Se utiliza docker para proveer una base de datos y un administrador de BDD. 

Necesita tener una versión de Docker (Desktop) para ejecutar los contenedores.

Para iniciar los contenedores llame a `docker compose up`

La base de datos está publicada en `localhost:5432`, mientras que el administrador web está publicado en `http://localhost:8098/`

## Base de datos

Ingrese al administrador web con los siguientes parametros:
* Motor de base de datos: Postgres SQL
* Servidor: postgres
* Usuario: postgres
* Contraseña: postgres
* Base de datos: postgres

En la funcion `Comando SQL` ingrese los contenido del archivo `./tablas.sql` y ejecutelos

## Ejecución en desarrollo

Utilize `npm run start:dev` las APIS estaran publicadas en `http://localhost:3002/`. 

