
import React from "react";
import './../styles/App.css';
import { useState } from "react";


const App = () => {
  const [inputText,setInputText] = useState('');
  const[displayTexts,setDisplayText] = useState([]);
  

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    if(inputText.trim() !== ''){
      setDisplayText([...displayTexts ,inputText]);
      setInputText('');
    } 
  }; 

  const handleDelete = (index) => {
    setDisplayText(displayTexts.filter((_, i) => i !== index));
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h4>To-Do List</h4>
        <input type="text" value={inputText} onChange={handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
        <p>
          <ul>
            {displayTexts.map((displayText, index) => (
            <li key={index}>{displayText}
            <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
          </ul>
        </p>
    </div>
  )
}

export default App
