import { useState } from "react"; 
import "./App.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState(""); 
  const [key, setKey] = useState(""); 

  const submit = (event) => {
    event.preventDefault(); 

    axios.post(
      "https://backend.place.yildizskylab.com/api/whitelistedMails/add",
      { mail: email, key: key }
    )
    .then(response => {
      console.log("Email submitted successfully:", response);
    })
    .catch(error => {
      console.error("Error submitting email:", error);
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); 
  };

  
  const handleKeyChange = (event) => {
    
      setKey(event.target.value); 
    
  };

  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input className='Input' type='email' placeholder='E-Posta' value={email} onChange={handleEmailChange}></input>
        <input className='Input' type='password' placeholder='Parola' value={key} onChange={handleKeyChange}></input>
        <button className="Button" type='submit'>Button</button>
      </form>
    </div>
  );
}

export default App;
