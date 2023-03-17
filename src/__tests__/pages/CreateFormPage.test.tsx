import { screen } from "@testing-library/react";
import CreateFormPage from "../../pages/create";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a CreateFormPage", () => {
  describe("When rendered", () => {
    test(`Then it should show a CreateForm component with its 'Add' button`, () => {
      const expectedButtonName = "Add";

      renderWithProviders(<CreateFormPage />);

      const addButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(addButton).toBeInTheDocument();
    });
  });
});
