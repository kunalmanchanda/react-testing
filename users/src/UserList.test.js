/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

describe("UserList Tests", () => {
    const users= [
        {id: "jane", name: "jane", email: "jane@jane.com"},
        {id: "sam", name: "sam", email: "sam@sam.com"}   
    ]

    test("render one row per user", async () => {
        render(<UserList users={users} />);

        expect(screen.getAllByRole('row')).toHaveLength(3)
        expect(within(screen.getByTestId('users')).getAllByRole('row')).toHaveLength(2)
    })
    
    test("render the name & email of each user", async () => {
        render(<UserList users={users} />);

        // screen.logTestingPlaygroundURL();

        for(let user of users) {
            expect(await screen.getByRole('cell', { name: user.name})).toBeInTheDocument;
            expect(await screen.getByRole('cell', { name: user.email})).toBeInTheDocument;   
        }
    })

})