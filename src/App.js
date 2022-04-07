import React from 'react';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header'
import Home from './Screens/home';
function App() {
  return (
    <div className="App"> 
      <Header />
      <Home />
      {/*<Footer />*/}
    </div>
  );
}

export default App;
