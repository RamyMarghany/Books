import { render, screen } from "@testing-library/react";
import { List } from "./List";

describe(" Test list", () => {
    const listItems = ['item 1', 'item 2', 'item 3'];

    test(" Test list correctly", () => {
        render(<List listContent={listItems} />);
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('renders a list of items correctly ', () => {
        render(<List listContent={listItems} />)
        const listElement = screen.getAllByRole('listitem')
        expect(listElement).toHaveLength(listItems.length)
    })
})