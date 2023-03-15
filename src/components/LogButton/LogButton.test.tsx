import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Router from "next/router";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LogButton from "./LogButton";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a LogButton component", () => {
  describe("When rendered when the user is logged in", () => {
    test("Then it should show the text 'Log out'", () => {
      const isLogged = true;
      const expectedText = "Log out";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const logoutButton = screen.getByText(expectedText);

      expect(logoutButton).toBeInTheDocument();
    });

    test("Then clicking on the Log out button should not redirect the user to the login page", async () => {
      const isLogged = true;

      const expectedText = "Log out";

      const spyOnRouteChange = jest.fn();

      Router.events.on("routeChangeStart", () => {
        spyOnRouteChange();
      });

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const logoutButton = screen.getByText(expectedText);

      await act(async () => await userEvent.click(logoutButton));

      expect(spyOnRouteChange).not.toHaveBeenCalled();
    });
  });

  describe("When rendered when the user is not logged in", () => {
    test("Then it should show the text 'Log in'", () => {
      const isLogged = false;
      const expectedText = "Log in";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const loginButton = screen.getByText(expectedText);

      expect(loginButton).toBeInTheDocument();
    });

    test("Then clicking on the Log out button should redirect the user to the login page", async () => {
      const isLogged = false;

      const expectedText = "Log in";

      const spyOnRouteChange = jest.fn();

      Router.events.on("routeChangeStart", () => {
        spyOnRouteChange();
      });

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const loginButton = screen.getByText(expectedText);

      await act(async () => await userEvent.click(loginButton));

      expect(spyOnRouteChange).toHaveBeenCalled();
    });
  });
});
