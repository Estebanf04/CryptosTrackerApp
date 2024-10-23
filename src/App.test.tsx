import {beforeEach, describe, expect, test} from 'vitest'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'


describe("AppComponent", () => {

    beforeEach(() => {
        render(<App/>);
    })

    test('The Title is rendered', () => {
        expect(screen.queryByText("Cryptocurrency Quoter")).toBeDefined()
    });

    test('The Form is rendered', () => {
        const button = screen.getByText('Quote')
        expect(button).toBeDefined()
    });

    test('The Results is rendered When We click the submit button', () => {
        const button = screen.getByText('Quote')
        fireEvent.click(button)
        expect(screen.queryByText("Lowest price")).toBeDefined()
    });

    test('The Footer is rendered', () => {
        expect(screen.getByText('© 2024 - Cryptos Tracker')).toBeDefined()
        expect(screen.getByText('by')).toBeDefined()
    });

})
