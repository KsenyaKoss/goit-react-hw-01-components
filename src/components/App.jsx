import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { Friendslist } from './friendslist/FriendsList';
import { Transactions } from './transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />
      <Friendslist friends = {friends}/>
      <Transactions dataTransactions={transactions}/>
    
    </>

  );
};
