import styled from 'styled-components';

export const FriendListItem = ({friends}) => {
    return (
        friends.map(({ avatar, id, isOnline, name }) => {
           return (
           <Styledli key={id}> 
           <Styledspan isOnline={isOnline}></Styledspan>
           <img className="avatar" src={avatar} alt="User avatar" width="48" />
           <p className="name">{name}</p>
           </Styledli>)
        })
    )
}


const Styledspan = styled.span`
display: inline; 
width: 20px;
height: 20px;
border-radius: 50%;
display: block;

background-color: ${props => props.isOnline? "green" : "red"};
`

const Styledli = styled.li`
    display: flex;
    gap: 30px;
    align-items: center;

`

