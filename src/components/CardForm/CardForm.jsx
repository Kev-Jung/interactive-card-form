import "./CardForm.css";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import { useState } from "react";

const CardForm = ({ setFormSubmitted }) => {
  const [inputField, setInputField] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  console.log("name: ", inputField.name);
  console.log("cardNumber: ", inputField.cardNumber);
  console.log("month: ", inputField.month);
  console.log("year: ", inputField.year);
  console.log("cvc: ", inputField.cvc);

  const [error, setError] = useState({
    name: { error: false, message: "" },
    cardNumber: { error: false, message: "" },
    month: { error: false, message: "" },
    year: { error: false, message: "" },
    cvc: { error: false, message: "" },
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const limitCharacters = (e, limit) => {
    e.target.value = e.target.value.slice(0, limit);
  };

  const checkInputEmpty = (inputField) => {
    for (let key in inputField) {
      if (inputField[key].length === 0) {
        setError((prevState) => {
          return {
            ...prevState,
            [key]: {
              error: true,
              message: "Can't be blank",
            },
          };
        });
      } else if (inputField[key].length > 0) {
        setError((prevState) => {
          return {
            ...prevState,
            [key]: { error: false, message: "" },
          };
        });
      }
    }
  };

  const checkDigitLength = (limit, characters) => {};

  // Check if card number is === 16 characters(numbers)
  // Check that MM and YY are only two numbers long
  // Check that CVC is 3 numbers long

  const validateFormData = (e) => {
    e.preventDefault();
    checkInputEmpty(inputField);
    // checkCharacterLength();

    // setFormSubmitted((state) => !state);
  };

  return (
    <form id="card-form" onSubmit={validateFormData}>
      <InputForm
        error={error}
        styles="four-fr"
        label="Cardholder Name"
        name="name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        onChange={onInputChange}
        onInput={(e) => limitCharacters(e, 35)}
        value={inputField.name}
      />

      <InputForm
        error={error}
        styles="four-fr"
        label="Card Number"
        name="cardNumber"
        type="number"
        placeholder="e.g. 1234 5678 9123 000"
        onChange={onInputChange}
        onInput={(e) => limitCharacters(e, 16)}
        value={inputField.cardNumber}
      />

      <div className=" input-form two-fr">
        <label className="exp-year-label" htmlFor="month">
          Exp. Date (MM/YY)
        </label>
        <div className="exp-year-input">
          <InputForm
            error={error}
            styles="one-fr"
            name="month"
            type="number"
            placeholder="MM"
            onChange={onInputChange}
            onInput={(e) => limitCharacters(e, 2)}
            value={inputField.month}
            // maxLength={2}
          />
          <InputForm
            error={error}
            styles="one-fr"
            name="year"
            type="number"
            placeholder="YY"
            onChange={onInputChange}
            onInput={(e) => limitCharacters(e, 2)}
            value={inputField.year}
          />
        </div>
      </div>

      <InputForm
        error={error}
        styles="two-fr"
        label="Cvc"
        name="cvc"
        type="number"
        placeholder="e.g. 123"
        onChange={onInputChange}
        onInput={(e) => limitCharacters(e, 3)}
        value={inputField.cvc}
      />

      <div className="four-fr">
        <Button text="Confirm" />
      </div>
    </form>
  );
};

export default CardForm;
