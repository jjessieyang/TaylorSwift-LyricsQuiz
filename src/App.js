import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Questionaire } from './components';

const API_URL = 'https://taylorswiftapi.herokuapp.com/get';

function App() {
  const [quote, setQuote] = useState("");
  const [song, setSong] = useState("");
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState("");

// Retrieves random lyric from Taylor Swift Lyrics API
async function getRandomSong() {
  const res = await axios.get(API_URL)
      
  setQuote(res.data.quote);
  setSong(res.data.song);
}

useEffect(() => {
  getRandomSong()
}, []);


// Updates score and 
const handleAnswer = (answer, song) => {
  if (answer === song) {
    setScore(score + 1);
  }

  //setShowAnswer(true);
};

const handleNextQuestion = () => {
  setInput("");
  setShowAnswer(false);
  getRandomSong();
  setCurrentIndex(currentIndex + 1);
}

return (
  <div className='container'>
    {currentIndex === 5 ? (
      <h1 className='text-3xl text-white font-bold'>
        Game ended! Your score is {score}/5!
      </h1>
    ) : (
    <Questionaire
      showAnswer={showAnswer}
      setShowAnswer = {setShowAnswer}
      handleNextQuestion={handleNextQuestion}
      handleAnswer = {handleAnswer}
      setInput = {setInput}
      input = {input}
      message = {message}
      setMessage = {setMessage}
      quote = {quote}
      song = {song}
      />
    )}
  </div>
)}

export default App;
