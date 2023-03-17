import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import CreateForm from "../../components/CreateForm/CreateForm";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given a CreateForm component", () => {
  describe("When rendered", () => {
    test("Then it should show the label 'Author'", () => {
      const expectedLabel = "Author";

      renderWithProviders(<CreateForm />);

      const authorLabel = screen.getByLabelText(expectedLabel, {
        selector: "input",
      });

      expect(authorLabel).toBeInTheDocument();
    });

    test("Then it should show the button 'Add'", () => {
      const expectedButtonName = "Add";

      renderWithProviders(<CreateForm />);

      const addButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(addButton).toBeInTheDocument();
    });
  });

  describe("When the user inputs 'Jackson Pollock' as author", () => {
    test("Then the Author input value should be 'Jackson Pollock'", async () => {
      const paintingAuthor = "Jackson Pollock";

      renderWithProviders(<CreateForm />);

      const authorInput = screen.getByLabelText("Author");

      await act(async () => await userEvent.type(authorInput, paintingAuthor));

      expect(authorInput).toHaveValue(paintingAuthor);
    });
  });

  describe("When the user selects the Certificate field and sets it to 'true'", () => {
    test("Then the Certificate input value should be 'true'", async () => {
      const selectedValue = "true";

      renderWithProviders(<CreateForm />);

      const certificateInput = screen.getByLabelText("Certificate");

      await act(
        async () =>
          await fireEvent.change(certificateInput, {
            target: { value: "true" },
          })
      );

      expect(certificateInput).toHaveValue(selectedValue);
    });
  });

  describe("When the user writes a description summary 'A rebellious exercise of freedom of expression'", () => {
    test("Then the text field should show the summary 'A rebellious exercise of freedom of expression'", async () => {
      const expectedText = "A rebellious exercise of freedom of expression";

      renderWithProviders(<CreateForm />);

      const textAreaInput = screen.getByLabelText("Summary");

      await act(async () => await userEvent.type(textAreaInput, expectedText));

      expect(textAreaInput).toHaveValue(expectedText);
    });
  });
});
