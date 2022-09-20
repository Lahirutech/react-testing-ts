import { render, screen } from "@testing-library/react"
import Great from "./greet"


describe('Greet', () => {
    test('testing the greet rendering', () => {
        render(<Great />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    test('testing the greet rendering with name', () => {
        render(<Great name="Lanka" />)
        const textElement = screen.getByText('Hello Lanka')
        expect(textElement).toBeInTheDocument() 
    })
})
