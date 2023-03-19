import { screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import { initialUserState } from "../../store/features/userSlice/userSlice";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import { administratorUsername } from "../../utils/userUtils/userUtils";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a Header component", () => {
  describe("When rendered by a user", () => {
    test("Then it should show a logo image", () => {
      const expectedLogoName = "brushbids logo";

      renderWithProviders(<Header />);

      const logo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a Log in button", () => {
      const expectedButtonText = "Log in";

      renderWithProviders(<Header />);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });

    test("Then it should show a Home link that directs to HomePage", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<Header />);

      const homeLink = screen.getByText(expectedLinkText).closest("a");

      expect(homeLink).toHaveAttribute("href", frontRouteUtils.homePage);
    });

    test("Then it should NOT show an Add link that directs to CreatePage", () => {
      const expectedLinkText = "Add";

      renderWithProviders(<Header />);

      const homeLink = screen.queryByText(expectedLinkText);

      expect(homeLink).not.toBeInTheDocument();
    });
  });

  describe("When rendered by the administrator", () => {
    test("Then it should show an Add link that directs to CreatePage", () => {
      const expectedLinkText = "Add";

      const storeWithAdminUser = {
        user: {
          ...initialUserState,
          username: administratorUsername,
        },
      };

      renderWithProviders(<Header />, storeWithAdminUser);

      const addLink = screen.getByText(expectedLinkText).closest("a");

      expect(addLink).toHaveAttribute("href", frontRouteUtils.createPage);
    });
  });
});
