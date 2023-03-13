import { screen } from "@testing-library/react";
import Router from "next/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginPage from "../../pages/login";
import { UserState } from "../../types/userTypes";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show the Brushbids logo", () => {
      const expectedLogoName = "brushbids logo";

      renderWithProviders(<LoginPage />);

      const brushbidsLogo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(brushbidsLogo).toBeInTheDocument();
    });

    test(`Then it should show a title "Log in to collect art by the world's leading artists"`, () => {
      const expectedTitle =
        "Log in to collect art by the world's leading artists";

      renderWithProviders(<LoginPage />);

      const loginPageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(loginPageTitle).toBeInTheDocument();
    });

    test(`Then it should show a LoginForm component with its 'Log in' button`, () => {
      const expectedButtonName = "Log in";

      renderWithProviders(<LoginPage />);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(loginButton).toBeInTheDocument();
    });

    test("Then it should show the question 'Do you want an account?'", () => {
      const expectedText = "Do you want an account?";

      renderWithProviders(<LoginPage />);

      const registerQuestion = screen.getByText(expectedText);

      expect(registerQuestion).toBeInTheDocument();
    });
  });

  describe("When rendered by a logged in user", () => {
    test("Then it should redirect the user to the Home Page", () => {
      const loggedInState: UserState = {
        id: "test",
        token: "testToken",
        username: "testSubject",
        isLogged: true,
      };

      const preloadedState = { user: loggedInState };

      const spyOnRouteChange = jest.fn();

      Router.events.on("routeChangeStart", () => {
        spyOnRouteChange();
      });

      renderWithProviders(<LoginPage />, preloadedState);

      expect(spyOnRouteChange).toHaveBeenCalled();
    });
  });
});
