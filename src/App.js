import React from 'react';
import "./index.css"
import Header from './Components/Header';
import TypingBox from './Components/TypingBox';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <TypingBox/>
      <Footer/>
    </div>
  );
}

export default App;
