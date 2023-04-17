import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("Test Message", () => {
  test("should render Message correctly", () => {
    render(<ErrorMessage>Something Went Wrong!</ErrorMessage>);
    expect(screen.getByText("Something Went Wrong!")).toBeDefined();
  });
});
