# GUIA5
Este proyecto corresponde a la construcción del Back-end del sistema de gestión de paquetes. El objetivo es levantar la infraestructura del servidor, modelar la base de datos y construir una API REST funcional que actúe como la columna vertebral para toda la aplicación.

# Objetivo

Diseñar y desarrollar un servidor con Node.js y Express.js, conectado a una base de datos MongoDB, que permita gestionar la información de paquetes y repartidores mediante endpoints REST.

# Tecnologías Utilizadas

Entorno: Node.js

Framework: Express.js

Base de Datos: MongoDB (con Mongoose)

Pruebas de API: Postman o Insomnia

Dependencias:

## Estructura del Proyecto

```
/backend
│-- /controllers     # Lógica de negocio
│-- /models          # Esquemas de Mongoose
│-- /routes          # Definición de rutas de la API
│-- index.js         # Archivo principal del servidor
│-- .env             # Variables de entorno (no subir a Git)
│-- .gitignore
```

---

## Configuración del Entorno

1. **Inicializa el proyecto:**
   ```bash
   npm init -y
   ```
2. **Instala las dependencias listadas.**
3. **Crea el archivo `.env`** en la raíz del proyecto con tus credenciales (usa `.env.example` como referencia).
4. **Ejecuta el servidor con nodemon:**
   ```bash
   npx nodemon index.js
   ```

---

## Modelado de la Base de Datos

### Paquete (`paquete.model.js`)
```js
{
  numeroGuia: String, // único y requerido
  remitente: { nombre, direccion, telefono },
  destinatario: { nombre, direccion, telefono },
  dimensiones: { alto, ancho, largo, peso },
  estado: { type: String, enum: ['En bodega', 'En ruta', 'Entregado', 'Incidencia'], default: 'En bodega' },
  repartidorAsignado: ObjectId, // referencia a Repartidor
  historialUbicaciones: [{ lat, lon, fecha }]
}
```

### Repartidor (`repartidor.model.js`)
```js
{
  nombre: String,
  identificacion: String, // único y requerido
  ubicacionActual: { type: { type: String, enum: ['Point'] }, coordinates: [Number, Number] }
}
```

---

## API REST

### Endpoints de Paquetes
| Método | Ruta | Descripción |
|:--:|:--|:--|
| `POST` | `/api/paquetes` | Crear un nuevo paquete |
| `GET` | `/api/paquetes` | Listar todos los paquetes |
| `GET` | `/api/paquetes/:id` | Consultar un paquete por ID o número de guía |
| `PUT` | `/api/paquetes/:id` | Actualizar el estado de un paquete |

### Endpoints de Repartidores
| Método | Ruta | Descripción |
|:--:|:--|:--|
| `GET` | `/api/repartidores/ubicaciones` | Obtener nombre y ubicación actual de todos los repartidores |

---

## Pruebas de la API

Las pruebas se realizaron con **Postman** o **Insomnia**.  
Se verificó el correcto funcionamiento de los siguientes endpoints:

1. **POST /api/paquetes** → Creación de un nuevo paquete.  
2. **GET /api/paquetes** → Visualización de la lista de paquetes.  
3. **PUT /api/paquetes/:id** → Actualización del estado de un paquete.  
4. **GET /api/repartidores/ubicaciones** → Consulta de ubicaciones actuales.

**Video de Demostración:** [Enlace al video de prueba de la API (máx. 3 min)](https://)

---

## Variables de Entorno

Crea un archivo `.env` con las siguientes variables (usa `.env.example` como guía):

```
PORT=5000
MONGO_URI=tu_cadena_de_conexion_mongodb
```

El archivo `.env.example` **no debe contener valores reales**, solo las claves.

---

## Entregables

- Código fuente completo del back-end.  
- Archivo `.env.example` incluido.  
- Colección exportada de Postman o Insomnia.  
- Enlace al video demostrativo de los endpoints.

---

## Autor

**Desarrollado por:** Jeslly Tellez  
**Fecha:** Noviembre 2025  
**Repositorio:** [https://github.com/tuusuario/tu-repo-backend](https://github.com/tuusuario/tu-repo-backend)
