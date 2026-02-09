import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Importamos el hook
import { authService } from '../../services/authService'; // Importamos el servicio

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth(); // Obtenemos la función login del contexto

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Llamamos al servicio (la simulación de backend)
      const response = await authService.login(email, password);
      // Si todo sale bien, guardamos al usuario en el estado global
      login(response.user);
      alert('¡Bienvenido!');
    } catch (err: any) {
      // Manejamos el error si las credenciales son incorrectas
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};