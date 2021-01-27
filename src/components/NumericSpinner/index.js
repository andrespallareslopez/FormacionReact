
import {useState,useEffect} from 'react'

import './style.scss'

function NumericSpinner(){
    const [count,setCount] = useState(0)
    
    useEffect(()=>{

    },[])

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

