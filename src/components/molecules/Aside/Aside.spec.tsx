import { render, screen } from "@testing-library/react";
import { Aside } from "./Aside";

describe("Test Message", () => {
    test("should render Message correctly", () => {
        render(<Aside>Left Aside Container </Aside>);
        expect(screen.getByText("Left Aside Container")).toBeDefined();
    });
});
