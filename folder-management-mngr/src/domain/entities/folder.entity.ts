// Regla de negocio pura: ¿Qué es una carpeta?
export interface Folder {
  id: string;
  name: string;
  ownerId: string;
  createdAt: Date;
}