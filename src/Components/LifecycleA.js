import React,{Component} from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Vipul'
        }
        console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevState,PrevProps){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Vicky'
        })
    }

    render(){
        console.log("LifecycleA Render")
        return(
            
            <div>
                <h1>LifecycleA</h1>
                <button onClick={this.changeState}>ChangeState</button>
                <LifecycleB/>
            </div>
        );
    }
}
export default LifecycleA