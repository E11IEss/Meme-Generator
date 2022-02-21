import React, { useEffect } from "react";
import './App.css';
import Header from "./Component/Header";
import Form from "./Component/Form";


function App() {

  useEffect(() => {
    document.title = 'Meme Generator'
  }, [])
  
  return(
    <div className="wrapper">
      <Header />
      <Form/>
    </div>
  )
}

export default App;
