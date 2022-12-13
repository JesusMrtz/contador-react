import PropTypes  from 'prop-types';


/**
 * Si no hay una dependencia de comportamiento del componente, las variables y funciones pueden estar fuera
 * Aquellas funciones o variables que estan fuera del Functional Componet, no se vuelve a redibuajar en memoria para mostrarlo.
 * 
 */

const name = 'Jesús Martínez Torres';
const age = 26;
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newMessage = {
    author: name,
    message: 'Hola, soy goku'
};

function returnValue() {
    return 'Estoy retornando algo';
}


function FirstApp({ title, propNumber }) {
    return (
        <>
            <h1>{ title }</h1>
            <h2>Estoy recibiendo un prop númerico: { propNumber * 12}</h2>
            <hr />
            <h2>Hola, mi nombre es { name }</h2>
            <h3>{ arrayOfNumbers }</h3>

            {/* Si queremos imprimir un objeto, tenemos que serealizarlo */}
            <p>{ JSON.stringify(newMessage) }</p>
            {/*  */}

            <p>{ returnValue() }</p>

            <h3>Este es un subtitulo del subtitulo { age * 43 }</h3>
        </>
    );
}

/** Agregando tipado a los PropTypes  */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    propNumber: PropTypes.number
}

/** Implementando defaultProps  */
FirstApp.defaultProps = {
    title: 'No hay titulo',
    // propNumber: 0
}


export default FirstApp;