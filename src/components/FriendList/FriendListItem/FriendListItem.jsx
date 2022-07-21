import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnLine, id }) => {
    return (<li className="item" key={id}>
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>);
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
