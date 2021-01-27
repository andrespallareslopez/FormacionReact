


import './styles.scss'

function Logo1(props){
    let titulo = props.titulo || "My Application"
    
    return (
    <>
      <div className="logo" >
        <div className="spinner">
          <div className="ball ball-1"></div>  
          <div className="ball ball-2"></div>  
          <div className="ball ball-3"></div>  
          <div className="ball ball-4"></div>
        </div>           
      </div>
      <h1 className="title-application">{titulo}</h1>
    </>
    )
}



export default Logo1

