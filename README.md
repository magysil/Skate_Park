
# 🛹 Skate Park

Este proyecto es una  plataforma web para gestionar un parque de patinaje, donde  los participantes se
podrán registrar y revisar el estado de su solicitud. Está desarrollada con Node.js, Express, Handlebars y PostgreSQL.

## 📋 Índice

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Estructura de Carpetas](#estructura-de-carpetas)

## 🌟 Características

- 🔒 Autenticación y autorización de usuarios
- 🛹 Gestión de patinadores y sus especialidades
- 🛠️ Panel de administración para gestionar usuarios 

## 💻 Requisitos

- 🟢 Node.js
- 🐘 PostgreSQL

## ⚙️ Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/magysil/Skate_Park.git
   cd Skate_Park
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Crea una base de datos PostgreSQL.
```sql
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
```

4. Configura el archivo `.env` con tus credenciales de base de datos y otros ajustes:
   ```sh
   cp .env.example .env
   ```

## 🚀 Ejecutar la Aplicación

1. Inicia el servidor:
   ```sh
   npm run dev
   ```

2. Abre tu navegador y navega a `http://localhost:3000`.

## 📂 Estructura de Carpetas

- `config`: Archivos de configuración de la base de datos
- `controller`: Lógica de la aplicación y controladores
- `middlewares`: Funciones middleware
- `models`:  Contiene toda la lógica de datos que maneja la aplicación
- `public/assets`: Archivos estáticos (CSS, JavaScript, imágenes)
- `routes`: Definiciones de rutas
- `views`: Plantillas de Handlebars
- `index.js`: Punto de entrada de la aplicación


