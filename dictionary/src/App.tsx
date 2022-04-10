import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { text } from 'stream/consumers';

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefintion] = useState([]);

  const dictionaryApi = async (word: string) => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
      setDefintion(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const form: HTMLFormElement = document.querySelector('#defineform')!;

  form.onsubmit = () => {
    const formData = new FormData(form);
    const text = formData.get('defineword') as string;
    setWord(text);
    return false;
  }
  useEffect(()=>{
      dictionaryApi(word);
  },[word])

  console.log(definition);
  
  return (      
  <div className="App">
    <header>{word}</header>
    <li>{}</li>
  </div> 
);
}

export default App;
