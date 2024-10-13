import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../like'; // Asegúrate de que la ruta es correcta para tu proyecto

describe("Like Component", () => {
  
  test('El componente muestra por defecto "Likes: 0"', () => {
    render(<Like />);
    const likesText = screen.getByText(/Likes: 0/);
    expect(likesText).toBeInTheDocument();
  });

  test('Incrementa el número de likes al hacer clic en "Like"', () => {
    render(<Like />);
    const incrementButton = screen.getByText("Like");
    fireEvent.click(incrementButton);

    const likesText = screen.getByText(/Likes: 1/);
    expect(likesText).toBeInTheDocument();
  });

  test('Decrementa el número de likes al hacer clic en "Dislike"', () => {
    render(<Like />);
    const decrementButton = screen.getByText("Dislike");
    fireEvent.click(decrementButton);

    const likesText = screen.getByText(/Likes: -1/);
    expect(likesText).toBeInTheDocument();
  });
});
