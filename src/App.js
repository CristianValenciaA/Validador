import React from 'react';
import './App.css';
import MiComponente from './NuevosComponentes/MiComponente';
import Validador from './NuevosComponentes/Validador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clave uvalpo
        </p>
        <Validador valor = "123344"
        />
        <MiComponente/>
      </header>
    </div>
  );
}

export default App;
