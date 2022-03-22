export default interface FormInputProps {
  addLabelClass: string;
  labelName: string;
  labelHtmlFor: string;
  inputType: string;
  addInputClass: string;
  inputName: string;
  inputId: string;
  inputPlaceholder: string;
  isDisabled: boolean;
  isRequired: boolean;
  inputValue: string;
  inputOnChange: (e: { target: HTMLInputElement | HTMLTextAreaElement; }) => void;
}