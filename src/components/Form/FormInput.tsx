import React from "react";
import FormInputProps from "../../interfaces/FormInputProps";

const FormInput: React.FC<FormInputProps> = ({ 
  addLabelClass, 
  labelName, 
  labelHtmlFor, 
  inputType, 
  addInputClass, 
  inputName, 
  inputId, 
  inputPlaceholder, 
  isDisabled,
  isRequired,
  inputValue,
  inputOnChange
}) => {
  return (
    <>
      <label className={`form-input-label ${addLabelClass}`} htmlFor={`${labelHtmlFor}`}>{labelName}</label>
      <input
        type={inputType}
        className={`form-input ${addInputClass}`}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        disabled={isDisabled}
        required={isRequired}
        value={inputValue}
        onChange={inputOnChange}
        />
    </>
  );
}

export default FormInput;