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

  const checkInputLength = (limit, key) => {
    const inputLength = inputField[key].length;
    if (inputLength === 0) {
      setError((prevError) => {
        return {
          ...prevError,
          [key]: { error: true, message: "Can't be blank" },
        };
      });
    } else if (inputLength !== 0 && inputLength !== limit && key !== "name") {
      setError((prevError) => {
        return {
          ...prevError,
          [key]: { error: true, message: `Req: ${limit} char` },
        };
      });
    } else {
      setError((prevError) => {
        return {
          ...prevError,
          [key]: { error: false, message: "" },
        };
      });
    }
  };

  const checkForErrors = () => {
    const errorArray = [];
    for (let key in error) {
      errorArray.push(error[key].error);
    }
    console.log("error array: ", errorArray);
    const isSubmissionClean = errorArray.every(
      (errorExists) => errorExists === false && true
    );
    isSubmissionClean === true && setFormSubmitted((state) => !state);
  };

  const validateFormData = () => {
    for (let key in inputField) {
      switch (key) {
        case "name":
          checkInputLength(35, key);
          break;
        case "cardNumber":
          checkInputLength(16, key);
          break;
        case "month":
        case "year":
          checkInputLength(2, key);
          break;
        case "cvc":
          checkInputLength(3, key);
          break;
      }
    }
  };

  return (
    // <form id="card-form" onSubmit={validateFormData}>
    <form
      id="card-form"
      onSubmit={(e) => {
        e.preventDefault();
        validateFormData();
        checkForErrors();
        console.log("done");
      }}
    >
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
