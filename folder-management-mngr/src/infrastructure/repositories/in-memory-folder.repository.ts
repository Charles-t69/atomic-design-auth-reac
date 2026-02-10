import { Folder } from '../../domain/entities/folder.entity';
import { FolderRepository } from '../../domain/repositories/folder.repository';

export class InMemoryFolderRepository implements FolderRepository {
  private folders: Folder[] = [
    { id: '1', name: 'Documentos Finales', ownerId: 'user1', createdAt: new Date() },
    { id: '2', name: 'Imágenes Proyecto', ownerId: 'user1', createdAt: new Date() }
  ];

  async findAll(): Promise<Folder[]> {
    return this.folders;
  }

  async create(folder: Folder): Promise<Folder> {
    this.folders.push(folder);
    return folder;
  }
}