import React,{Component} from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import Memo from './Memo'
class ParentComp extends Component{
    constructor(){
        super()
        this.state={
            name:'Vipul'
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'Vipul'
            })
        },2000)
    }
    render(){
        console.log('*****Parent Comp*****')
        return(
            
            <div>Parent Component
                <Memo name={this.state.name}/>
{/*         
            <PureComp name={this.state.name}/>
            <RegComp name={this.state.name}/> */}
            </div>
            
        );
    }
}
export default ParentComp