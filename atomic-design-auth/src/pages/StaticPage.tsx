import { MainLayout } from '../components/templates/MainLayout';
import { Text } from '../components/atoms/Text';

export const StaticPage = () => {
  return (
    <MainLayout>
      <h2>Sobre Atomic Design</h2>
      <Text content="Atomic Design es una metodología para crear sistemas de diseño. Se divide en cinco niveles: Átomos, Moléculas, Organismos, Plantillas y Páginas." />
      <div style={{ marginTop: '20px' }}>
        <Text content="Esta estructura permite que los componentes sean reutilizables, fáciles de probar y escalables." />
      </div>
    </MainLayout>
  );
};