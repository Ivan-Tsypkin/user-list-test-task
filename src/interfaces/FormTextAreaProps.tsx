export default interface FormTextAreaProps {
  addLabelClass: string;
  labelName: string;
  labelHtmlFor: string;
  addInputClass: string;
  inputName: string;
  inputId: string;
  rows: number;
  isDisabled: boolean;
  isRequired: boolean;
  inputOnChange: (e: { target: HTMLInputElement | HTMLTextAreaElement; }) => void;
}