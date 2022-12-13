import { useState } from 'react';
import PropTypes from 'prop-types';


export function CounterApp({ value }) {
    console.log('Renderizar nuevamente');
    
    /** Utilizando el hook useState con valor inicial del valor */
    const [ counter, setCounter ] = useState(value);

    function handleIncrease(e) {
        /**
         * Cambia el estado del "counter" para renderizar el HTML donde se imprime el "counter"
        */
        setCounter( counter + 1 );
    }

    function handleDecrease() {
        setCounter(counter - 1);
    }
    
    function handleReset() {
        setCounter(value);
    }

    
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <hr />
            <button type='button' onClick={ handleIncrease }>+1</button>
            <button type='button' onClick={ handleDecrease }>-1</button>
            <button type='button' onClick={ handleReset } >Reset</button>
        </>
    );
}


/** Creación de los propTypes  */
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}