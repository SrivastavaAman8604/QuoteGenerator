import React , {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const[quote,setQuote] = useState("Demo Quote");

  const handlequote = async () => {
    const res  = await axios.get('https://api.quotable.io/random');
    // console.log(data);
    setQuote(res.data.content);
  }

  return (
    <div className='App'>
      <header className="App-header">
        <div  className="box">
          <h3>Quote of the Day</h3>
          <p>{quote}</p>
          <button style={{cursor:"pointer"}} onClick={handlequote}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
