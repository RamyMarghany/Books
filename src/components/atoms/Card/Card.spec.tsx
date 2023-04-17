import { render, screen } from "@testing-library/react";
import { Card } from './Card';

describe('Test Card', () => {
    test(' Should render Card Correctly', () => {
        render(<Card> Card Container</Card>);
        expect(screen.getByText('Card Container')).toBeDefined();
    });
})