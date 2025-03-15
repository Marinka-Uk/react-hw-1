import styled from  "./FriendList.module.css"

export const FriendList = ({ friends }) => {
  return  (
    <ul className={styled.list}>
{friends.map((friend)=>{
  return  <li className={styled.item}>
  <span className={styled.status}>{friend.isOnline}</span>
     <img className={styled.avatar} src={friend.avatar} alt="User avatar" width="48" />
   <p className={styled.name}>{friend.name}</p>
   </li>
    })}
    </ul>
    
  );
};
