import { screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import LoginPage from "../../pages/login";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));
const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: {
    includes: jest.fn().mockReturnValue(false),
  },
}));

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

  describe("When the page is loading", () => {
    test("Then it should show a loading bar", () => {
      const expectedLoadingElementClassname = "progress bar";

      const storeWithLoadingState = {
        ui: {
          isLoading: true,
          buttonIsLoading: false,
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
