// src/pages/StaticPage.tsx
import { useEffect, useState } from 'react';
import { MainLayout } from '../components/templates/MainLayout';
import { fetchFolders } from '../services/folderService';

// Definimos la interfaz para TypeScript según el Dominio del Backend
interface Folder {
  id: string;
  name: string;
  createdAt: string;
}

export const StaticPage = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  // Hook para alimentar el frontend desde el backend manager
  useEffect(() => {
    fetchFolders()
      .then((data: Folder[]) => {
        setFolders(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        console.error("Error al consumir el API Manager:", err);
        setLoading(false);
      });
  }, []);

  const sections = [
    { title: '⚛️ Átomos', desc: 'Componentes indivisibles como botones y etiquetas.', color: '#2563eb' },
    { title: '🧪 Moléculas', desc: 'Grupos de átomos (ej. input + label).', color: '#7c3aed' },
    { title: '🦠 Organismos', desc: 'Secciones complejas como el Login.', color: '#db2777' },
    { title: '📄 Templates', desc: 'Estructuras de layout sin contenido real.', color: '#ea580c' }
  ];

  return (
    <MainLayout>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>Guía de Atomic Design</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
            Arquitectura de componentes escalables alimentada por un Backend Hexagonal.
          </p>
        </header>

        {/* SECCIÓN FUNCIONAL: Consumo de Backend Manager */}
        <section className="card" style={{ maxWidth: 'none', marginBottom: '3rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 style={{ color: '#0f172a' }}>📂 Gestión de Carpetas (Datos desde Backend -mngr)</h2>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            Esta sección consume el endpoint <code>/folders</code> validado por <strong>OpenAPI (OAS)</strong>.
          </p>
          
          {loading ? (
            <p>Conectando con el Manager...</p>
          ) : (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {folders.map(folder => (
                <div key={folder.id} style={{ 
                  padding: '10px 20px', 
                  background: 'white', 
                  borderRadius: '8px', 
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #cbd5e1'
                }}>
                  <strong>{folder.name}</strong>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>ID: {folder.id}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {sections.map((item) => (
            <div key={item.title} className="card" style={{ maxWidth: 'none', borderTop: `5px solid ${item.color}` }}>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--secondary-color)', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <article className="card" style={{ maxWidth: 'none', marginTop: '3rem' }}>
          <h2>Arquitectura Hexagonal + OAS</h2>
          <p>
            El frontend ahora es funcional: consume un <strong>Manager en TypeScript</strong> que sigue una estructura de capas (Domain, Application, Infrastructure). 
            La comunicación está regida por una especificación <strong>OpenAPI</strong> para garantizar la consistencia de los datos.
          </p>
        </article>
      </div>
    </MainLayout>
  );
};