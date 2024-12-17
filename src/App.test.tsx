import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo App", () => {
  test("add todo with button", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Test todo with btn" } });

    const button = screen.getByText("+");
    fireEvent.click(button);

    expect(screen.getByText("Test todo with btn"));
  });
  test("change status todo", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "New todo" } });

    const button = screen.getByText("+");
    fireEvent.click(button);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByRole("checkbox", { checked: true }));
  });
});
