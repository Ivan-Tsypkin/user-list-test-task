import { useCallback, useState } from "react";

interface InputValues {
  [key: string]: string;
}

export function useFormValidation() {
  // Состояния формы: значения полей, ошибки, состояние валидации
  const [values, setValues] = useState<InputValues>({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Функция обработки полей формы
  const handleChange = (e: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;

    setValues(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState, [name]: input.validationMessage }));
    const form = input.closest("form");
    if (form) {
      setIsFormValid(form.checkValidity());
    }

  }

  // Функция сброса полей формы, ошибок, состояния валидации
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid]
  )

  return {values, handleChange, errors, isFormValid, resetForm, setValues, setErrors, setIsFormValid}
}