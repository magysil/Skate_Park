CREATE DATABASE skatepark;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE skaters (
	id SERIAL Primary key, 
	email VARCHAR(50) NOT NULL, 
	nombre VARCHAR(25) NOT NULL, 
	text NOT NULL, 
	anos_experiencia INT NOT NULL, 
	especialidad VARCHAR(50) NOT NULL, 
	foto VARCHAR(255) NOT NULL, 
	estado BOOLEAN NOT NULL
);
--------------------------------------------------------------------------------------------------------------------------------------------------
/*Ejemplo de .env

PORT = ****

DB_USER=****
DB_HOST=****
DB_DATABASE=****
DB_PASSWORD=****
DB_PORT=****

SECRET_KEY= ****/