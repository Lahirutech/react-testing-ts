import { render, screen } from "@testing-library/react"
import { Application } from "./application"

describe("Applicationm", () => {
    test("renders correctly", () => {
        render(<Application />)
        // const nameElement = screen.getByRole("textBox")
        // expect(nameElement).toBeInTheDocument();

        const location = screen.getByRole("combobox")
        expect(location).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const submit = screen.getByRole("button")
        expect(submit).toBeInTheDocument();
    })
})