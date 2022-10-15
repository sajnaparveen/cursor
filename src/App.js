import logo from './logo.svg';
import {react,useState} from 'react'
import './App.css';

function App() {
  const [coord,setCoord]=useState([])
  const [status,setStatus]=useState()

  const handleMouseMove=(event)=>{
    let coordnates=[event.clientX,event.clientY]
    console.log(coord)
    setCoord(coordnates)

  }
  let aaa=(value)=>{

  }
  
  return (
  
    <svg   height={window.outerHeight} width={window.outerWidth} onMouseMove={(event)=>handleMouseMove(event)}
onMouseOut={aaa()}  >
<foreignObject x={coord[0]} y={coord[1]} height="100" width="100">
  <div>
<h2>X:{coord[0]}</h2>
<h2>Y:{coord[1]}</h2>
</div>
</foreignObject>
    </svg>
  
  );
}

export default App;
