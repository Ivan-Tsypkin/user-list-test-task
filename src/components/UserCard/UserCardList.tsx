import UserCard from "../UserCard/UserCard";
import User from "../../interfaces/User";

const UserCardList: React.FC<{users: Array<User>}> = ({ users }) => {
  return (
    <>
      <ul className="users__list">
        {users.map((user: User) => {
          return <UserCard 
              key={user.id} 
              userName={user.name} 
              userCity={user.address.city} 
              userCompanyName={user.company.name} 
              userId={user.id} 
            />
        })}
      </ul>
      <span className="users__found-number">{`Найдено ${users.length} пользователей`}</span>
    </>
  );
}

export default UserCardList;