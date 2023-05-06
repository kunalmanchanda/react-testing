/* eslint-disable react/prop-types */
import User from './User'

export default function UserList({ users }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody data-testid='users'>
                    {users.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
