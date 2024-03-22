import { useState } from "react"; 
import "./App.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState(""); 

  const submit = (event) => {
    event.preventDefault(); 

    axios.post(
      "https://backend.place.yildizskylab.com/api/whitelistedMails/add",
      { mail: email } 
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

  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input className='Input' type='email' placeholder='E-Posta' value={email} onChange={handleEmailChange}></input>
        <button type='submit'>Button</button>
      </form>
    </div>
  );
}

export default App;
