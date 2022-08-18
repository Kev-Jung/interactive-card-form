import "./InputForm.css";

const InputForm = ({ error, label, styles, name, ...otherProps }) => {
  const isError = error[name];
  return (
    <div className={`input-form  ${styles}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`input ${isError.error && "error-border"}`}
        name={name}
        id={name}
        {...otherProps}
      />
      {isError.error && <p className="error-msg">{isError.message}</p>}
    </div>
  );
};

export default InputForm;
