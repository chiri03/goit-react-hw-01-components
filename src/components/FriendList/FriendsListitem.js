import PropTypes from 'prop-types';
import './FriendList.css';


function FriendListItemComp({ avatar, isOnline, name, id}) { 
    return <div className='FriendsListItem' key={id}>
                {isOnline ? <div className='FriendsListStatusOnline'/>: <div className='FriendsListStatusOffline'/> }
                <img className='FriendsListImage' src={avatar} alt={name} />
                <p>{name}</p>
            </div>
}

FriendListItemComp.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default FriendListItemComp;