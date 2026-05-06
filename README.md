# PRA — Programación Avanzada

Web estática con ejercicios interactivos para la asignatura **Programación Avanzada** de la Universitat Politècnica de València, Campus d'Alcoi.

**Profesor:** Juan Jesús Izquierdo Domenech

---

## Estructura del proyecto

```
PRA-Excercises/
├── index.html          # Página principal (tab nav + secciones)
├── style.css           # Estilos y temas visuales por sección
├── script.js           # Lógica de navegación y hamburguesa móvil
└── exercises/          # Ejercicios individuales (a crear)
    └── {tema}-{NN}.html
```

Sin build tools ni dependencias npm. Tres archivos raíz, listo para GitHub Pages.

## Secciones

| Sección | Tema visual | Colores | Fuente |
|---|---|---|---|
| Tablas Hash | Matrix / terminal | Verde `#005c13` | Share Tech Mono |
| Árboles | Donkey Kong jungle | Ámbar `#b35c00` | Press Start 2P |
| Grafos | Blueprint / constelaciones | Índigo `#1a237e` | Orbitron |

## Añadir ejercicios

1. Crear el archivo en `exercises/{tema}-{NN}.html` (ej. `exercises/hash-01.html`).
2. Insertar la tarjeta en la sección correspondiente de `index.html`:

```html
<article class="exercise-card" data-difficulty="easy|medium|hard">
  <!-- contenido del ejercicio -->
</article>
```

Las tarjetas van dentro del `<div class="exercise-grid">` de cada sección.

## Despliegue

El sitio se publica en **GitHub Pages** desde la rama `main`. Todas las rutas deben ser relativas (el repo corre en un subdirectorio, no en la raíz del dominio).

## Temario

OOP avanzado con C++, tablas hash, árboles, grafos, algoritmos voraces y programación dinámica.
