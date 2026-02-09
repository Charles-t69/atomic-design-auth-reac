import { AuthLayout } from '../components/templates/AuthLayout';
import { RegisterForm } from '../components/organisms/RegisterForm';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crea tu cuenta">
      <RegisterForm />
      <p style={{ marginTop: '1rem' }}>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </AuthLayout>
  );
};