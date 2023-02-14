import logo from './logo.svg';
import './App.css';
import Image from "./assets/5.jpg";
function App() {
  const x = 10;
  var text;

  if (x == 1){
    text ="equall";

  }else{
text ="not equall";
  }

  return (
  <div className= 'App' > 
  <h1>hello</h1> 
  <p>This is paragraph {5+5}</p>
  <h3>{10+10}</h3>
  <img src={Image} alt="pic" />
  <h2>{text}</h2>
  <h2>{x>10 ? "greater" : "lesser"}</h2>
  </div>
     
  ); 
}

export default App;
