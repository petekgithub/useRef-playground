// useState vs useRef
// when a variable changed, useState triggeers the componnet and render process works again
// but with useRef,  trigger of rendering can prevent.
import { useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  //const [counter, setCounter] = useState(0);

  //const count = useRef(0);

  // const onClick = () => {
  //   setCounter(counter + 1);
  // }

  // const styles = {
  //   main: {
  //     color: "red"
  //   }
  // }

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  }


  return (
    <div className="App">
    {/*  {counter}r */}  
    {/* useState we can show count:1 on the browser */}  
    {/* <button style={styles.style} onClick={onClick}>Click me!</button> */}  
    {/*------------------------------------------------------------------ */}  
    {/* useRef, we can show count:0 on the browser but count value will be 1 in the memory*/}
    {/* <button onClick={() => {count.current += 1}}>Clicks : {count.current}</button>*/}

     <video 
        width= "400"
        controls ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
     />
    <hr />
    <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default App;
