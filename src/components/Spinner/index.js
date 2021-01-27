
import {useEffect,useState} from 'react'
import './Style.scss'

export const InputSpinner = function(){
    const [count,setCount] = useState(0)    
    const onChangeValue = (e) => {
    
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }    


        if (isNumeric(e.target.value))
          setCount(parseInt(e.target.value,10))
        else
          setCount(e.target.value)
          
    }
    //importante inicializar con el Effect porque si no nos hace un efecto raro
    useEffect(()=>{
       setCount(0)
    },[])
    return (
        <>
          
          <button className="spin-button" onClick= {
            ()=> setCount(count+1)
          }>+</button>
          <input className="spin-text" value={count} onChange={onChangeValue} />
          <button className="spin-button" onClick={
              ()=> setCount(count-1)
          }>-</button>
                
      </>
    )
}

export const NumericSpinner=function(){
    const [count,setCount] = useState(0)

    return (
        <>
         
            <button className="spin-button" onClick= {function(){
                setCount(count+1)
            }}>+</button>
            <span className="spin-content">{count}</span>
            <button className="spin-button" onClick={
                ()=> setCount(count-1)
            }>-</button>
                
        </>
    )
}

