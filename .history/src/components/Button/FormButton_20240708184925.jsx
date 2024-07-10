import "./FormButton.css";

export function FormButton({ type, label, onClick, disabled, buttonType }) {
  return (
    <button
      type={type}
      className={`form-button ${buttonType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
