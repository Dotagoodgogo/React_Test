import './App.css';
import SearchBar from './searchbar';
import {useState} from "react"

function App() {
  const [data,setData] = useState({});

  const updateData = (searchParams) =>{
    setData(searchParams);
  };

  return (
    <div className='App'>
      <SearchBar callback={updateData}/>
      <p>{["data"] in data ? data["data"]: "No Data to display"}</p>
    </div>
  );
}


export default App;
