import './FriendList.css';
import FriendListItemComp from './FriendsListitem';


import PropTypes from 'prop-types';

function FriendList ({ friends }) {
    return (
        <>
            <ul className='FriendListU'>
            {friends.map((friend) => (
            <FriendListItemComp
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={ friend.name} />
        ))}
          </ul>  
            
      </>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}
export default FriendList;