import React,{Component} from 'react'

class Forms extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            comment:'',
            color:'Red'

        }
    }

    changeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changeComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    changeColor=(event)=>{
        this.setState({
            color:event.target.value
        })
    }
    handleSubmit=(username,comment,color)=>{
        alert(this.state.username+" "+this.state.comment+" "+this.state.color+" Color" )
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"
                    value={this.state.username}
                    onChange={this.changeUsername}
                    />
                    </div>
                    <div>
                    <label>Comment</label>
                    <textarea
                    value={this.state.comment}
                    onChange={this.changeComment}
                    />
                    </div>
                    <div>
                        <select  value={this.state.color}
                    onChange={this.changeColor}>
                            <option value='red'>Red</option>
                            <option value='blue'>Blue</option>
                            <option value='Black'>Black</option>
                        </select>
                        </div>
                        <button type='submit'>Submit</button>
            </form>
        );

    }
}
export default Forms