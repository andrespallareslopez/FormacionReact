
import React from 'react'

import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import NavMenu from '../NavMenu'
import Logo1 from '../logo1'
import MenuHorizontal from '../MenuHorizontal'


import './style.scss'

export default class LayoutC extends React.Component{
    
    
    constructor(props){
        super(props)
    
    
    }
    
    componentDibMount(){

    }
    componentWillUnmount(){

    }
    render(){

        return (
          <React.Fragment>
           <div className="container">
               <div className="content">
                   <Header>
                       <Logo1 titulo="Mi Aplicacion"></Logo1>
                   </Header>
                   <Nav>
                       <NavMenu>
                         <MenuHorizontal></MenuHorizontal>
                       </NavMenu>
                   </Nav>
                   {this.props.children}
                   <Footer>
                        
                   </Footer>
               </div>
           </div>
         </React.Fragment>          
        )
    }
}