import Profile from 'components/Profile';
import user from './user.json';
import data from './data.json';
// import friends from './friends.json';
// import TransactionHistory from './transactions.json';
import Statistics from 'components/Statistics';

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

      <Statistics items={data} />
    </div>
  );
}
