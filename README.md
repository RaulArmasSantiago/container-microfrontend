# Container App

Este proyecto es el contenedor principal que orquesta la integración de microfrontends como `user_list_app` y `user_details_app` utilizando Module Federation.

## 🚀 Tecnologías

- React
- Webpack 5 + Module Federation
- React Router
- Redux

## 🧱 Estructura

- `/src`
  - `App.tsx`: Define rutas para cargar microfrontends.
  - `store.ts`: Define y exporta el estado global (Redux).
- `webpack.config.js`: Configura exposiciones, remotes y compartidos.

## 🔗 Microfrontends Conectados

| Alias            | URL                                  |
| ---------------- | ------------------------------------ |
| user_list_app    | http://localhost:3001/remoteEntry.js |
| user_details_app | http://localhost:3002/remoteEntry.js |

## 🏃‍♂️ Ejecutar

```bash
npm install
npm start
```
