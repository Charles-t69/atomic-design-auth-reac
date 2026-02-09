interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <div className="auth-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <header>
        <h1>{title}</h1>
      </header>
      <main className="auth-content">
        {children}
      </main>
    </div>
  );
};