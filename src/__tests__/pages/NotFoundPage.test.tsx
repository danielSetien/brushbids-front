import { screen } from "@testing-library/react";
import NotFoundPage from "../../pages/404";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given a NotFoundPage", () => {
  describe("When rendered", () => {
    test("Then it should show the Brushbids logo", () => {
      const expectedLogoName = "brushbids large logo";

      renderWithProviders(<NotFoundPage />);

      const brushbidsLogo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(brushbidsLogo).toBeInTheDocument();
    });
  });
});
