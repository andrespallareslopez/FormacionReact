
import './style.scss'

function PanelCenter(props){

    return (
        <div className="panel-spinner content" >
          <div className="panel-loader" >
             {props.children}
          </div>
        </div>    
    )
}

export default PanelCenter
