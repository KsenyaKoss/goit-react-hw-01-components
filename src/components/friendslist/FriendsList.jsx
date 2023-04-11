import { FriendListItem } from "./FriendListItem";


export const Friendslist = ({friends}) => {
    return (
        <ul className="friend-list">
        <FriendListItem friends={friends}/>
        </ul>
    )
}