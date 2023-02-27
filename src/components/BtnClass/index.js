import React from "react"

export  class Button extends React.Component{
   
    constructor(props) {
        super(props);
        // 不要在这里调用 this.setState()
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
     }
    handleClick(){

        this.setState((prevState)=>{
            // eslint-disable-next-line no-unused-expressions
            return {counter:prevState.counter + 1}
        })
        
    }
    render(){
        debugger;
         return  <>
            <button  onClick={this.handleClick}>我是button</button>
            <input value={this.state.counter}></input>
          </>
         
    }
}