
import {useState,useEffect} from 'react'

function PruebaForm(){
    
    const [Persona,setPersona] = useState({
        Nombre:"andres",
        Apellidos:"Pallares",
        Edad:50,
        Poblacion:"Orihuela"
    })

    const onChangeValue=(e) => {
        const {name,value} = e.target
        
        //console.dir(e);
        
        if (e.target.name === "Nombre"){
            console.log("Estoy en Nombre")
            setPersona((prev) => {
                
                return {...prev,["Nombre"]: value }

            })
           
        }
            
        
        if (e.target.name === "Apellidos"){
            console.log("estoy en Apellidos")          
            setPersona((prev) => {
                
                return {...prev,["Apellidos"]: value }

            })
          
        }
        
        if (e.target.name === "Edad"){
            console.log("Edad")          
            setPersona((prev) => {
                
                return {...prev,["Edad"]: value }

            })
        }
        
        if (e.target.name="Poblacion"){
            console.log("Edad")          
            setPersona((prev) => {
                
                return {...prev,["Edad"]: value }

            })
        }
        
       console.log(name)
        console.dir(value)
    }

    return (
        <>
            <div>
                <label>Nombre:</label><input type="text" name="Nombre"  onChange={onChangeValue} />
            </div>
            <div>
                <label>Apellidos:</label><input name="Apellidos"  onChange={onChangeValue} />
            </div>
            <div>
                <label>Edad:</label><input name="Edad"  onChange={onChangeValue} />
            </div>
            <div>
                <label>Poblacion:</label><input name="Poblacion"  onChange={onChangeValue} />
            </div>
            <div>
                <p>{Persona.Nombre}</p>
            </div>
            <div>
                <p>{Persona.Apellidos}</p>
            </div>
            <div>
                <p>{Persona.Edad}</p>
            </div>
            <div>
                <p>{Persona.Poblacion}</p>
            </div>
        </>

    )

}

export default PruebaForm