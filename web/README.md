# Web — Norwil Consultorio Dental

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
| Colores, sombras y utilidades de marca | variables `--color-*` y `@utility` en `src/app/globals.css` |
| Logotipo (versión web con fondo transparente) | `src/assets/marca/` — original en `docs/marca/` |
| Secciones de la página | `src/components/` |
| Política de privacidad y Libro de Reclamaciones | `src/app/politica-de-privacidad`, `src/app/libro-de-reclamaciones` |

Busca `PENDIENTE` en el código para ver los datos que falta confirmar.

## Identidad visual

Colores extraídos del logotipo oficial:

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#ADBB2D` | Verde del logo: botones, íconos, fondos destacados (no para texto: contraste 2.1:1) |
| `--color-primary-strong` | `#5C6810` | Verde oscuro para textos y enlaces (6.1:1, AA) |
| `--color-primary-soft` | `#F4F7E3` | Fondos suaves con tinte verde |
| `--color-dark` | `#333333` | Títulos, texto principal y texto sobre botones verdes |
| `--color-muted` | `#5F6368` | Párrafos secundarios |
| `--color-light` / `--color-neutral` | `#FAFAFA` / `#F2F2F2` | Secciones y tarjetas secundarias |

Tipografías: Montserrat (títulos) e Inter (textos).

## Reservas

Mientras no exista el sistema de reservas, el formulario y los botones arman un mensaje y abren `wa.me` con el número de `clinica.whatsapp`. Funciona con un número de WhatsApp normal; no hace falta WhatsApp Business para esta etapa.
