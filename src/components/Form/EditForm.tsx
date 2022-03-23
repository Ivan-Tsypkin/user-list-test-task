import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import { useFormValidation } from "../../hooks/useForm";
import { useEffect } from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import EditFormProps from "../../interfaces/EditFormProps";

const EditForm: React.FC<EditFormProps> = ({ users, isEditing, onFormSubmit }) => {

  let { id = "" } = useParams();  // Получаем id пользователя из параметра строки url
  const currentUser = users.find(user => user.id === +id);  // Находим конкретного пользователя

  // Используем хук обработчик формы
  const {values,
    setValues,
    handleChange,
    isFormValid,
  } = useFormValidation();

  // Устанавливаем начальные значения полей формы
  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        userName: currentUser.username,
        email: currentUser.email,
        street: currentUser.address.street,
        city: currentUser.address.city,
        zipCode: currentUser.address.zipcode,
        phone: currentUser.phone,
        website: currentUser.website,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Обработчик отправки формы
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onFormSubmit(values);
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <div className="edit-form__box">
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="name"
          labelName="Name"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="name"
          inputId="name"
          inputPlaceholder="Введите имя"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.name || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="userName"
          labelName="User name"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="userName"
          inputId="userName"
          inputPlaceholder="Введите ник"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.userName || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="email"
          labelName="E-mail"
          inputType="email"
          addInputClass="edit-form__input"
          inputName="email"
          inputId="email"
          inputPlaceholder="Введите e-mail"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.email || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="street"
          labelName="Street"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="street"
          inputId="street"
          inputPlaceholder="Введите улицу"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.street || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="city"
          labelName="City"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="city"
          inputId="city"
          inputPlaceholder="Введите город"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.city || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="zipCode"
          labelName="Zip code"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="zipCode"
          inputId="zipCode"
          inputPlaceholder="Введите индекс"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.zipCode || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="phone"
          labelName="Phone"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="phone"
          inputId="phone"
          inputPlaceholder="Введите номер телефона"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.phone || ""}
          inputOnChange={handleChange}
        />
        <FormInput 
          addLabelClass="edit-form__input-label"
          labelHtmlFor="website"
          labelName="Website"
          inputType="text"
          addInputClass="edit-form__input"
          inputName="website"
          inputId="website"
          inputPlaceholder="Введите номер телефона"
          isDisabled={!isEditing}
          isRequired={true}
          inputValue={values.website || ""}
          inputOnChange={handleChange}
        />
        <FormTextArea
          addLabelClass="edit-form__input-label"
          labelHtmlFor="comment"
          labelName="Comment"
          addInputClass="edit-form__input edit-form__input_textarea"
          inputName="comment"
          inputId="comment"
          rows={4}
          isDisabled={!isEditing}
          isRequired={false}
          inputOnChange={handleChange}
        />
      </div>
      <Button buttonText="Отправить" addClass={`edit-form__button ${(isFormValid && isEditing) ? "edit-form__button_active" : "button_disabled"}`} buttonType="submit" />
    </form>
  );
}

export default EditForm;