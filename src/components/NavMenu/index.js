import {useEffect} from 'react'


import './style.scss'

function NavMenu(props){
    
    function NavOpen(e){
        //e.target.preventDefault()
        const elemento=document.getElementsByClassName("menu-horizontal")
        
        elemento[0].classList.toggle("navbars-open")
        console.dir(elemento); 
     }
    useEffect(function(){

    },[])

    return (
       <>
          <button type="button" id="btn-toggle-left" className="nav-mobile ripple push-float-left">
           <i className="fa fa-bars fa-2x" ></i>  
          </button>
              {props.children}
          <button type="button" id="btn-toggle-right" className="nav-mobile ripple push-float-right" onClick={NavOpen}>
           <i className="fa fa-list fa-2x" ></i>
          </button>
          <button type="button" id="btn-toggle-sign-in" className="nav-mobile ripple push-float-right">
           <i className="fa fa-sign-in fa-2x" ></i>  
          </button>
       </>
       
    )
}
export default NavMenu

