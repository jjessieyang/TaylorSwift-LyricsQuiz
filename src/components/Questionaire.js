import React from 'react'

// Clears the input field after clicking "Submit" button
function handleSubmit() {
    document.getElementById("input").value = ""
}



const allLowerCase = (str) => {
    return str.toLowerCase();
};

const handleEnter = e => {
    e.preventDefault();
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleEnter();
    }
  };

const Questionaire = ({
    showAnswer,
    setShowAnswer,
    handleNextQuestion,
    handleAnswer,
    setInput,
    input,
    setMessage,
    message,
    quote,
    song,
}) => { return (
    <div className = 'flex flex-col' >
        <div className = 'bg-white text-purple-800 p-10 rounded-lg shadow-md' >
            <h1>What song is this from?</h1>
            <h2 className = 'text-2xl' dangerouslySetInnerHTML = {{ __html: quote}} />

            { /* Receives user's answer and sets input to their answer */ }
            <form onSubmit={handleEnter}>
            <input 
            id = "input" 
            autoFocus
            style = {{ border: '2px solid', borderColor: 'purple', padding: '3px', marginRight: '6px', borderRadius: '5px' }} 
            type = "text" 
            onChange = {(e) => {
                setInput(e.target.value)
            }} 
            onKeyPress = {handleKeypress}/>

            { /* Submit Button: 
                    Lets user know if they were correct (case-insensitive)
                    Clears input field after clicking
                    Updates score if correct answer */ }
            <button type = "submit" 
            style = {{ border: '2px solid', borderColor: 'purple', padding: '3px', borderRadius: '5px', marginTop: '7px' }} 
            onClick = {() => {
                handleSubmit()
                setShowAnswer(true)
            
                if (allLowerCase(input) === allLowerCase(song)){
                    setMessage("Correct!")
                    handleAnswer(allLowerCase(input), allLowerCase(song))
                } else {
                    setMessage(`Wrong! Song was: "${song}" | Your answer: ${input}`)
                }
            }}>Submit</button>
            </form>

            <p>{message}</p>
        </div>
        
        
        { /* Next Question Button: 
                Resets message
                Resets "Next Question" button so it's hidden for the next question */ }
        {showAnswer && (
        <button onClick = {(async ()=>{
            setMessage("")
            handleNextQuestion(false)
        })} 
            className = {`ml-auto mt-6 bg-purple-700 text-white p-4 font-semibold rounded shadow`} >
            Next Question</button>
        )}
    </div>
    
)
};


export default Questionaire;