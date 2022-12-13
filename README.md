# React CounterApp 
>Primera aplicación sobre un contador hecha con ReactJs gracias al curso de Fernando Herrera sobre [ReactJs](https://www.udemy.com/course/react-cero-experto/)

> Proyecto hecho gracias a [ReactJs]() y [Vite]()


## Primeros pasos
1. Ejecuta el comando `npm install` para instalar las dependencias
2. Ejecutar el comando `npm run dev` para correr el proyecto como desarrollador


### Apuntes del desarrollador
### Props
Es información exta que se le pasa a los componentes

### PropTypes
Nos ayuda a tener cierto tipado con los **props**
>Nota: Si estamos utilizando *vite* tenemos que instalarlos con el comando `npm install prop-types`

> Los *DefaultProps* entran antes a la ejecución que nuestros **props**

### useState
Es un hook propio de React que ayuda a cambiar el estado de un valor con la ayuda de un getter y un setter.

Esto ayuda a rederizar aquellos valores que con cambiantes en el HTML.

Si volvemos a renderizar un valor, se vuelve a ejecutar el *functional component* pero solo se renderezirá la parte cambiante del HTML y **no todo el documento**