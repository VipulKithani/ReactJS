import React from 'react'
import './mystyle.css'
const heading ={
    fontSize:'40px',
    color:'yellow'
}
function StyleSheet(props){
   
    let className = props.primary?'primary':''
    return(<div>
        <h1 className='error'>Error</h1>

        <h1 style={heading}> StyleSheet</h1>
    </div>);
}
export default StyleSheet