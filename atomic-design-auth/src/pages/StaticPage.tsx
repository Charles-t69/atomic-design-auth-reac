// src/pages/StaticPage.tsx
import { MainLayout } from '../components/templates/MainLayout';

export const StaticPage = () => {
  const sections = [
    { title: '⚛️ Átomos', desc: 'Componentes indivisibles como botones, inputs y etiquetas.', color: '#2563eb' },
    { title: '🧪 Moléculas', desc: 'Grupos de átomos que funcionan juntos (ej. un input con su label).', color: '#7c3aed' },
    { title: '🦠 Organismos', desc: 'Secciones complejas de la interfaz como el formulario de Login.', color: '#db2777' },
    { title: '📄 Templates', desc: 'Estructuras de página que definen el layout sin contenido real.', color: '#ea580c' }
  ];

  return (
    <MainLayout>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>Guía de Atomic Design</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
            Arquitectura de componentes escalables y mantenibles.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {sections.map((item) => (
            <div key={item.title} className="card" style={{ maxWidth: 'none', borderTop: `5px solid ${item.color}` }}>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--secondary-color)', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <article className="card" style={{ maxWidth: 'none', marginTop: '3rem' }}>
          <h2>¿Por qué Atomic Design en esta Auditoría?</h2>
          <p>
            Al separar la interfaz en piezas pequeñas, garantizamos que el código sea <strong>Smart Code</strong>: 
            fácil de probar, reutilizable y con una jerarquía clara que facilita la detección de errores.
          </p>
        </article>
      </div>
    </MainLayout>
  );
};