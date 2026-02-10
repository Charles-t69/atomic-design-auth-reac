import { FolderRepository } from '../../domain/repositories/folder.repository';

export class ListFoldersUseCase {
  constructor(private folderRepository: FolderRepository) {}

  async execute() {
    return await this.folderRepository.findAll();
  }
}