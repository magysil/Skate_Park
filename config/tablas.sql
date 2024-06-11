CREATE DATABASE skatepark;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE skaters (
	id SERIAL Primary key, 
	email VARCHAR(50) NOT NULL unique, 
	nombre VARCHAR(25) NOT NULL, 
	password text NOT NULL, 
	anos_experiencia INT NOT NULL, 
	especialidad VARCHAR(50) NOT NULL, 
	foto VARCHAR(255) NOT NULL, 
	estado BOOLEAN NOT NULL,
	rol VARCHAR (25) NOT NULL DEFAULT 'Usuario' 
);

/* Añadir Usuario con rol administrador en la base de datos*/
INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado, rol)
VALUES (
    'admin@gmail.com', 
    'AdminUser', 
    crypt('securepassword', gen_salt('bf')), 
    10, 
    'Manager', 
    'admin_photo_url', 
    TRUE, 
    'Administrador'
);

