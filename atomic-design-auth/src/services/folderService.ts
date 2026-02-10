export const fetchFolders = async () => {
  const response = await fetch('http://localhost:3001/folders');
  if (!response.ok) throw new Error('Error en la API');
  return await response.json();
};