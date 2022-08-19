import './App.css';
import MobileBackground from './components/MobileBackground/MobileBackground';
import CardForm from './components/CardForm/CardForm';
import FormSubmit from './components/FormSubmit/FormSubmit';
import {useState} from 'react'

  // <footer>
  //   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  //   Coded by <a href="https://github.com/Kev-Jung">Kevin Jung</a>.
  // </footer>

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const [inputField, setInputField] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className='app-container'>
      <MobileBackground inputField={inputField} />
      {formSubmitted 
      ? 
      <FormSubmit setFormSubmitted={setFormSubmitted} /> 
      : 
      <CardForm setFormSubmitted={setFormSubmitted} inputField={inputField} setInputField={setInputField} />}
    </div>
  );
}

export default App;
