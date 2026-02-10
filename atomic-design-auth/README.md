# Proyecto: Sistema de Autenticación Pro con Atomic Design

Este proyecto demuestra una arquitectura de frontend robusta utilizando **React + TypeScript**, cumpliendo con los estándares de **Smart Code** y **Smart Branching**.

## 🚀 Cómo ejecutar el proyecto
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Ejecutar en desarrollo: `npm run dev`.
4. Ejecutar pruebas: `npm run test`.

## 🛠️ Arquitectura: Atomic Design
Se utilizó la metodología de diseño atómico para garantizar componentes reutilizables y escalables:
- **Átomos**: Componentes base (Button, Input).
- **Moléculas**: Combinaciones (InputField).
- **Organismos**: Lógica compleja (LoginForm, RegisterForm).
- **Templates/Pages**: Estructura y rutas.

## 🧠 Smart Code & Persistencia
- **Gestión de Estado**: Se implementó un `AuthContext` para el manejo global del usuario.
- **Persistencia**: Se utiliza **LocalStorage** para simular una base de datos real. El registro de nuevos usuarios persiste tras recargar la página.
- **Credenciales de Prueba**:
  - Email: `test@ejemplo.com` | Pass: `123456`
  - *O registra tu propio usuario en la app.*

## 🌳 Smart Branching
Se aplicó un flujo de trabajo basado en ramas de corta duración (`feature/`) integradas hacia la rama principal (`main`) mediante procesos de limpieza de historial.