import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (<ul className={style.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        ))}
    </ul>);
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;