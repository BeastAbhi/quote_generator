import { useState } from 'react';
import './App.css';
import Quote from './component/Quote';
function App() {
  let colors = ['#d4fc79','#96e6a1','#8360c3','#2ebf91','#8e2de2','#4a00e0','#fffbd5','#b20a2c','#fc5c7d','#6a82fb','#c6ffdd','#fbd786','#f7797d','#00b4db','#0083b0','#434343','black','#00cdac','#8ddad5','#0f0c29','#302b63','#24243e','#00b09b','#96c93d','rgb(242, 112, 156)','rgb(255, 148, 114)','#0099f7','#f11712']
  const [colour, setColour] = useState(['#d4fc79','#96e6a1','#8360c3'])

  function rand(){
    return(colors[(Math.floor(Math.random() * colors.length))])
  }
  const changeColour = () =>{
    setColour([rand(),rand(),rand()])
  }

  return (
    <div className="App" style={{height:"100%",width:"100%", backgroundImage:`linear-gradient(-20deg,${colour[0]},${colour[1]},${colour[2]})`}}>
      <Quote changeColour={changeColour}/>
    </div>
  );
}

export default App;
