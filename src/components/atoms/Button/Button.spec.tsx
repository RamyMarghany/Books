import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from './Button';

describe('Test Card', () => {
    test(' Should render Card Correctly', () => {
        render(<Button> Button</Button>);
        expect(screen.getByText('Button')).toBeDefined();
    });

    test('Execuste Increment fun', () => {
        const onClickHandlerButton = jest.fn()
        render(<Button onClickHandler={onClickHandlerButton}>Button</Button>)
        const incrementButton = screen.getByRole('button', { name: 'Button' })
        fireEvent.click(incrementButton)
        expect(onClickHandlerButton).toBeCalled()
    })
})