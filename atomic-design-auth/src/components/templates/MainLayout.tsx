interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="main-layout">
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <nav>
          <strong>Mi Aplicación</strong>
        </nav>
      </header>
      
      <main style={{ padding: '2rem' }}>
        {children}
      </main>

      <footer style={{ marginTop: 'auto', padding: '1rem', textAlign: 'center' }}>
        <p>&copy; 2026 - Atomic Design Project</p>
      </footer>
    </div>
  );
};