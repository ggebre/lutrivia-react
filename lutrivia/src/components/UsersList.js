import React from 'react'


const UsersList = (props) => {
    return props.users.map(user => <div key={user.name}><p><strong>Name: </strong>{user.name}   <strong>Score: </strong>{user.score}</p></div>)
} 
export default UsersList