import express from 'express';
import cors from 'cors';
import { InMemoryFolderRepository } from './infrastructure/repositories/in-memory-folder.repository';
import { ListFoldersUseCase } from './application/use-cases/list-folders.use-case';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001; // Usamos el 3001 para no chocar con React (3000)

app.use(express.json());

// Inyección de Dependencias Manual (Arquitectura Hexagonal)
const folderRepository = new InMemoryFolderRepository();
const listFoldersUseCase = new ListFoldersUseCase(folderRepository);

// Endpoint que consume el Frontend

app.get('/', (req, res) => {
  res.send('El Manager está funcionando. Ve a /folders para ver los datos.');
});

app.get('/folders', async (req, res) => {
  try {
    const folders = await listFoldersUseCase.execute();
    res.json(folders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener carpetas' });
  }
});

app.listen(port, () => {
  console.log(`Backend Manager corriendo en http://localhost:${port}`);
  console.log(`Validación OAS activa contra src/assets/openapi.json`);
});