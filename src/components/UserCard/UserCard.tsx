import { Link } from "react-router-dom";
import UserCardProps from "../../interfaces/UserCardProps";

const UserCard: React.FC<UserCardProps> = ({ userName, userCity, userCompanyName, userId }) => {
  return (
    <li className="users__list-item card">
      <div className="card__about-user">
        <ul className="card__user-info-list">
          <li className="card__user-info-list-item">
            <span className="card__user-info-field">ФИО:</span>
            <span className="card__user-info-description">{userName}</span>
          </li>
          <li className="card__user-info-list-item">
            <span className="card__user-info-field">Город:</span>
            <span className="card__user-info-description">{userCity}</span>
          </li>
          <li className="card__user-info-list-item">
            <span className="card__user-info-field">Компания:</span>
            <span className="card__user-info-description">{userCompanyName}</span>
          </li>
        </ul>
      </div>
      <div className="card__more-button">
        <Link to={`/user/${userId}`} className="card__more-button-link">Подробнее</Link>
      </div>
    </li>
  );
}

export default UserCard;