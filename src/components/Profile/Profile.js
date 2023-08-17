import PropTypes from "prop-types";
import './Profile.css';


function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
   <div className="profile">
   <div className="description">
    <img 
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className='usernam'>{username}</p>
    <p className='tag'>@{tag}</p>
    <p className='location'>{location}</p>
  </div>

    <ul className="stats">
     <div className="list" >         
    <li className="ListItem ">
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className="ListItem ">
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className="ListItem ">
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
      </li>
      </div>
  </ul>
</div>
    );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

export default Profile;