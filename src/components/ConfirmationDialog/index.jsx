import "./ConfirmationDialog.css";

export function ConfirmationDialog({
  message,
  primaryColor,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="confirmation-dialog">
      <p className="confirmation-dialog-message">
        {message}{" "}
        <span
          className="confirmation-dialog-title"
          style={{ color: primaryColor }}
        ></span>
      </p>
      <button className="confirmation-yes" onClick={onConfirm}>
        SIM
      </button>
      <button className="confirmation-no" onClick={onCancel}>
        NÃO{" "}
      </button>
    </div>
  );
}
