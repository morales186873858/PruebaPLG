Proyecto Angular y .NET

Este proyecto es una aplicación web desarrollada con Angular para el frontend y .NET para el backend. La aplicación está diseñada para manejar la gestión de clientes y sus datos asociados.

✨ Características Principales

Frontend (Angular)

🌟 Interfaz moderna y responsiva.

🔎 Manejo de formularios reactivos.

🔄 Consumo de APIs REST.

Backend (.NET)

🔄 Implementación de endpoints RESTful.

🏛️ Conexión a base de datos MariaDB mediante Entity Framework.

🌐 Documentación interactiva con Swagger.

🔧 Tecnologías Utilizadas

Frontend

Angular

TypeScript

Bootstrap (opcional para estilos)

Backend

.NET Core

Entity Framework Core

MariaDB

Swagger

🌐 Configuración del Proyecto

🌍 Prerrequisitos

Node.js y npm (para Angular).

.NET SDK instalado en el sistema.

MariaDB configurado.

🔄 Clonar el Repositorio
git clone https://github.com/usuario/proyecto-angular-dotnet.git
cd proyecto-angular-dotnet
🔧 Configuración del Backend

Configurar la base de datos en appsettings.json:
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=clientes;User=root;Password=1234;"
  }
}

Restaurar dependencias e iniciar el servidor backend:

cd backendAPI
 dotnet restore
 dotnet run

Abrir Swagger para verificar los endpoints disponibles: http://localhost:5000/swagger

🕹️ Configuración del Frontend

Instalar dependencias:
cd frontend
npm install

Configurar la URL de la API en environment.ts:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};

Iniciar el servidor de desarrollo:

ng serve

Acceder a la aplicación: http://localhost:4200

⚙️ Uso

Endpoints del Backend

GET /api/clients - Obtener lista de clientes (paginada).

Funcionalidades del Frontend

Tabla con la lista de clientes.


