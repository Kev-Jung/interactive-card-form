import "./Button.css";

const Button = ({ text, setFormSubmitted }) => {
  return (
    <button
      onClick={() => {
        setFormSubmitted && setFormSubmitted((state) => !state);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
