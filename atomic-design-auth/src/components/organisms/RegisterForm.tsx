import { useState } from 'react';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro intent con:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Crear Cuenta</h2>
      <input 
        type="text" 
        placeholder="Nombre completo"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="email" 
        placeholder="Correo electrónico"
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input 
        type="password" 
        placeholder="Contraseña"
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};