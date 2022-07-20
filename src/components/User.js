import PropTypes from 'prop-types';

const UserCard = ({
  name,
  tag,
  location,
  avatar,
  SumFollowers,
  SumViews,
  SumLikes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{SumFollowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{SumViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{SumLikes}</span>
        </li>
      </ul>
    </div>
  );
};

UserCard.PropTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  SumFollowers: PropTypes.number,
  SumViews: PropTypes.number,
  SumLikes: PropTypes.number,
};

export default UserCard;
