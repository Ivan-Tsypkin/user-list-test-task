import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getUsers } from "../../utils/usersApi";
import Button from "../Button//Button";
import Header from "../Header/Header";
import EditForm from "../Form/EditForm";
import UserCardList from "../UserCard/UserCardList";
import Preloader from "../Preloader/Preloader";
import User from "../../interfaces/User";

const App: React.FC = () => {
  const [users, setUsers] = useState<Array<User>>([]); //  Данные пользователей
  const [isLoading, setIsLoading] = useState(true);    // Состояние загрузки страницы
  const [isErrorLoading, setIsErrorLoading] = useState(false);  // Состояние ошибки загрузки данных
  const [isEditing, setIsEditing] = useState(false);  //Состояние редактирования профиля пользователя
  let location = useLocation();

  // Сброс редактирования при переходе на другую страницу
  useEffect(() => {
    setIsEditing(false);
  }, [location])

  // Получение данных пользователей
  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch(error => {
        setIsErrorLoading(true);
        console.log(error);
      });
  }, [])

  // Сортировка списка пользователей по городу или по названию компании
  const sortUsers = (sortBy: string) => {
    switch(sortBy) {
      case "city":
        setUsers([...users].sort((a, b) => {return a.address.city.localeCompare(b.address.city)}));
        break
      case "companyName":
        setUsers([...users].sort((a, b) => {return a.company.name.localeCompare(b.company.name)}));
        break
    }
  }

  // Функция отправки данных формы
  const handleFormSubmit = (value: Object) => {
    console.log(JSON.stringify(value));
    setIsEditing(false);
  }

  return (
    <div className="page">
      <div className="main">
        <div className="sort">
          <h2 className="sort__heading">Сортировка</h2>
          <Button buttonText="По городу" buttonType="button" onClick={() => sortUsers("city")} />
          <Button buttonText="По компании" buttonType="button" onClick={() => sortUsers("companyName")} />
        </div>
        <div className="users">
        {isLoading
          ? 
          <>
            {isErrorLoading ? <h1>"Loading error!"</h1> : <Preloader />}
          </>
          :  
          <>
            <Header setIsEditing={setIsEditing} />
            <Routes>
              <Route path="/" element={<UserCardList users={users} />} />
              <Route path="/user/:id" element={<EditForm users={users} isEditing={isEditing} onFormSubmit={handleFormSubmit}/>} />
            </Routes>
          </>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
