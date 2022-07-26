import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={styles.status} style={{ backgroundColor: isOnline ? 'green':'red'}}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
