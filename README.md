# Apuntes React. Conociendo React

## Tabla de Contenidos
___
  - [Cadena de herramientas integradas](#cadena-de-herramientas-integradas)
  - [Empezar un proyecto react desde cero](#empezar-un-proyecto-react-desde-cero)
  - [Pasos despues instalar el proyecto base](#pasos-despues-instalar-el-proyecto-base)
  - [Tipo de componentes en React](#tipo-de-componentes-en-react)
    - [Estructura de un componente en React:](#estructura-de-un-componente-en-react)
  - [Estado de las variables de componente en React](#estado-de-las-variables-de-componente-en-react)
  - [Componentes ejemplos que podemos hacer:](#componentes-ejemplos-que-podemos-hacer)
  - [Todo-do List Componentes](#todo-do-list-componentes)
  - [## Tips CSS](#-tips-css)
    - [Guia de flexbox](#guia-de-flexbox)
  - [## Tips Javascript](#-tips-javascript)
      - [Ejemplos de imports](#ejemplos-de-imports)
      - [Importacion de elementos por defecto](#importacion-de-elementos-por-defecto)
  ___
## Cadena de herramientas integradas

- Create React App (La mas popular ultimamente y mas facil, y la que vamos a ver en esta formacion)
- Next.js
- Gatsby
- Neutrino
- Parcel

Desde cero nos la podemos configurar con:

npm + Webpack + babel<br>
yarn + Webpack + babel<br>
npm + gulp + babel<br>



## Empezar un proyecto react desde cero

el comando create-react-app y la carpeta donde se va a crear la estructura base del proyecto en React
~~~
npx create-react-app prueba03
~~~

para instalar librerias externas como  jquery y otras
~~~
npm i jquery --save
yarn add jquery

npm i pikaday --save
yarn add pikaday
~~~
podemos hacerlo con yarn, que es mas recomendable si hemos creado el proyecto con create-react-app, de echo en mi maquina hay que utilizar yarn una vez creado el proyecto create-react-app

~~~

yarn add node-sass@4.14.1

si pondemos yarn add node-sass sin version nos istalara la ultima la 5.0.0 y vamos a tener problemas, por eso instalar la 4.14.1

si la hemos instalado y queremos desistalarla ponemos:

npm unistall node-sass

yarn remove node-sass
~~~

Explicamos como en el componente principal App podemos quitar el ejemplo y empezar a poner nuestros componentes


si diera problema el comando npm a la hora de instalar paquetes
~~~
npm cache clean --force
~~~


luego nos situamos dentro del directorio prueba03

y lanzamos el comando 

~~~
npm start
o su analogo en yarn
yarn start
~~~

## Pasos despues instalar el proyecto base
Limpiamos un poco el fichero App.js, porque nos ha metido un codigo de ejemplo inicial del logotipo de react girando.

En el fichero App.js, introducimos nuestro propio componente layout inicial personalizado.

Fijarse en el fichero index.js bajo la carpeta "src" que es desde donde llama al componente App del fichero App.js

## Tipo de componentes en React 

- Componentes de clase<br>
  Ejemplo de estructura

~~~
//Import de React y de otras librerias y del estilo del componente
import React from 'react'

import './style.scss'


export default class NumericSpinnerC extends React.Component {
    //Constructor, inicializa las variables
    constructor(props){
        super(props)
        //Inicializar el estado del componente
        this.state= {count:0}
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    //Acciones
    sumar(e){
        this.setState((state,props)=>({count: state.count+1}))
    }
    restar(e){
      this.setState((state,props)=>({count:state.count-1}))
    }
    //funciones eventos ciclo de vida de un componente
    componentDidMount(){
       
    }
    componentWillUnmount() {
    
    }

    //funcion renderizado del componente
    render(){


        return (

        <React.Fragment>
         
            <button className="spin-button" onClick= {this.sumar}>+</button>
            <span className="spin-content">{this.state.count}</span>
            <button className="spin-button" onClick={this.restar}>-</button>
          
         
         </React.Fragment>
        )
    }

}
  ~~~

- Componentes funcionales</br>
Ejemplo 
~~~

import {useState,useEffect} from 'react'

import './style.scss'

function NumericSpinner(){
    const [count,setCount] = useState(0)

    return (
        <>
          <div className="panel-spinner content" >
            <div className="panel-loader" >
            <button className="spin-button" onClick= {function(){
                setCount(count+1)
            }}>+</button>
            <span className="spin-content">{count}</span>
            <button className="spin-button" onClick={
                ()=> setCount(count-1)
            }>-</button>
            </div>
          </div>             
        </>
    )
}

export default NumericSpinner


~~~

  Otro ejemplo 
~~~
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)

~~~




### Estructura de un componente en React:

- Imports

- Render

- Ciclo de vida del componente

- Estado

- Acciones



 *Ojo que cuando peguemos html el atributo class hay que ponerlo como className si importamos desde html*


## Estado de las variables de componente en React

- Como se gestiona desde los componentes de clase y los componentes funcionales dichas variables.

- El estado de las variables en los componentes en react es inmutable, para manejar el estado de las variables continuamente estamos creando nuevos valores, para reemplazarlos por los antiguos.

- Esto viene de lenguajes funcionales, aunque javascript no es puramente funcional, pero si tiene muchas cosas de los lenguajes funcionales.

- Explicar los react hooks, para que sirven, la nueva forma de gestionar el estado de las variables dentro de un componente funcional en react:
  - useState
  - useEffects
  - useRef
  - useCallback
  - useReducer
  - useContext

## Componentes ejemplos que podemos hacer:

Hacer un panel numerico si puede ser con calculadora



Tipos de componentes que podemos hacer con React:

- Layout (Ejemplo de layout con flex box)
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - Header
  
  - footer

  - panel lateral izquierdo(Aside)

  - panel lateral derecho (aside)


## Todo-do List Componentes

- [x] Footer
- [x] Header
- [x] InputSpinner
- [x] Layout
- [x] LayoutC
- [ ] LayoutLegacy
- [x] LayoutMasterPage
- [ ] LayoutSlots
- [x] Loaders
- [x] Logo1
- [x] Logo2
- [x] MenuHorizontal
- [ ] MenuVertical
- [ ] MenuVerticalPanel
- [x] Nav
- [ ] NavMenuButton
- [x] NumericSpinner
- [x] PanelCenter
- [ ] PanelNumerico
- [x] PruebaForm
- [x] Spinner
- [ ] Tab

## Tips CSS
---

### Guia de flexbox

Para hacer en React un layout, con CSS en concreto utilizarun tipo de modelo de caja o de posicionamiento de elementos mediante CSS llamado flex-box.

https://css-tricks.com/snippets/css/a-guide-to-flexbox/


## Tips Javascript
---

#### Ejemplos de imports

~~~
import * as myModule from '/modules/my-module.js'
~~~
#### Importacion de elementos por defecto
~~~
import myDefault from '/modules/my-module.js'
~~~


~~~
import {foo, bar} from "my-module.js"
~~~

Pero tambien se podria hacer estas formas:

~~~
import myDefault, * as myModule from '/modules/my-module.js'
// myModule used as a namespace

o de esta otra forma

import myDefault, {foo, bar} from '/modules/my-module.js'
// specific, named imports

~~~


Ejemplo de exportacion con funciones privadas dentro del modulo
~~~
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true)
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)))
}
~~~
Luego llamamos al modulo con el import de la siguiente manera
~~~
import { getUsefulContents } from '/modules/file.js'

getUsefulContents('http://www.example.com',
    data => { doSomethingUseful(data); })
~~~
