import { screen, waitFor } from "@testing-library/react";
import DetailPage from "../../pages/paintings/[id]";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

const paintingDetail = mockPaintings[1];

jest.mock("next/router", () => require("next-router-mock/async"));

const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");
useRouter.mockImplementation(() => ({
  query: {
    id: paintingDetail.id,
  },
}));

describe("Given a DetailPage", () => {
  describe("When rendering a painting", () => {
    test("Then it should show the image of said painting", async () => {
      const expectedImageName = paintingDetail.name;

      renderWithProviders(<DetailPage />);

      await waitFor(() => {
        const image = screen.getByRole("img", {
          name: expectedImageName,
        });

        expect(image).toBeInTheDocument();
      });
    });
  });
});
