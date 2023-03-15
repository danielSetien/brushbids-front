import { screen } from "@testing-library/react";
import HomePage from "../../pages";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a HomePage", () => {
  describe("When rendered", () => {
    test("Then it should show a header with the Brushbids logo", () => {
      const expectedLogoName = "brushbids logo";

      renderWithProviders(<HomePage />);

      const expectedLogo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
