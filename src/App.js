import UserCard from 'components/User';
import user from './user.json';

export default function App() {
  return (
    <div>
      <UserCard
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        SumFollowers={user.stats.followers}
        SumViews={user.stats.views}
        SumLikes={user.stats.likes}
      />
    </div>
  );
}
