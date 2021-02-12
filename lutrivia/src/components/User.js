import React from 'react' 

const User = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.onChange} name="userName" type="text" value={props.userName} placeholder={"Name"}/>
            <input type="Submit" value="Submit Score" />
        </form>
    )
}

export default User 