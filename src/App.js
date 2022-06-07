import React from 'react';
import './App.css';
import Footer from './Components/footer';
import Gallery from './Components/gallery';
import Header from './Components/header'
import Home from './Pages/home';
import Inventory from './Pages/inventory';
import Model3Order from './Pages/model3Order';

function App() {
  return (
    <div className="App"> 

      {/*<Gallery />
      <Header />
     
      <Home />
      <Footer />*/}
       <Model3Order />
    </div>
  );
}

export default App;
