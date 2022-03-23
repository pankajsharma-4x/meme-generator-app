import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import Meme from "./components/Meme"


function App() {
  return (
    <div >
     <Header />
     <Meme />
    </div>
  );
}

export default App;
