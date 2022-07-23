import Profile from './Profile/Profile';
import  Statistics  from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        SumFollowers={user.stats.followers}
        SumViews={user.stats.views}
        SumLikes={user.stats.likes}
      />
      <Statistics stats={data} title="Upload stats"/>
      <FriendList friends={friends} />
      <TransactionHistory items={items}/>
    </div>
  );
}
