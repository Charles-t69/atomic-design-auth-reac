// Simulamos una base de datos local para pruebas rápidas
const MOCK_USER = {
  id: '1',
  name: 'Usuario de Prueba',
  email: 'test@ejemplo.com',
  role: 'admin'
};

export const authService = {
  // Simula el inicio de sesión
  login: (email: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@ejemplo.com' && password === '123456') {
          resolve({
            status: 200,
            user: MOCK_USER,
            token: 'fake-jwt-token-123'
          });
        } else {
          reject(new Error('Credenciales incorrectas'));
        }
      }, 1500); // Simulamos 1.5 segundos de carga de red
    });
  },

  // Simula el registro de un nuevo usuario
  register: (userData: any): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 201,
          message: 'Usuario creado exitosamente',
          user: { ...userData, id: Date.now().toString() }
        });
      }, 1500);
    });
  }
};