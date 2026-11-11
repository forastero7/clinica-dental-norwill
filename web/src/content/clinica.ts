/**
 * Contenido editable de la landing de Norwil Consultorio Dental.
 *
 * Todo lo que diga "PENDIENTE" debe confirmarse con el cliente antes de publicar:
 * número de WhatsApp, dirección, datos del doctor, RUC y horarios.
 */

export const clinica = {
  nombre: "Norwil",
  nombreCompleto: "Norwil Consultorio Dental",
  eslogan: "Odontología cercana, sin apuros",
  descripcion:
    "Consultorio dental en Lima con atención personalizada: un solo especialista te acompaña desde la evaluación hasta el control final. Presupuesto por escrito y citas por WhatsApp.",

  // PENDIENTE: número real (formato internacional sin "+" ni espacios). Aún no hay WhatsApp Business;
  // un número de WhatsApp normal funciona igual con los enlaces wa.me.
  whatsapp: "51900000000",
  telefonoVisible: "+51 900 000 000",
  email: "contacto@clinicanorwill.pe", // PENDIENTE

  // PENDIENTE: dirección real. Mientras esté vacío mapsUrl, el enlace al mapa no se muestra.
  direccion: {
    calle: "Av. Ejemplo 123, Of. 201",
    distrito: "Distrito",
    ciudad: "Lima",
    pais: "PE",
    referencia: "Frente al parque principal",
  },
  mapsUrl: "",

  razonSocial: "PENDIENTE S.A.C.", // PENDIENTE
  ruc: "20000000000", // PENDIENTE

  sitioUrl: "https://clinicanorwill.pe", // PENDIENTE: dominio definitivo
} as const;

export const horario = [
  { dias: "Lunes a viernes", horas: "9:00 a. m. – 1:00 p. m. · 3:00 p. m. – 8:00 p. m." },
  { dias: "Sábados", horas: "9:00 a. m. – 2:00 p. m." },
  { dias: "Domingos y feriados", horas: "Cerrado (urgencias por WhatsApp)" },
] as const;

/** Versión corta para la portada. */
export const horarioResumen = "Lun a sáb · desde las 9:00 a. m.";

/** Para datos estructurados (schema.org). Mantener en sincronía con `horario`. */
export const horarioSchema = [
  { dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], abre: "09:00", cierra: "13:00" },
  { dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], abre: "15:00", cierra: "20:00" },
  { dias: ["Saturday"], abre: "09:00", cierra: "14:00" },
];

export const doctor = {
  nombre: "Dr. Nombre Apellido", // PENDIENTE
  titulo: "Cirujano dentista",
  cop: "00000", // PENDIENTE: número de colegiatura COP
  especialidades: ["Odontología general", "Estética dental", "Rehabilitación oral"], // PENDIENTE
  bio: [
    "Atiendo personalmente a cada paciente, desde la primera evaluación hasta el último control. Así conozco tu historia, tus miedos y tus objetivos, y no tienes que repetir lo mismo a alguien distinto en cada cita.",
    "Antes de empezar cualquier tratamiento te explico qué encontré, qué opciones tienes y cuánto costará cada una. Sin sorpresas al final.",
  ], // PENDIENTE: texto definitivo
};

export type Tratamiento = {
  id: string;
  nombre: string;
  categoria: "Prevención" | "Restauración" | "Estética" | "Especialidades";
  descripcion: string;
  duracion: string;
};

/** PENDIENTE: validar la lista de tratamientos con el doctor. */
export const tratamientos: Tratamiento[] = [
  {
    id: "evaluacion",
    nombre: "Consulta y evaluación",
    categoria: "Prevención",
    descripcion: "Revisión completa, diagnóstico y plan de tratamiento con presupuesto por escrito.",
    duracion: "30 min",
  },
  {
    id: "limpieza",
    nombre: "Limpieza dental (profilaxis)",
    categoria: "Prevención",
    descripcion: "Retiro de sarro y placa con ultrasonido, pulido y aplicación de flúor.",
    duracion: "45 min",
  },
  {
    id: "radiografia",
    nombre: "Radiografía periapical",
    categoria: "Prevención",
    descripcion: "Imagen de una o dos piezas para detectar caries, infecciones o fracturas.",
    duracion: "10 min",
  },
  {
    id: "resina",
    nombre: "Curación con resina",
    categoria: "Restauración",
    descripcion: "Restauración del color del diente para caries pequeñas y medianas.",
    duracion: "45 min",
  },
  {
    id: "endodoncia",
    nombre: "Endodoncia",
    categoria: "Restauración",
    descripcion: "Tratamiento de conducto para salvar un diente con el nervio dañado.",
    duracion: "1–2 sesiones",
  },
  {
    id: "extraccion",
    nombre: "Extracción simple",
    categoria: "Restauración",
    descripcion: "Extracción con anestesia local e indicaciones para una recuperación tranquila.",
    duracion: "30 min",
  },
  {
    id: "blanqueamiento",
    nombre: "Blanqueamiento dental",
    categoria: "Estética",
    descripcion: "Aclarado en consultorio con protección de encías, en una sola sesión.",
    duracion: "90 min",
  },
  {
    id: "carillas",
    nombre: "Carillas de resina",
    categoria: "Estética",
    descripcion: "Corrigen forma, color y pequeños espacios sin desgastar de más el diente.",
    duracion: "Según caso",
  },
  {
    id: "ortodoncia",
    nombre: "Ortodoncia con brackets",
    categoria: "Especialidades",
    descripcion: "Brackets metálicos o estéticos con controles mensuales. Facilidades de pago.",
    duracion: "12–24 meses",
  },
  {
    id: "implante",
    nombre: "Implante dental",
    categoria: "Especialidades",
    descripcion: "Reemplazo fijo de una pieza perdida con implante de titanio y corona.",
    duracion: "3–6 meses",
  },
  {
    id: "corona",
    nombre: "Corona dental",
    categoria: "Especialidades",
    descripcion: "Funda de porcelana o zirconio para proteger un diente debilitado.",
    duracion: "2 sesiones",
  },
  {
    id: "odontopediatria",
    nombre: "Consulta para niños",
    categoria: "Especialidades",
    descripcion: "Primera visita amable, sellantes y flúor para cuidar los dientes desde pequeños.",
    duracion: "30 min",
  },
];

export const preguntas = [
  {
    p: "¿Cuánto cuesta mi tratamiento?",
    r: "Depende de lo que encontremos en la evaluación. Antes de empezar te damos el presupuesto por escrito y no cobramos nada que no hayas aprobado. Si quieres una idea previa, escríbenos por WhatsApp.",
  },
  {
    p: "¿Cómo reservo una cita?",
    r: "Escríbenos por WhatsApp o completa el formulario de esta página. Te respondemos con los horarios disponibles y confirmamos tu cita por el mismo medio.",
  },
  {
    p: "¿Qué medios de pago aceptan?",
    r: "Efectivo, Yape, Plin y tarjetas de débito o crédito. Para tratamientos largos como ortodoncia ofrecemos pagos en cuotas.", // PENDIENTE: confirmar
  },
  {
    p: "¿Atienden urgencias?",
    r: "Sí. Si tienes dolor, inflamación o se rompió un diente, escríbenos por WhatsApp y te damos el primer espacio disponible.",
  },
  {
    p: "¿Puedo reprogramar o cancelar?",
    r: "Claro. Avísanos por WhatsApp con al menos 24 horas de anticipación para ofrecer ese horario a otro paciente.",
  },
  {
    p: "¿Atienden a niños?",
    r: "Sí, desde los 3 años. La primera visita es tranquila y sin procedimientos invasivos para que se familiaricen con el consultorio.",
  },
];
