import React from 'react';
import Navbar from './navbar';
import Body from './info';
import FoodCards from './food';
import ContactUs from './contactus';

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <FoodCards />
      <ContactUs />
    </div>
  );
};

export default App;
