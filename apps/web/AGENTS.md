# AMON Platform — Web (Angular) — AGENTS.md
## Estado actual
- Fase 2 (Tailwind + PostCSS) completada ✅
- App levanta en dev sin errores ✅
- Config estable, sin mezcla Tailwind v3/v4 ✅

## Principios de trabajo (NO romper)
1. Un solo origen de verdad para PostCSS: `postcss.config.js` (NO usar `.postcssrc.json`).
2. Tailwind v3 estable: `tailwindcss@3.4.x`.
3. `src/styles.css` contiene SOLO:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
   (NO usar `@import "tailwindcss";` ni importar archivos extras)
4. NO commitear `node_modules/`.
5. NO crear proyectos nuevos dentro del repo (sin “mezclar stacks”).
6. Node recomendado: 20 LTS (evitar Node 24 para estabilidad).

## Estructura del repo (web)
- `apps/web/` contiene la app Angular standalone.
- Futuro: Firebase (Auth/Firestore/Functions) se integra sin duplicar carpetas.

## Checklist Fase 2 (validación)
- `npm start` levanta ✅
- Sin errores de PostCSS/JSON parse ✅
- Tailwind compila ✅

## Próxima fase
Fase 3: Firebase end-to-end
- Auth (Email/Password)
- Firestore (multi-tenant)
- Functions (createOrder)
- Emuladores opcionales (Java solo si se usan)
