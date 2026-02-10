import { describe, it, expect, vi } from 'vitest';
import { ListFoldersUseCase } from './list-folders.use-case';

describe('ListFoldersUseCase', () => {
  it('debería retornar una lista de carpetas', async () => {
    // Mock del repositorio
    const mockRepo = {
      findAll: vi.fn().mockResolvedValue([{ id: '1', name: 'Test Folder' }]),
      create: vi.fn()
    };
    
    const useCase = new ListFoldersUseCase(mockRepo);
    const result = await useCase.execute();

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Test Folder');
  });
});