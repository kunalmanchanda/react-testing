/* eslint-disable no-unused-vars */
import { useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

export default function App() {
    const [users, setUsers] = useState([]);
    const onUserAdd = (user) => {
        setUsers([...users, user]);
    }

    return (
        <>
            <UserForm onUserAdd={onUserAdd} />
            <hr />
            <UserList users={users} />
        </>
    )
}
