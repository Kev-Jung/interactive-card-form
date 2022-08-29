import "./CardForm.css";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import { useEffect, useState } from "react";

const CardForm = ({ setFormSubmitted, inputField, setInputField }) => {
  // ----------- State Variables -----------
  const [error, setError] = useState({
    name: { error: false, message: "" },
    cardNumber: { error: false, message: "" },
    month: { error: false, message: "" },
    year: { error: false, message: "" },
    cvc: { error: false, message: "" },
  });

  const [renderCount, setRenderCount] = useState(0);
  // ----------------------------------------

  // ----------- Use Effect (checks if form values are ready for submission w/ no errors) -----------
  useEffect(() => {
    if (renderCount >= 1) {
      const errorArray = [];
      for (let key in error) {
        errorArray.push(error[key].error);
      }
      const isSubmissionClean = errorArray.every(
        (errorExists) => errorExists === false
      );
      isSubmissionClean && setFormSubmitted((state) => !state);
    } else {
      setRenderCount((prevCount) => prevCount + 1);
    }
  }, [error]);
  // --------------------------------------------------------------------------------------------------

  // ----------- Input Field handler functions -----------
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const limitCharacters = (e, limit) => {
    e.target.value = e.target.value.slice(0, limit);
  };
  // ------------------------------------------------------

  const createErrorMessage = (key, error, message) => {
    setError((prevError) => {
      return {
        ...prevError,
        [key]: { error, message },
      };
    });
  };

  const checkInputLength = (limit, key) => {
    // Checks if any field is blank
    const inputLength = inputField[key].length;
    if (inputLength === 0) {
      createErrorMessage(key, true, "* Required.");
      // 1. Checks if any fields are not blank
      // 2. if field does not meet the required length
      // 3. if the field is not "name" (because name does not need to meet the length requimrent)
    } else if (inputLength !== 0 && key !== "name" && inputLength !== limit) {
      console.log(key);
      createErrorMessage(key, true, `Req: ${limit} char.`);
      // If no errors, return default no error state
    } else {
      createErrorMessage(key, false, "");
    }
  };

  const checkFieldType = (dataType, key) => {
    const stringOnlyRegEx = /^[a-zA-Z\s]*$/;
    const numbersOnlyRegEx = /^[0-9\s]*$/;
    const inputValue = inputField[key];
    if (dataType === "string") {
      stringOnlyRegEx.test(inputValue)
        ? checkInputLength(25, key)
        : createErrorMessage(key, true, "Wrong format, characters only");
    } else {
      numbersOnlyRegEx.test(inputValue)
        ? checkInputLength(16, key)
        : createErrorMessage(key, true, "Wrong format, numbers only");
    }
  };

  const validateFormData = (e) => {
    e.preventDefault();
    for (let key in inputField) {
      switch (key) {
        case "name":
          checkFieldType("string", key);
          break;
        case "cardNumber":
          checkFieldType("number", key);
          break;
        case "month":
        case "year":
          checkInputLength(2, key);
          break;
        case "cvc":
          checkInputLength(3, key);
          break;
        default:
          break;
      }
    }
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
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={onInputChange}
        onInput={(e) => limitCharacters(e, 16)}
        value={inputField.cardNumber}
      />

      <div className="input-form two-fr">
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
