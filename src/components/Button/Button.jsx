import "./Button.css";

const Button = ({
  text,
  setFormSubmitted,
  setInputField,
  initialFormValues,
}) => {
  const resetForm = () => {
    setFormSubmitted((state) => !state);
    setInputField(initialFormValues);
  };

  return (
    <button
      onClick={() => {
        setFormSubmitted && resetForm();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
