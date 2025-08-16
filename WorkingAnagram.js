import { useState } from 'react';
import Anagram from './anagram';
import MaybeChecker from './maybe_checker';
import './App.css';

function App() {
  const [data, setData] = useState("east");
  const [allData, setAllData] = useState(["east"]);
  
  function handleSubmit(e) {
    let maybe_words = Anagram(data);
    let wordList = MaybeChecker(maybe_words, allData);
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    let anagram = formJson["anagram"];

    if (new Set(wordList).has(anagram)) {
      setData(anagram);
      setAllData([...allData, anagram]);
      // set game page to powerup choices
    } else {
      console.log("Game Over");
      //set game page to gaem over
    }
  }

  function AnagramPage() {
    return (
      <>
        <h4>Anagram</h4>
        <h4>Here is the current word: {data}</h4>
        <p>Used words: {allData}</p>
        <form onSubmit={handleSubmit}>
          <label> Enter an anagram for "{data}":<br></br>
            <input name="anagram" defaultValue="" />
          </label>
          <button type="submit">Submit anagram</button>
        </form>
      </>
    )
  }

  return (
    <>
      <AnagramPage />
    </>
  )
}

export default App;
