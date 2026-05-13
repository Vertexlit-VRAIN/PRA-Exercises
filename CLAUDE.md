# PRA — Programación Avanzada

**Profesor:** Juan Jesús Izquierdo · Universitat Politècnica de València, Campus d'Alcoi  
**Asignatura:** OOP avanzado con C++, tablas hash, árboles, grafos, algoritmos voraces, programación dinámica

## Proyecto

Web estática para GitHub Pages con ejercicios interactivos para estudiantes.  
Tres archivos: `index.html`, `style.css`, `script.js`. Sin build tools, sin npm.

### Estructura de navegación

Dos tabs principales → sub-tabs por tema:

```
[ ◈ TADs no lineales ]  →  [ ⬡ Tablas Hash ] [ 🍌 Árboles ] [ ✦ Grafos ]
[ ⚡ Algoritmos       ]  →  [ ♟ Voraces     ] [ ⊞ P. Dinámica ]
```

### Temáticas visuales

| Sub-sección | Tema visual | Color acento | Fondo |
|---|---|---|---|
| Tablas Hash | Matrix / terminal | `#1b5e20` | `#f7fcf8` |
| Árboles | Donkey Kong jungle | `#b35c00` | `#fdfdf5` |
| Grafos | Blueprint / constelaciones | `#1a237e` | `#f4f5fb` |
| Voraces | Ajedrez / decisión óptima | `#c62828` | `#fdf0f0` |
| P. Dinámica | Tabla de subproblemas | `#004d40` | `#e0f2f1` |

Navegación por pestañas con sub-tabs, hamburguesa en móvil. Header oscuro (branding), contenido claro.  
**Tema claro y fuente base 18px** — pensado para proyección en clase.

## Reglas

- Rutas siempre relativas, nunca absolutas (GitHub Pages corre en subdirectorio)
- Los ejercicios van en `exercises/{tema}-{NN}.html` y se insertan en el `.exercise-grid` del sub-panel correspondiente
- Temas válidos: `hash`, `arboles`, `grafos`, `voraces`, `dinamica`
- Stylesheet de ejercicios: `exercises/hash.css`, `exercises/arboles.css`, `exercises/grafos.css`, `exercises/algoritmos.css`
- Estructura de tarjeta: `<article class="exercise-card" data-difficulty="easy|medium|hard">`
