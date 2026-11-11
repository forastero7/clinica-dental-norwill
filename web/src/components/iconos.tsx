// Set de íconos de trazo uniforme (1.8 px, extremos redondeados) para toda la web.
type P = { className?: string };

function Trazo({ className, children }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconoWhatsapp({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

export function IconoReloj(p: P) {
  return (
    <Trazo {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Trazo>
  );
}

export function IconoPin(p: P) {
  return (
    <Trazo {...p}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Trazo>
  );
}

export function IconoCheck(p: P) {
  return (
    <Trazo {...p}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Trazo>
  );
}

export function IconoMenu(p: P) {
  return (
    <Trazo {...p}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Trazo>
  );
}

export function IconoCerrar(p: P) {
  return (
    <Trazo {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Trazo>
  );
}

export function IconoUsuario(p: P) {
  return (
    <Trazo {...p}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </Trazo>
  );
}

export function IconoDocumento(p: P) {
  return (
    <Trazo {...p}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 12h5M10 16h5" />
    </Trazo>
  );
}

export function IconoEscudo(p: P) {
  return (
    <Trazo {...p}>
      <path d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z" />
      <path d="M9 12l2 2 4-4" />
    </Trazo>
  );
}

export function IconoCalendario(p: P) {
  return (
    <Trazo {...p}>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </Trazo>
  );
}

export function IconoFlecha(p: P) {
  return (
    <Trazo {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Trazo>
  );
}

export function IconoMas(p: P) {
  return (
    <Trazo {...p}>
      <path d="M12 5v14M5 12h14" />
    </Trazo>
  );
}

export function IconoCorreo(p: P) {
  return (
    <Trazo {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </Trazo>
  );
}

export function IconoTelefono(p: P) {
  return (
    <Trazo {...p}>
      <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </Trazo>
  );
}
