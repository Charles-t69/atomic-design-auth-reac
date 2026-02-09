import { AuthLayout } from '../components/templates/AuthLayout';
import { RegisterForm } from '../components/organisms/RegisterForm';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crea tu cuenta">
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <RegisterForm />
        <footer style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p>
            ¿Ya tienes una cuenta? <a href="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Inicia sesión aquí</a>
          </p>
        </footer>
      </div>
    </AuthLayout>
  );
};