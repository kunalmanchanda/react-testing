/* eslint-disable react/prop-types */
import { useState } from "react"

export default function UserForm({ onUserAdd }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onUserAdd({ id: name, name, email });
        setName('');
        setEmail('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ margin: '10px 0', display: "flex", flexDirection: "column", gap: '5px', width: "150px" }}>
                <div style={{ margin: '10px 0', display: 'flex', gap: '10px', flexDirection: "column" }}>
                    <label htmlFor='name'>Name</label>
                    <input type="name" name="name" id="name" placeholder="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div style={{ margin: '10px 0', display: 'flex', gap: '10px', flexDirection: "column" }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div style={{ margin: '10px 0', display: 'flex', gap: '10px', flexDirection: "column" }}>
                    <button type='submit'>Add User</button>
                </div>
            </form>
        </>
    )
}
