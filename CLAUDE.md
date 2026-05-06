# PRA — Programación Avanzada

**Profesor:** Juan Jesús Izquierdo · Universitat Politècnica de València, Campus d'Alcoi  
**Asignatura:** OOP avanzado con C++, tablas hash, árboles, grafos, algoritmos voraces, programación dinámica

## Proyecto

Web estática para GitHub Pages con ejercicios interactivos para estudiantes.  
Tres archivos: `index.html`, `style.css`, `script.js`. Sin build tools, sin npm.

### Secciones y temáticas visuales

| Sección | Tema visual | Colores clave | Fuente |
|---|---|---|---|
| Tablas Hash | Matrix / terminal | Verde bosque `#005c13`, fondo `#f0fff4` | Share Tech Mono |
| Árboles | Donkey Kong jungle | Ámbar `#b35c00`, fondo `#fffde7` | Press Start 2P |
| Grafos | Blueprint / constelaciones | Índigo `#1a237e`, fondo `#e8eaf6` | Orbitron |

Navegación por pestañas (tab nav), hamburguesa en móvil. Header oscuro (branding), contenido claro.  
**Tema claro y fuente base 18px** — pensado para proyección en clase.

## Reglas

- Rutas siempre relativas, nunca absolutas (GitHub Pages corre en subdirectorio)
- Los ejercicios futuros van en `exercises/{tema}-{NN}.html` y se insertan en `.exercise-grid`
- Estructura de tarjeta: `<article class="exercise-card" data-difficulty="easy|medium|hard">`
