import user from "../profile.json"
import { Profile } from "./Profile/Profile";
import data from "../tag.json"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import friends from "../friends.json"
import transactions from "../transactions.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return ( <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />

</>
  );
};
