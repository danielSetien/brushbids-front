import { screen } from "@testing-library/react";
import HomePage from "../../pages";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show the title 'All works from this auction'", () => {
      const expectedTitleName = "All works from this auction";

      renderWithProviders(<HomePage />);

      const expectedTitle = screen.getByRole("heading", {
        name: expectedTitleName,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
