import css from './FriendsList.module.css'

export const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend

        
    return (
           <li className={css.li} > 
           <span className={isOnline? css.green : css.red} ></span>
           <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
           <p className={css.name}>{name}</p>
           </li>
        
    )
}
