
import React from 'react'

import './style.scss'


export default class NumericSpinnerC extends React.Component {

    constructor(props){
        super(props)
        this.state= {count:0}
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }
    
    sumar(e){
        this.setState((state,props)=>({count: state.count+1}))
    }
    restar(e){
      this.setState((state,props)=>({count:state.count-1}))
    }
    componentDidMount(){
       
    }
    componentWillUnmount() {
    
    }
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