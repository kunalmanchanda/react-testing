/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import App from './App'

test('can receive a new user and show it on a list', async () => {
    render(<App/>);

    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    })

    const emailInput = screen.getByRole('textbox', { 
        name: /email/i
    })

    await user.click(nameInput)
    await user.keyboard('jane')

    await user.click(emailInput)
    await user.keyboard('jane@jane.com')

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByRole('cell', {name: "jane"})).toBeInTheDocument;
    expect(screen.getByRole('cell', {name: /jane@jane\.com/i})).toBeInTheDocument;
    expect(nameInput?.value).toContain('');
})