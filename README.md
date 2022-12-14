# React CounterApp 
>Primera aplicación sobre un contador hecha con ReactJs gracias al curso de Fernando Herrera sobre [ReactJs](https://www.udemy.com/course/react-cero-experto/)

> Proyecto hecho gracias a [ReactJs](https://es.reactjs.org/) y [Vite](https://vitejs.dev/)


## Primeros pasos
1. Ejecuta el comando `npm install` para instalar las dependencias
2. Ejecutar el comando `npm run dev` para correr el proyecto como desarrollador


## Apuntes del desarrollador
### Props
Es información exta que se le pasa a los componentes

### PropTypes
Nos ayuda a tener cierto tipado con los **props**
>Nota: Si estamos utilizando *vite* tenemos que instalarlos con el comando `npm install prop-types`

> Los *DefaultProps* entran antes a la ejecución que nuestros **props**

### useState
Es un hook propio de React que ayuda a cambiar el estado de un valor con la ayuda de un getter y una función setter que permite actualizar el estado.

```
const [ counter, setCounter ] = useState(0);
```

Esto ayuda a rederizar aquellos valores que son cambiantes en el HTML.

Si volvemos a renderizar un valor, se vuelve a ejecutar el *functional component* pero solo se renderezirá la parte cambiante del HTML y **no todo el documento**


### Introducción de las pruebas unitarias y de integración

#### Unitarias
* Enfocadas en pequeñas funcionalidades

#### Integración
* Enfocadas en cómo reaccionan varias piezas en conjunto

#### Características de las pruebas
1. Fáciles de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas
5. Principalmente unitarias

#### Mitos
* Hace que mi aplicación no tenga errores
* Las pruebas no pueden fallar
* Hacen más lenta mi aplicación
* Es una pérdida de tiempo
* Hay que probar todo

**NOTA: Las pruebas unitarias no son una pérdida de tiempo**

> Si creamos el proyecto con la ayuda de *vite* se tiene instalar el paquete de [Jest](https://jestjs.io/) con el siguiente comando `npm install --dev jest @types/jest` y para la configuración se debe ejecutar el comando `npm install --save-dev babel-jest @babel/core @babel/preset-env`

> Se necesitará configurar el archivo `babel.config.cjs`

> Actualmente Jest no es bueno trabajando con el DOM, por lo cual se necesita el test-library para react. Se puede descargar con el siguiente comando `npm install --save-dev @testing-library/react`.

> **NOTA:** Si estas trabajando con una versión de node inferior a la 18.0.0, necesitarás configurar el archivo `jest.config.cjs` y agregar el paquete `whatwg-fetch` para aceptar las pruebas en funciones *async*
