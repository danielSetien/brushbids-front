import { screen } from "@testing-library/react";
import PaintingsList from "../../components/PaintingsList/PaintingsList";
import { initialPaintingsState } from "../../store/features/paintingsSlice/paintingsSlice";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

jest.mock("next/router", () => require("next-router-mock"));

describe("Given a PaintingList component", () => {
  describe("When there is a list of two paintings in our store", () => {
    test("Then it should show two images of paintings", () => {
      const firstPaintingName = mockPaintings[0].name;
      const secondPaintingName = mockPaintings[1].name;

      const storeWithTwoPaintings = {
        paintings: {
          ...initialPaintingsState,
          paintings: mockPaintings,
        },
      };

      renderWithProviders(<PaintingsList />, storeWithTwoPaintings);

      const firstPainting = screen.getByRole("img", {
        name: firstPaintingName,
      });
      const secondPainting = screen.getByRole("img", {
        name: secondPaintingName,
      });

      expect(firstPainting).toBeInTheDocument();
      expect(secondPainting).toBeInTheDocument();
    });
  });

  describe("When there is 10 paintings to render", () => {
    test("Them the image for the 10th painting should be lazy-loaded", () => {
      const anyPainting = mockPaintings[0];
      const firstNinePaintings = Array(9).fill(anyPainting);
      const tenthPainting = mockPaintings[1];
      const paintings = [...firstNinePaintings, tenthPainting];

      const storeWithTenPaintings = {
        paintings: {
          ...initialPaintingsState,
          paintings: paintings,
        },
      };

      renderWithProviders(<PaintingsList />, storeWithTenPaintings);

      const tenthPaintingImage = screen.getByRole("img", {
        name: tenthPainting.name,
      });

      expect(tenthPaintingImage).toHaveAttribute("loading", "lazy");
    });
  });
});
