# App web para catalogo de juegos

## Tecnologías

- **Next.js 15** — App Router, Server Components, Route Handlers
- **TypeScript** — Tipado estático
- **Tailwind CSS** — Estilos web
- **IGDB API** — Base de datos de videojuegos

## Arquitectura

La aplicación sigue un patrón BFF (Backend for Frontend):

```
Cliente → Server Component → Route Handler (/api/igdb/games) → IGDB API
```

## Requisitos

- Node.js 20+
- Cuenta de desarrollador en [dev.twitch.tv](https://dev.twitch.tv) para obtener `CLIENT_ID` y `CLIENT_SECRET`

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
IGDB_CLIENT_ID=tu_client_id
IGDB_CLIENT_SECRET=tu_client_secret
```

Para poder obtener tu id de cliente y tu secret necesitas registrarte en la web de desarrolladores de twitch en: [https://dev.twitch.tv/](https://dev.twitch.tv/)

## Instalación y ejecución local

1. Clona el repositorio

```bash
git clone https://github.com/lsprz2773/igdb-api-frontend.git
cd igdb-api-frontend
```

2. Instala las dependencias

```bash
npm install
```

3. Configura las variables de entorno

```bash
cp .env.example .env.local
# Edita .env.local con tus credenciales
```

4. Inicia el servidor de desarrollo

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx              # Página principal con listado de juegos
│   ├── layout.tsx            # Layout raíz
│   └── api/
│       └── igdb/
│           └── games/
│               └── route.ts  # BFF — Route Handler hacia IGDB
├── components/
│   ├──game-card
│   │   └──game.card.tsx      # Tarjeta individual de juego
│   ├──game-grid.tsx
│   │   └──game.grid.tsx      # Grid de juegos
│   └──ui
│       └──pagination.tsx     # Paginación
│ 
├────lib
│    ├──get.IDGB.token.ts    # Obtencion y actualizacion de token
│    └──get.img.IGDB.ts      # Helper para rutas de imagenes
│ 
├────services
│    └──igdb.service.tsx     # Consultas a route handlers
│
└── types/
    ├──api    
    │   ├──api.respoonse.ts    # Interfaces necesarias para la respuesta de API
    │   └──game.props.ts       # Props con atributos necesarios para gamecards
    └──twitch      
        └──auth.twitch.ts      # Interfaz de la respuesta de obtencion de token
```