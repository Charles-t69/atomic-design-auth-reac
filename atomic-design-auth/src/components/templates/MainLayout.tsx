import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Al cerrar sesión, lo mandamos al login
  };

  return (
    <div className="main-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: '#2c3e50',
        color: 'white'
      }}>
        <strong>Atomic Project</strong>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Hola, {user?.name || 'Usuario'}</span>
          <button 
            onClick={handleLogout}
            style={{ 
              background: '#e74c3c', 
              color: 'white', 
              border: 'none', 
              padding: '0.5rem 1rem', 
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </header>
      
      <main style={{ padding: '2rem', flex: 1 }}>
        {children}
      </main>

      <footer style={{ padding: '1rem', textAlign: 'center', background: '#f8f9fa' }}>
        <p>&copy; 2026 - Auditoría de Sistemas</p>
      </footer>
    </div>
  );
};