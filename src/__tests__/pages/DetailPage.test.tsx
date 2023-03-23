import { screen, waitFor } from "@testing-library/react";
import DetailPage from "../../pages/paintings/[id]";
import feedbackUtils from "../../utils/feedbackUtils/feedbackUtils";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

const paintingDetail = mockPaintings[1];

jest.mock("next/router", () => require("next-router-mock/async"));

const useRouter = jest.spyOn(require("next-router-mock/async"), "useRouter");
useRouter.mockImplementation(() => ({
  query: {
    id: paintingDetail.id,
  },
  pathname: {
    includes: jest.fn().mockReturnValue(true),
  },
}));

describe("Given a DetailPage", () => {
  describe("When rendering a painting", () => {
    test("Then it should show the image of said painting", async () => {
      const expectedImageName = paintingDetail.name;

      renderWithProviders(<DetailPage painting={paintingDetail} />);

      await waitFor(() => {
        const image = screen.getByRole("img", {
          name: expectedImageName,
        });

        expect(image).toBeInTheDocument();
      });
    });
  });

  describe("When rendering a painting that is not signed", () => {
    test("Then it should show the text 'Is not signed'", async () => {
      const expectedText = feedbackUtils.paintings.signature.false;

      renderWithProviders(<DetailPage painting={mockPaintings[2]} />);

      await waitFor(() => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When rendering a painting that is not framed", () => {
    test("Then it should show the text 'Is not framed'", async () => {
      const expectedText = feedbackUtils.paintings.frame.false;

      renderWithProviders(<DetailPage painting={mockPaintings[3]} />);

      await waitFor(() => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When rendering a painting that doesn't have additional characteristics", () => {
    test("Then it should NOT show additional characteristics", async () => {
      const expectedLabelText = "characteristics list";

      renderWithProviders(<DetailPage painting={mockPaintings[4]} />);

      await waitFor(() => {
        const label = screen.queryByText(expectedLabelText);

        expect(label).not.toBeInTheDocument();
      });
    });
  });
});
