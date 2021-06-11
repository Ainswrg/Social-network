import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SocialApp from './App';
// import App from './App';

// test('renders the correct content', async () => {
//   render(<SocialApp />);
//   let div = screen.getByRole(/"main"/i);
//   expect(div).toBeInTheDocument();
// })
describe('TEST', () => {
   test('renders the correct content', async () => {
     render(<SocialApp />)
     
   //   const meet = await waitFor(() => screen.getByText('Hi'))
     
   //   expect(meet).toBeInTheDocument();  
   });
})
