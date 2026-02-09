import { useState } from 'react';
import { authService } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.register(formData);
      alert(response.message);
      
      // Opcional: Auto-login tras el registro exitoso
      login(response.user);
    } catch (err) {
      console.error('Error al registrar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" onChange={(e) => setFormData({...formData, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Registrarse</button>
    </form>
  );
};