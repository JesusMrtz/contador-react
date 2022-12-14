import React from 'react';
import ReactDOM from 'react-dom/client';

/** Configurar el archivo .env  */
import dotenv from "dotenv";
dotenv.config();

/** Agregamos estilos globales en toda la aplicación */
import './styles.css';

import FirstApp from './components/FirstApp';
import HelloWorldApp from './components/HelloWorldApp';
import { CounterApp } from './components/CounterApp';

/** 
 * Mi primer fuctional Component - Componente basada en funciones
 * */
// function App() {
//     return (<h1>Hola mundo!</h1>);
// }


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp propNumber={ 323 } />
        <CounterApp value={ 26 }  />
    </React.StrictMode>
);