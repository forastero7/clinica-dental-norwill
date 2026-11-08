# Brief Técnico – Web y Sistema de Reservas para Clínica Dental

_Versión: 2026-11-08_

## Resumen ejecutivo

Se construirá una web pública con reservas online y un panel de gestión para clínicas dentales en Perú, con WhatsApp como canal central de confirmación. El MVP se enfoca en tres resultados: más pacientes que reservan solos, menos inasistencias y una agenda ordenada por sillón, doctor y sede.

**Objetivos del proyecto**

1. **Captar pacientes digitales:** web rápida, posicionada en Google y con reserva en 3 pasos, disponible 24/7.
2. **Reducir no-shows:** confirmación y recordatorios automáticos por WhatsApp, más seña opcional al reservar.
3. **Estandarizar la atención:** agenda única, historia clínica digital con odontograma FDI y flujos de recepción definidos.
4. **Medir:** ocupación de sillones, conversión de reservas y cancelaciones en un panel de reportes.

**Alcance de este brief:** define funcionalidades, arquitectura, integraciones, requisitos legales peruanos y fases. No incluye presupuesto cerrado; ese se estima tras validar los puntos abiertos del final.

## Benchmark de mercado

Los líderes latinos compiten en precio bajo y WhatsApp; los de EE.UU. en reserva online sincronizada, formularios digitales y pagos. La oportunidad es una web propia de la clínica con la experiencia de reserva de nivel EE.UU. y la operación por WhatsApp que espera el paciente peruano.

| Plataforma | Mercado | Fortalezas clave | Precio de referencia |
|---|---|---|---|
| Doctocliq | Perú y Latam (11 países) | Recordatorios por WhatsApp, citas y pagos online, odontograma, consentimientos firmados, facturación electrónica, CRM | 0 a 49 USD/mes por doctor; sede extra S/ 40/mes en Perú |
| Dentalink | Chile y Latam | Agenda, odontogramas, finanzas y cierre de caja, convenios con laboratorios; confirmación por WhatsApp desde la agenda diaria | Desde 29 USD/mes |
| Reservo | Chile, México, Argentina | Agenda online con confirmación por mail y WhatsApp, ficha con odontograma, pagos, web propia (miReservo) | Plan individual; facturación automática optimizada para Chile |
| NexHealth | EE.UU. | Reserva online sincronizada con el sistema clínico, formularios digitales, lista de espera, recalls, pagos con tarjeta guardada | Paquetes de 250 a 350 USD/mes vía partners |
| CareStack | EE.UU. | Todo-en-uno en la nube: agenda, charting, cobros, portal del paciente, analítica | Desde ~698 USD/mes por dentista |

**Lecciones para este proyecto**

- La reserva online solo funciona si muestra la disponibilidad real; NexHealth captó clientes de competidores cuya reserva no sincronizaba con la agenda.
- Dentalink confirma citas abriendo WhatsApp Web manualmente; automatizarlo con la API oficial es un diferenciador.
- Reservo facturaba bien solo en Chile: la facturación SUNAT debe diseñarse desde el inicio, no adaptarse después.
- Nuevos entrantes como Dentiqa ya combinan agenda, odontograma y chatbot de WhatsApp con IA sobre la API oficial de Meta: es la dirección del mercado.

## Usuarios y roles

Cinco roles con permisos por sede; el acceso a la historia clínica queda restringido al personal clínico.

| Rol | Qué hace en el sistema | Acceso a historia clínica |
|---|---|---|
| Paciente | Reserva, reprograma o cancela, paga la seña, llena su ficha y consentimientos desde el celular | Solo sus citas, comprobantes y documentos firmados |
| Recepción | Gestiona la agenda multi-calendario, confirma por WhatsApp, registra llegada y cobros | No (solo datos de filiación) |
| Odontólogo | Ve su agenda, registra evolución, odontograma, plan de tratamiento y radiografías | Sí, de sus pacientes |
| Administrador de sede | Configura tratamientos, horarios, sillones, precios y usuarios de su sede | Lectura según política |
| Dueño / gerente | Reportes consolidados de todas las sedes, configuración global | No por defecto |

Toda acción sobre la historia clínica queda registrada (quién, qué, cuándo) en un log de auditoría inalterable.

## Alcance funcional por módulos

El MVP cubre los módulos 1 a 4 y 7; el módulo clínico y la facturación entran en la fase 2.

| # | Módulo | Funcionalidades | Fase |
|---|---|---|---|
| 1 | Web pública | Home, tratamientos con precios referenciales, staff, sedes con mapa, testimonios, blog SEO, botón de WhatsApp, libro de reclamaciones virtual | MVP |
| 2 | Reservas online | Flujo en 3 pasos: tratamiento → especialista o primer horario libre → fecha y hora. Disponibilidad real por doctor + sillón + duración del tratamiento. Registro con DNI y celular, sin contraseña (código por WhatsApp). Reprogramar o cancelar con un enlace | MVP |
| 3 | Confirmación y recordatorios | Confirmación inmediata; recordatorio 24 h y 2 h antes con botones Confirmo / Reprogramar; aviso a recepción si no hay respuesta; lista de espera que ofrece el hueco liberado | MVP |
| 4 | Agenda y recepción | Vista día/semana filtrable por sillón, doctor y sede; arrastrar y soltar para reprogramar; estados de cita (reservada, confirmada, llegó, atendida, no asistió); bloqueo de horarios | MVP |
| 5 | Pagos | Seña opcional al reservar (tarjeta, Yape, Plin) y cobro en recepción; reembolso o crédito según política de cancelación | Fase 2 |
| 6 | Módulo clínico | Historia clínica con filiación, anamnesis y evolución; odontograma interactivo FDI; plan de tratamiento con presupuesto; radiografías e imágenes; consentimientos firmados en tablet | Fase 2 |
| 7 | Analítica | Ocupación por sillón y doctor, conversión visita web → reserva, tasa de no-show, cancelaciones, origen del paciente | MVP (básica) |
| 8 | Facturación SUNAT | Boleta y factura electrónica desde el cobro, notas de crédito | Fase 2 |
| 9 | Fidelización | Recall a los 6 meses, recordatorio de controles de ortodoncia, solicitud de reseña en Google | Fase 3 |

## Arquitectura y stack tecnológico

Se mantiene el stack de la ficha original: frontend Next.js, una API única con Clean Architecture y PostgreSQL, desplegados en contenedores. Todo canal (web, panel, WhatsApp) pasa por la misma API, así la agenda nunca tiene dos versiones.

<embed id='.14099' h='fd1cc56c' caption='arquitectura · 3 capas + servicios externos' ref='node/facb1fb1-c51f'/>

Los recordatorios salen de una cola de tareas, no del navegador: si la web cae, los mensajes igual se envían.

| Capa | Tecnología | Por qué |
|---|---|---|
| Frontend | Next.js (React) + Tailwind | Renderizado en servidor para SEO local y carga rápida en celular |
| Backend | NestJS (Node.js) o FastAPI (Python) | Módulos separados por dominio; NestJS si el equipo es JavaScript de punta a punta |
| Base de datos | PostgreSQL | Relacional, transacciones y restricciones de exclusión contra doble reserva |
| Tareas en segundo plano | Redis + BullMQ (o Celery) | Recordatorios programados y reintentos de webhooks |
| Archivos | Almacenamiento compatible S3, cifrado, URLs firmadas | Radiografías y consentimientos sin exponerlos públicamente |
| Infraestructura | Docker; Vercel (frontend) + Render o AWS (API y BD) | Despliegue simple al inicio, migrable a AWS al crecer |
| Observabilidad | Logs centralizados, alertas de errores, monitoreo de uptime | Detectar fallas antes que la recepción |

## Integraciones

Tres integraciones externas, todas por API REST y detrás de una capa propia para poder cambiar de proveedor sin tocar el núcleo.

| Integración | Proveedor propuesto | Uso | Costo de referencia |
|---|---|---|---|
| WhatsApp | WhatsApp Business Platform (Cloud API de Meta), directo o vía BSP | Plantillas de utilidad (confirmación, recordatorio), botones de respuesta, código de acceso | Cobro por mensaje entregado según país del paciente; desde el 1 de octubre de 2026 también se cobran los mensajes de servicio dentro de la ventana de 24 h |
| Pagos | Izipay o Culqi (alternativa: Mercado Pago) | Seña con tarjeta, Yape y Plin; reembolsos | Izipay ~3,99% + IGV en tarjeta y 2,99% en Yape/Plin; Culqi 3,99% + S/ 0,60 |
| Facturación electrónica | Nubefact (PSE/OSE autorizado) | Boletas, facturas y notas de crédito vía API | Desde S/ 70/mes, hasta 500 comprobantes |
| Mapas y reseñas | Google Maps / Business Profile | Ubicación de sedes y enlace de reseña | Bajo o nulo al volumen esperado |
| Calendario personal | Google Calendar (opcional) | Que cada doctor vea su agenda en el celular | Gratis |

**Decisiones de diseño**

- Usar plantillas de categoría utilidad, no marketing, para confirmaciones y recordatorios: son más baratas y Meta las aprueba más rápido.
- Con el cambio de octubre 2026, cada respuesta sale a costo: conviene que el paciente confirme con un botón y que el sistema no envíe mensajes de cortesía innecesarios.
- Los datos de tarjeta nunca pasan por el servidor de la clínica: se usa el checkout o tokenización de la pasarela.

## Requisitos no funcionales y cumplimiento legal

Los datos de salud son datos sensibles en Perú: el sistema debe nacer cumpliendo la Ley 29733 y preparado para la acreditación del MINSA de sistemas de historia clínica electrónica.

**Marco legal aplicable**

| Norma | Qué exige al sistema |
|---|---|
| Ley 29733 y nuevo reglamento (D.S. 016-2024-JUS) | Consentimiento previo, expreso e informado; política de privacidad; derechos ARCO; registro del banco de datos ante la ANPD; notificar incidentes de seguridad en 48 h; cookies y geolocalización cuentan como datos personales |
| Ley 30024 (RENHICE) y Ley 31750 | La información de la historia clínica no puede usarse con fines comerciales; interoperabilidad con el registro nacional |
| RM 164-2025/MINSA – Directiva 373-MINSA/OGTI-2025 | Las IPRESS privadas que usen un sistema de historia clínica electrónica (SIHCE) deben acreditarlo ante el MINSA |
| Código de Protección al Consumidor | Libro de reclamaciones virtual en la web |

**Requisitos técnicos**

- **Seguridad:** HTTPS en todo el sitio, cifrado en reposo de historias clínicas e imágenes, contraseñas con hash, doble factor para personal, roles y permisos por sede, log de auditoría.
- **Consentimiento:** casilla separada (no premarcada) para datos de salud y otra para comunicaciones promocionales por WhatsApp.
- **Respaldo:** copias diarias cifradas, retención mínima de 30 días, prueba de restauración trimestral.
- **Rendimiento:** web pública con LCP menor a 2,5 s en 4G; reserva completada en menos de 60 s en celular.
- **Disponibilidad:** 99,5% mensual; la agenda de recepción debe seguir mostrando el día aunque falle WhatsApp o la pasarela.
- **SEO local:** páginas por tratamiento y por sede, datos estructurados (Dentist, LocalBusiness), sitemap y perfil de Google Business vinculado.
- **Accesibilidad:** contraste AA, botones grandes en móvil, todo en español.

## Modelo de datos principal

La cita es la entidad central: une paciente, doctor, sillón, sede y tratamiento, y de ella cuelgan pagos, mensajes y la atención clínica. Todas las tablas llevan clinica_id para soportar varias clínicas en la misma instancia (multi-tenant).

| Entidad | Campos clave | Relaciones |
|---|---|---|
| Sede | nombre, dirección, horario, zona horaria | tiene sillones y usuarios |
| Sillón (gabinete) | nombre, equipamiento, activo | pertenece a sede |
| Profesional | nombre, especialidad, COP, horarios por sede | atiende tratamientos |
| Tratamiento | nombre, duración (min), precio referencial, requiere seña, equipamiento | ofrecido por profesionales |
| Paciente | DNI/CE, nombres, celular, email, fecha de nacimiento, consentimientos con fecha | tiene citas e historia |
| Cita | inicio, fin, estado, origen (web, WhatsApp, recepción), notas | paciente + profesional + sillón + tratamiento |
| Pago | monto, método, estado, id de pasarela, comprobante | pertenece a cita |
| Mensaje | plantilla, estado de entrega, respuesta, costo | pertenece a cita |
| Historia clínica | anamnesis, alergias, evoluciones firmadas | pertenece a paciente |
| Odontograma | pieza FDI, cara, hallazgo, fecha, profesional | pertenece a historia |
| Archivo clínico | tipo (radiografía, foto, consentimiento), URL cifrada | pertenece a historia |
| Auditoría | usuario, acción, entidad, fecha, IP | transversal |

Para evitar doble reserva, la base de datos impide que dos citas activas se crucen en el mismo sillón o profesional (restricción de exclusión por rango de tiempo en PostgreSQL).

## Fases y entregables

El MVP con reservas y WhatsApp puede estar en producción en unas 8 semanas; las duraciones son estimadas y se confirman tras validar el alcance.

1. **Descubrimiento y diseño (semanas 1–2):** levantamiento de tratamientos, horarios y sillones; mapa del flujo de recepción actual; wireframes y prototipo navegable del flujo de reserva. Entregable: prototipo aprobado.
2. **MVP (semanas 3–8):** web pública, reservas online, agenda de recepción, confirmación y recordatorios por WhatsApp, panel básico de reportes. Entregable: sistema en producción en una sede, con plantillas de WhatsApp aprobadas por Meta.
3. **Piloto (semanas 9–10):** uso real con medición de no-shows y ajustes de UX. Gate: tasa de no-show y conversión medidas contra la línea base.
4. **Fase 2 (semanas 11–18):** seña con Izipay/Culqi, facturación electrónica Nubefact, historia clínica con odontograma FDI, radiografías y consentimientos digitales; inicio del trámite de acreditación SIHCE.
5. **Fase 3 (continuo):** multi-sede, recall y reseñas, chatbot de WhatsApp para reservar desde el chat, reportes avanzados.

## KPIs, riesgos y puntos a validar

**KPIs del proyecto** (las metas se fijan tras medir la línea base en el piloto)

| KPI | Cómo se mide |
|---|---|
| Tasa de no-show | Citas "no asistió" / citas del periodo |
| Conversión de reservas | Reservas completadas / visitas al paso 1 |
| Reservas fuera de horario | % de reservas hechas fuera del horario de recepción |
| Ocupación de sillones | Horas reservadas / horas disponibles por sillón |
| Tasa de confirmación por WhatsApp | Citas confirmadas con botón / recordatorios enviados |
| Costo por mensaje | Gasto Meta + BSP / mensajes entregados |

**Riesgos**

| Riesgo | Mitigación |
|---|---|
| Meta rechaza o reclasifica plantillas | Redactarlas como utilidad pura; tener canal de respaldo por SMS o email |
| Costo de WhatsApp sube con el volumen | Botones de respuesta, sin mensajes de cortesía, panel de costo por mensaje |
| Recepción sigue usando agenda en papel o Excel | Capacitación, migración de citas futuras, piloto en una sola sede |
| Acreditación SIHCE exige requisitos no previstos | Revisar la Directiva 373-MINSA/OGTI-2025 antes de la fase 2 |
| Fuga de datos de salud | Cifrado, mínimos privilegios, auditoría, plan de respuesta a incidentes de 48 h |

**Puntos a validar con el cliente**

- ¿Cuántas sedes, sillones y profesionales hay hoy, y cuántos en 12 meses?
- ¿Qué software o método de agenda usan ahora y qué datos hay que migrar?
- ¿Cobrarán seña? ¿Monto y política de cancelación?
- ¿Ya tienen número de WhatsApp Business verificado en Meta?
- ¿Emiten boletas electrónicas hoy y con qué proveedor?
- ¿Producto a medida para una clínica o SaaS para varias? Cambia arquitectura y costos.
- ¿Presupuesto y fecha objetivo de lanzamiento?

## Fuentes

- Ficha técnica original: "Sistema de Reservas y Gestión para Clínica Dental" (documento del cliente)
- Precios de Doctocliq 2026 – Pabau
- Doctocliq – SoftwareDoIt
- Dentalink – SoftwareDoIt
- Dentalink: notificar cita por WhatsApp
- Reservo – ComparaSoftware
- Reservo – reseña Medesk
- NexHealth Forms
- NexHealth vs RevenueWell
- CareStack – SoftwarePundit
- Dentiqa – Product Hunt
- Nuevos precios WhatsApp API octubre 2026 – Mercately
- Pasarelas de pago Perú 2026 – Guía de Software
- Facturación electrónica: proveedores y costos – KOM
- Nuevo reglamento Ley 29733 – La Cámara
- Incidentes de seguridad en 48 h – LP Derecho
- Ley 31750 – texto consolidado
- Acreditación SIHCE – El Peruano
