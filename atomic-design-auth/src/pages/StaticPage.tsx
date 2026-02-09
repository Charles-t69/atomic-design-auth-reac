import { MainLayout } from '../components/templates/MainLayout';


export const StaticPage = () => {
  return (
    <MainLayout>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Metodología Atomic Design</h1>
        <p>Este proyecto implementa una arquitectura basada en componentes modulares:</p>
        
        <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
          <section style={{ borderLeft: '4px solid #3498db', paddingLeft: '1rem' }}>
            <h3>⚛️ Átomos</h3>
            <p>Componentes básicos: botones, inputs, etiquetas.</p>
          </section>
          
          <section style={{ borderLeft: '4px solid #9b59b6', paddingLeft: '1rem' }}>
            <h3>🧪 Moléculas</h3>
            <p>Unión de átomos: un campo de texto con su etiqueta y error.</p>
          </section>
          
          <section style={{ borderLeft: '4px solid #f1c40f', paddingLeft: '1rem' }}>
            <h3>🦠 Organismos</h3>
            <p>Componentes complejos: Formularios de Login y Registro.</p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};