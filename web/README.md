# Web — Clínica Dental Norwill

Landing pública hecha con Next.js 16 (App Router) y Tailwind CSS 4. Es totalmente estática.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
npm run lint
```

## Publicación

Cada push a `main` o a `claude/affectionate-carson-gufil2` que toque `web/` compila el sitio como exportación estática (`web/out`) y lo publica en GitHub Pages con `.github/workflows/pages.yml`. La URL es `https://<usuario>.github.io/<repo>/`.

Para probar en local con el mismo prefijo:

```bash
PAGES_BASE_PATH=/clinica-dental-norwill npm run build
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Datos de la clínica, WhatsApp, dirección, horario, doctor, tratamientos y preguntas frecuentes | `src/content/clinica.ts` |
| Colores de marca (paleta provisional) | variables en `src/app/globals.css` |
| Secciones de la página | `src/components/` |
| Política de privacidad y Libro de Reclamaciones | `src/app/politica-de-privacidad`, `src/app/libro-de-reclamaciones` |

Busca `PENDIENTE` en el código para ver los datos que falta confirmar.

## Reservas

Mientras no exista el sistema de reservas, el formulario y los botones arman un mensaje y abren `wa.me` con el número de `clinica.whatsapp`. Funciona con un número de WhatsApp normal; no hace falta WhatsApp Business para esta etapa.
