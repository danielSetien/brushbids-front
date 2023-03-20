import { screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import LoginPage from "../../pages/login";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a Layout component", () => {
  describe("When rendered with a LoginPage inside", () => {
    test("Then it should show the Log in Form button", () => {
      const expectedButtonName = "Log in";

      renderWithProviders(
        <Layout>
          <LoginPage />
        </Layout>
      );

      const loginButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When the page is loading", () => {
    test("Then it should show a loading bar", () => {
      const expectedLoadingElementClassname = "progress bar";

      const storeWithLoadingState = {
        ui: {
          isLoading: true,
        },
      };

      renderWithProviders(
        <Layout>
          <LoginPage />
        </Layout>,
        storeWithLoadingState
      );

      const loader = screen.getByLabelText(expectedLoadingElementClassname);

      expect(loader).toBeInTheDocument();
    });
  });
});
