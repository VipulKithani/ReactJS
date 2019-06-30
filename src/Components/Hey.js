import React,{Component} from 'react'
class Hey extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Hey Bhai Kai zala?'
        }
    }
    changeMessage(){
        this.setState({
            message:'Fine Bro Nothing!!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
                {this.props.children}
            </div>
        );
    }
}
export default Hey  