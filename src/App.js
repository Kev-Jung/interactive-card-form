import './App.css';
import MobileBackground from './components/MobileBackground/MobileBackground';
import CardForm from './components/CardForm/CardForm';
import FormSubmit from './components/FormSubmit/FormSubmit';
import Footer from './components/Footer/Footer';
import {useState} from 'react'

  const initialFormValues = {
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  }

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inputField, setInputField] = useState(initialFormValues);

  return (
    <div className='app-container'>
      <MobileBackground inputField={inputField} />
      {formSubmitted 
      ? 
      <FormSubmit setFormSubmitted={setFormSubmitted} setInputField={setInputField} initialFormValues={initialFormValues}/> 
      : 
      <CardForm setFormSubmitted={setFormSubmitted} inputField={inputField} setInputField={setInputField} />}
      <Footer />
    </div>
  );
}

export default App;
