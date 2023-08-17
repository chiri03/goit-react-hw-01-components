import user from './Profile/user.json';
import data from './Statics/data.json';
import Profile from './Profile/Profile';
import Statistics from './Statics/Statics';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';


export const App = () => {

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
    <Statistics title="Upload stats" stats={data} />
  
    <FriendList friends={friends} />;
    </div>

  );
};
