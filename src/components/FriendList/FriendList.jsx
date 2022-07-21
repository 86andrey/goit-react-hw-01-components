import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
        ))}
    </ul>    
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;