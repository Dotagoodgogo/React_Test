import './App.css';
import Info  from "./info.js";

function App() {
  return (
    <div className='App'>
      <Info />
      <Additem />
    </div>
  );
}




function Additem() {
  const value = "Tim is great."
  return(
    <form>
      <label for = "text-form">Type something</label>
      <input type = "text" value = {value} id = "text-form" />
    </form>
  );  
}

export default App;
