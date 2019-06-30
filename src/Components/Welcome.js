import React ,{ Component } from 'react';
class Welcome extends Component{
    render(){
        return <div>
           
            <h2>Le bhari Welcome {this.props.name} a.k.a {this.props.sname}</h2>
        </div>
    }
}
export default Welcome;