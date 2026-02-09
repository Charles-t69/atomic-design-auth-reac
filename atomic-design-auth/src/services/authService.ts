// Simulamos una base de datos local para pruebas rápidas
const MOCK_USER = {
  id: '1',
  name: 'Usuario de Prueba',
  email: 'test@ejemplo.com',
  role: 'admin'
};

export const authService = {
  // --- LOGIN ---
  login: (email: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 1. Intentar obtener usuarios registrados en LocalStorage
        const storedUsersRaw = localStorage.getItem('registered_users');
        const users = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];

        // 2. Buscar si el usuario que intenta entrar existe
        const foundUser = users.find((u: any) => u.email === email && u.password === password);

        // 3. Credenciales estáticas de respaldo (el usuario test)
        const isTestUser = email === 'test@ejemplo.com' && password === '123456';

        if (foundUser || isTestUser) {
          const userData = foundUser || { id: 'test', name: 'Usuario de Prueba', email };
          resolve({
            status: 200,
            user: userData,
            token: 'fake-jwt-token-' + Math.random()
          });
        } else {
          reject(new Error('Credenciales inválidas. Verifica tu correo y contraseña.'));
        }
      }, 1000);
    });
  },

  // --- REGISTER ---
  register: (userData: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // 1. Obtener lista actual de usuarios
          const storedUsersRaw = localStorage.getItem('registered_users');
          const users = storedUsersRaw ? JSON.parse(storedUsersRaw) : [];

          // 2. Verificar si el email ya está registrado
          if (users.some((u: any) => u.email === userData.email)) {
            return reject(new Error('El correo ya está registrado.'));
          }

          // 3. Agregar nuevo usuario y guardar
          users.push(userData);
          localStorage.setItem('registered_users', JSON.stringify(users));

          resolve({
            status: 201,
            message: 'Registro exitoso',
            user: userData
          });
        } catch (error) {
          reject(new Error('Error al procesar el registro.'));
        }
      }, 1000);
    });
  }
};