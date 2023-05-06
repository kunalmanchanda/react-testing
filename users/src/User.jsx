/* eslint-disable react/prop-types */
export default function User({ user }) {
    const { name, email } = user;

    return (
        <tr key={name}>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    )
}
