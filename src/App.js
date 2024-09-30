import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { NotificationSlider } from './components/NotificationSlider/NotificationSlider';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <NotificationSlider />
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
