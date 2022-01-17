import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';

test('renders the ProductList', () => {
  const { getByTestId } = render(<ProductList />);
  const linkElement = getByTestId('produtList');
  expect(linkElement).toBeInTheDocument();
});
