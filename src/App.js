import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { NotificationSlider } from './components/NotificationSlider/NotificationSlider';

function App() {
  return (
    <div className="App">
      <NotificationSlider />
      <Navbar />
    </div>
  );
}

export default App;
