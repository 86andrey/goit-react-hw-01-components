import PropTypes from 'prop-types';


const Profile = ({
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

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  SumFollowers: PropTypes.number.isRequired,
  SumViews: PropTypes.number.isRequired,
  SumLikes: PropTypes.number.isRequired,
};

export default Profile;
