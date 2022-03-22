import React from "react";
import FormTextAreaProps from "../../interfaces/FormTextAreaProps";

const FormTextArea: React.FC<FormTextAreaProps> = ({ 
  addLabelClass, 
  labelName, 
  labelHtmlFor, 
  addInputClass, 
  inputName, 
  inputId,
  rows, 
  isDisabled,
  isRequired,
  inputOnChange
}) => {
  return (
    <>
      <label className={`form-input-label ${addLabelClass}`} htmlFor={`${labelHtmlFor}`}>{labelName}</label>
      <textarea
        className={`form-input ${addInputClass}`}
        name={inputName}
        id={inputId}
        rows={rows}
        disabled={isDisabled}
        required={isRequired}
        onChange={inputOnChange}
      />
    </>
  );
}

export default FormTextArea;