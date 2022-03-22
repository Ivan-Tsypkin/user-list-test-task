import { Route, Routes } from "react-router-dom";
import Button from "../Button/Button";

const Header: React.FC<{ setIsEditing: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsEditing }) => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h1 className="users__title">Список пользователей</h1>
        </>
      } />

      <Route path="/user/*" element={
        <>
          <div className="users__header">
            <h1 className="users__title">Профиль пользователя</h1>
            <Button buttonText="Редактировать" buttonType="button" onClick={() => setIsEditing(true)} />
          </div>
        </>
      } />
    </Routes>
  );
}

export default Header;