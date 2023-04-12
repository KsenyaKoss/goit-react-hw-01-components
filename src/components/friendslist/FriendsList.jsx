import { FriendListItem } from "./FriendListItem";
import css from './FriendsList.module.css'
import PropTypes from 'prop-types'

export const Friendslist = ({friends}) => {
    return (
        <ul className={css.friends_list}>
            {friends.map(friend => {
                return (
                    <FriendListItem friend={friend} key={friend.id} />
                )
            })}
        </ul>
    )
}


Friendslist.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
             isOnline: PropTypes.bool,
             name: PropTypes.string,
             id: PropTypes.number,
        })
    )
}