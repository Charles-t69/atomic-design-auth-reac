import { AuthLayout } from '../components/templates/AuthLayout';
import { LoginForm } from '../components/organisms/LoginForm';

const Login = () => {
  return (
    <AuthLayout title="Iniciar Sesión">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;