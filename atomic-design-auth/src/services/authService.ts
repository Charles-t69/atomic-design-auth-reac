// Simulamos una base de datos local para pruebas rápidas
const MOCK_USER = {
  id: '1',
  name: 'Usuario de Prueba',
  email: 'test@ejemplo.com',
  role: 'admin'
};

export const authService = {
  login: (email: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Quitamos la validación estricta para que puedas probar con lo que quieras
        if (email && password.length >= 6) { 
          resolve({
            status: 200,
            user: { id: '1', name: 'Usuario Demo', email: email },
            token: 'fake-jwt-token'
          });
        } else {
          reject(new Error('Credenciales inválidas (la clave debe tener 6 caracteres)'));
        }
      }, 1000);
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