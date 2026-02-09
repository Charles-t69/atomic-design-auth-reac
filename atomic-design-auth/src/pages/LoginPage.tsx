import { AuthLayout } from '../components/templates/AuthLayout';
import { LoginForm } from '../components/organisms/LoginForm';

export const LoginPage = () => {
  return (
    <AuthLayout title="Bienvenido de nuevo">
      <LoginForm />
      <p style={{ marginTop: '1rem' }}>
        ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
      </p>
    </AuthLayout>
  );
};