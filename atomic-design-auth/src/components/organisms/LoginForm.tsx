import { useState } from 'react';
// Nota: importar moléculas 
// import { FormField } from '../molecules/FormField'; 

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica
    if (!email.includes('@')) {
      setErrors({ ...errors, email: 'Email no válido' });
      return;
    }
    console.log('Login intent con:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>
      {/* Aquí usarías tus moléculas en lugar de inputs puros */}
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Tu email"
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Tu contraseña"
      />
      <button type="submit">Entrar</button>
      {errors.email && <p>{errors.email}</p>}
    </form>
  );
};