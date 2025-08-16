import { useState } from 'react';
import AddLetter from './add_letter';
import Anagram from './anagram';
import ExchangeLetter from './exchange_letter';
import LetterGenerator from './letter_generator';
import MaybeChecker from './maybe_checker';
import RemoveLetter from './remove_letter';
import './App.css';
import starting_words_easy from './starting_words_easy';

function App() {
  const starting_word = starting_words_easy[Math.floor(Math.random() * starting_words_easy.length)]
  const [data, setData] = useState(starting_word);
  const [allData, setAllData] = useState([starting_word]);
  const [currentPage, setPage] = useState(0);

  const contents = {
    "MainMenuPage": 0,
    "PowerupPage": 1,
    "AddLetterPage": 2,
    "AnagramPage": 3,
    "ExchangeLetterPage": 4,
    "RemoveLetterPage": 5,
    "GameOverPage": 6
  };

  function resetGame() {
    const new_word = starting_words_easy[Math.floor(Math.random() * starting_words_easy.length)]
    setData(new_word);
    setAllData([new_word]);
    setPage(0);
  };

  function handleLetter(letter, letter_map) {
    if (letter_map.get(letter).length !== 0) {
      let random_word = letter_map.get(letter)[Math.floor(Math.random() * letter_map.get(letter).length)]
      setData(random_word);
      setAllData([...allData, random_word]);
      setPage(1);
    } else {
      // Game Over
      setPage(6);
    }
  }

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
      setPage(1);
    } else {
      console.log("Game Over");
      setPage(6);
    }
  }

  function AddLetterPage() {
    let items = [];
    let maybe_words = AddLetter(data);
    let wordList = MaybeChecker(maybe_words, allData);
    let letter_map = LetterGenerator(data, wordList, "add");
    let letters = Array.from(letter_map.keys()).sort();

    let map_string = "";
    letter_map.forEach (function(value, key) {
      map_string += key + ': ' + value.join(", ") + " | ";
    })

    for (let tl of letters) {
      items.push(<button 
      className='playButton'
      key={letters.indexOf(tl)}
      value={tl}
      onClick={() => handleLetter(tl, letter_map)}
      >
        {tl}
      </button>)
    }

    return (
    <>
      <h4>Here is the current word: {data}</h4>
      
      <h4>Add letters </h4>
      Possible words (including used words): {maybe_words.join(" | ")}<br></br>
      Used words: {allData.join(" | ")}<br></br>
      Possible words (not including used words): {wordList.join(" | ")}<br></br>
      Letter choices: {letters.join(", ")}<br></br>
      Letter map: {map_string}<br></br>
      {items}
    </>
   );
  }

  function AnagramPage() {
    return (
      <>
        <h4>Anagram</h4>
        <h4>Here is the current word: {data}</h4>
        <p>Used words: {allData.join(" | ")}</p>
        <form onSubmit={handleSubmit}>
          <label> Enter an anagram for "{data}":<br></br>
            <input name="anagram" defaultValue="" />
          </label>
          <button type="submit">Submit anagram</button>
        </form>
      </>
    )
  }
  
  function ExchangeLetterPage() {
    let items = [];
    let maybe_words = ExchangeLetter(data);
    let wordList = MaybeChecker(maybe_words, allData);
    let letter_map = LetterGenerator(data, wordList, "exchange");
    let letters = Array.from(letter_map.keys()).sort();

    let map_string = "";
    letter_map.forEach (function(value, key) {
      map_string += key + ': ' + value.join(", ") + " | ";
    })

    for (let tl of letters) {
      items.push(<button 
      className='playButton'
      key={letters.indexOf(tl)}
      value={tl}
      onClick={() => handleLetter(tl, letter_map)}
      >
        {tl}
      </button>)
    }

    return (
    <>
      <h4>Here is the current word: {data}</h4>
      
      <h4>Add letters </h4>
      Possible words (including used words): {maybe_words.join(" | ")}<br></br>
      Used words: {allData.join(" | ")}<br></br>
      Possible words (not including used words): {wordList.join(" | ")}<br></br>
      Letter choices: {letters.join(", ")}<br></br>
      Letter map: {map_string}<br></br>
      {items}
    </>
   );
  }

  function GameOverPage() {
    return (
      <>
        <h4>GAME OVER</h4>
        <p>You lost on this word: {data}</p>
        <p>These are the words you used: {allData.join(" | ")}</p>
        <p>You scored {allData.length} points!</p>
          <button onClick={() => resetGame()}>Back to main menu</button>
      </>
    )
  }

  function PowerupPage() {
    return (
      <>
        <h4>Here is the current word: {data}</h4>
        <p>These are the words have used so far: {allData.join(" | ")}</p>

        <h4>Choose from one of the powerups</h4>
        <button onClick={() => setPage(2)}>Add Letter</button>
        <button onClick={() => setPage(3)}>Anagram</button>
        <button onClick={() => setPage(4)}>Exchange Letter</button>
        <button onClick={() => setPage(5)}>Remove Letter</button>
      </>
    );
  }
  
  function RemoveLetterPage() {
    let items = [];
    let maybe_words = RemoveLetter(data);
    let wordList = MaybeChecker(maybe_words, allData);
    let letter_map = LetterGenerator(data, wordList, "remove");
    let letters = Array.from(letter_map.keys()).sort();

    let map_string = "";
    letter_map.forEach (function(value, key) {
      map_string += key + ': ' + value.join(", ") + " | ";
    })

    for (let tl of letters) {
      items.push(<button 
      className='playButton'
      key={letters.indexOf(tl)}
      value={tl}
      onClick={() => handleLetter(tl, letter_map)}
      >
        {tl}
      </button>)
    }

    return (
    <>
      <h4>Here is the current word: {data}</h4>
      
      <h4>Remove letters </h4>
      Possible words (including used words): {maybe_words.join(" | ")}<br></br>
      Used words: {allData.join(" | ")}<br></br>
      Possible words (not including used words): {wordList.join(" | ")}<br></br>
      Letter choices: {letters.join(", ")}<br></br>
      Letter map: {map_string}<br></br>

      {items}
    </>
   );
  }

  function MainMenuPage() {
    return (
      <>
        <h4>Welcome to word_game! A passion project where I tried to
          learn React!<br></br>
          I hope it plays well and looks good!</h4>

        <h4>You randomly start with a 4-letter word. Your goal is
          to choose an option to grow your word, without reusing any words!
        </h4>
        <button onClick={() => setPage(1)}>Play Game</button>
      </>
    )
  }

  switch(currentPage) {
    case 0:
      return (<><MainMenuPage /></>);
    case 1:
      return (<><PowerupPage /></>);
    case 2:
      return (<><AddLetterPage /></>);
    case 3:
      return (<><AnagramPage /></>);
    case 4:
      return (<><ExchangeLetterPage /></>);
    case 5:
      return (<><RemoveLetterPage /></>);
    case 6:
      return (<><GameOverPage /></>);
    default:
      return (<><h1>ERROR. REFRESH PAGE</h1></>)
  }
}

export default App;
