import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Hey from './Components/Hey'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import StyleSheet from './Components/StyleSheet';
import './mystyless.css'
import styles from './mystyles.module.css'
import Forms from './Components/Forms'
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';
function App() {
  return (
    <div className="App">
   {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
    

         <Greet>
       <p>This is greet tag
         FO
         <h3>Hiii bro</h3>
         <nav><ul>Home</ul>
         <ul><a href="#">About</a></ul>
         <ul>Contact</ul>
         </nav>
         <button>Action</button>
       </p>

     </Greet>
      <Welcome name= 'Vipul' sname='Kithani'/>
      <Hello name= 'Vipul' sname='Kithani'>
      <p>This is children props</p>
      </Hello>
      <Hello name= 'VK' sname='PN'/>
      
    <Message  >
    
    </Message>
    <Hey>
      <p>Lets move other page hiii</p>
      <a href="www.gmail.com">Click Here</a>
    </Hey>

    <Counter></Counter>
    <FunctionClick/>
    <StyleSheet primary={true}/>*/}
    <Forms/>
    <LifecycleA/>
    <ParentComp/>
    </div>
  );
}

export default App;
