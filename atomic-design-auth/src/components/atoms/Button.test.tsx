import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button Atom', () => {
  it('debe renderizar el texto correctamente', () => {
    render(<Button>Enviar</Button>);
    const buttonElement = screen.getByText(/Enviar/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('debe tener el estilo de color primario por defecto', () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText(/Test/i);
    // Verificamos que use la variable CSS de nuestro Smart Code
    expect(buttonElement.style.backgroundColor).toBe('var(--primary-color)');
  });
});