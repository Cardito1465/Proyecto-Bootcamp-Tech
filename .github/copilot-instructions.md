# Instrucciones para agentes (Copilot / IA)

Breve: este repositorio es un sitio web estático sobre energía solar. Las modificaciones deben respetar la estructura simple de HTML/CSS/recursos y las convenciones de carpetas.

- **Arquitectura (big picture):** sitio estático sin backend. Archivos principales:
  - `main.html` — entrada única de la página.
  - `style.css` — estilos globales del sitio.
  - `Recursos/` — imágenes, videos y activos gráficos referenciados desde `main.html`.
  - (convención mencionada en `README.md`) carpetas lógicas: `Recursos`, `Lógica` (JS), `Diseño` (CSS).

- **Propósito de cambios típicos:**
  - Cambios de diseño → editar `style.css` y probar en navegador.
  - Contenido o estructura HTML → editar `main.html` conservando clases/IDs existentes.
  - Imágenes/medios → añadir a `Recursos/` y usar rutas relativas desde `main.html`.

- **Flujo de trabajo de desarrollo (detectable / reproducible):**
  - No hay builder ni tests automáticos detectables en el repo.
  - Para previsualizar localmente, sirve el repositorio como contenido estático. Comando simple recomendado:

```
cd /workspaces/Proyecto-Bootcamp-Tech
python -m http.server 8000
```

  - También se puede abrir `main.html` directamente en el navegador para cambios rápidos.

- **Convenciones del proyecto (observables):**
  - Mantener estructura de carpetas: `Recursos` para activos; si agrega JS, usar `Lógica`.
  - Evitar agregar herramientas de build sin coordinación previa (ninguna configuración detectada).
  - Respeta los roles listados en `README.md` si se menciona en mensajes de commit o PR (son referencias del equipo).

- **Patrones y ejemplos en el código:**
  - Referencias a imágenes suelen ser rutas relativas dentro de `Recursos/` — usa rutas relativas coherentes.
  - Estilos globales centralizados en `style.css`: evita duplicar reglas en archivos nuevos.

- **Integraciones y dependencias externas:**
  - No se detectaron dependencias empaquetadas (no hay `package.json`, `requirements.txt`, ni configuraciones CI).
  - Si se propone añadir dependencias o CI (GitHub Actions), documentar propósito y añadir archivos de configuración correspondientes.

- **Qué NO cambiar sin avisar:**
  - No introduces herramientas de compilación ni pipelines en PRs pequeños sin descripción clara.
  - No cambies el nombre de `Recursos` ni `main.html` sin migrar referencias.

- **Cómo redactar un change/PR desde la IA:**
  - Título claro: tipo de cambio + archivo principal (ej. "Update: Mejoras de accesibilidad en `main.html`").
  - Descripción: resuma qué se cambió, por qué, y cómo probar manualmente (ej.: abrir `main.html` o iniciar `python -m http.server`).
  - Incluye paths modificados y ejemplos de comandos para probar localmente.

Si alguna sección está incompleta o quieres que añada ejemplos concretos (por ejemplo fragmentos de `main.html`/`style.css` actualizados), indícame qué prefieres y lo ajusto.
