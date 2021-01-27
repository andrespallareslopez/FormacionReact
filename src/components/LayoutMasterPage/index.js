
import NavMenu from '../NavMenu'
import Logo1 from '../logo1'
import Logo2 from '../logo2'
import PanelNumerico from '../PanelNumerico'
import Loader01 from '../Loaders/Loader01'
import Loader02 from '../Loaders/Loader02'
//import NumericSpinner from '../NumericSpinner'
//import InputSpinner from '../InputSpinner'
import * as Spinner from '../Spinner'
import PanelCenter from '../PanelCenter'
import PruebaForm from '../PruebaForm'

import '../../../node_modules/components-font-awesome/css/font-awesome.min.css'
import './style.scss'


function LayoutMasterPage (props){
    
    
    return (
      
      <div className="wrapper">
        <header className="header">
          <Logo1></Logo1>
        </header>
        <nav>
          <NavMenu></NavMenu>
        </nav>
        
        <main className="main">
          <aside className="aside aside-1"></aside>
          <article>
            <PanelCenter>   
               <PruebaForm></PruebaForm>
            </PanelCenter>
          </article>
        </main>
        
        
        <footer className="footer"></footer>
      </div>
       
    )
}

export default LayoutMasterPage