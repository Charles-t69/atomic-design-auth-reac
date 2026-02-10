import { Folder } from '../entities/folder.entity';

// Interfaz que define qué acciones puede hacer el backend
export interface FolderRepository {
  findAll(): Promise<Folder[]>;
  create(folder: Folder): Promise<Folder>;
}