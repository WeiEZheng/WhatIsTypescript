import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [definition, setDefintion] = useState([]);
  const dictionaryApi =async (word:String) => {
    try {
      const data = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
      setDefintion(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const form: HTMLFormElement = document.querySelector('#defineform')!;

  useEffect(()=>{
    form.onsubmit = () => {
      const formData = new FormData(form);
      const text = formData.get('defineword') as string;
      dictionaryApi(text);
    };
  },[])
  
  // const form: HTMLFormElement = document.querySelector('#defineform');

  // form.onsubmit = () => {
  //   const formData = new FormData(form);

  //   console.log(formData);
  //   const text = formData.get('defineword') as string;
  //   console.log(text);
  //   return false; // prevent reload
  // }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
