import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefintion] = useState<any[]>([]);

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
    <main className="container"
    style={{
      fontSize : 60
    }}>{word}</main>
    <main className="container"
        style={{
          whiteSpace : 'pre-line'
        }}>
      {definition.map((def) => (
        <ul>{def.phonetics.map((phonetics:any) => 
          <p> 
            <i>{phonetics.text ? phonetics.text + "\n": ""}</i>
            {phonetics.audio && phonetics.text ?             
            <audio 
            src = {phonetics.audio}
            controls></audio>: ""}
          </p>)}</ul>
      ))}
    </main>
    <main className="container"
    style={{
      whiteSpace : 'pre-line'
    }}>
      {definition.map((def) => (
        <ul>{def.meanings.map((s: any) =>
          s.definitions.map((d: any) => (
            <p>
            <i>{s.partOfSpeech}</i>
            <li>{d.definition}</li>
            <i>{ d.example ? "Example: " + d.example +"\n": ""}</i>
            <b>{d.synonyms.map((synonym: any) =>  synonym) == "" ? "" : "Synonyms: " + d.synonyms.join(', ') +"\n"}</b>
            <b>{d.antonyms.map((antonyms: any) =>  antonyms) == "" ? "" : "Antonyms: " + d.antonyms.join(', ') +"\n"}</b>
            </p>
            )))}
          </ul>
      ))}
    </main>
</div> 
);
}

export default App;
