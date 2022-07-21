import PropTypes from 'prop-types';
import style from './Profile.module.css';

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
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{SumFollowers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{SumViews}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{SumLikes}</span>
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
