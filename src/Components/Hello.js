import React from 'react';
const Hello = props => {
//(Without JSX )return React.createElement('div',null,React.createElement('h1',null,'Vipul'))
return(
  <div><h1>Hello {props.name} a.k.a {props.sname}</h1>
  {props.children}
  </div>  
);
}
export default Hello;
