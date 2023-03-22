import { screen, waitFor } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import LoginPage from "../../pages/login";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Router from "next/router";
import { act } from "react-dom/test-utils";

jest.mock("next/router", () => require("next-router-mock"));
const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: {
    includes: jest.fn().mockReturnValue(false),
  },
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a Layout component", () => {
  describe("When rendered with a LoginPage inside", () => {
    test("Then it should show the Brushbids logo", () => {
      const expectedLogoName = "brushbids large logo";

      renderWithProviders(<LoginPage />);

      const brushbidsLogo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(brushbidsLogo).toBeInTheDocument();
    });
  });

  describe("When the user is navigating from one page to another", () => {
    test("Then the state variable isLoading should evaluate to true", async () => {
      renderWithProviders(
        <Layout>
          <LoginPage />
        </Layout>
      );

      await act(() => {
        Router.events.emit("routeChangeStart");
        Router.events.emit("routeChangeComplete");
        Router.events.emit("routeChangeError");
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });

  describe("When the page is loading", () => {
    test("Then it should show a loading bar", () => {
      const expectedLoadingElementClassname = "progress bar";

      const storeWithLoadingState = {
        ui: {
          isLoading: true,
          submitIsLoading: false,
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
