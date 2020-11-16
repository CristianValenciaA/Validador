import logo from './logo.svg';
import React from 'react';
import './App.css';

//import {Button} from "@material-ui/core"
import MiComponente from './NuevosComponentes/MiComponente';
import Validador from './NuevosComponentes/Validador';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Validador valor = ""
        />
        <p>
          Clave 'uvalpo'
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Botón a modificar <MiComponente/></p>
      </header>
    </div>
  );
}

export default App;
