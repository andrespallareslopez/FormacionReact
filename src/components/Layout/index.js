
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import NavMenu from '../NavMenu'
import Logo1 from '../logo1'
import MenuHorizontal from '../MenuHorizontal'

import './style.scss'
import '../../../node_modules/components-font-awesome/css/font-awesome.min.css'



function Layout (props){
   
    return (
        <> 
           
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
                   {props.children}
                   <Footer>
                        
                   </Footer>
               </div>
           </div>
        </>
    )

}

export default Layout