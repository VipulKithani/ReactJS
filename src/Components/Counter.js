import React,{Component} from 'react'
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Incremnt(){
        this.setState(prevState=>({
            count: prevState.count + 1

        }))
        console.log(this.state.count)
    }
    
    render(){
        return(
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.Incremnt()}>Increment</button>
            </div>
        );
    }
}
export default Counter