import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import PaintingCard from "../../components/PaintingCard/PaintingCard";
import { ariaLabels } from "../../utils/componentUtils/componentUtils";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import { initialUserState } from "../../store/features/userSlice/userSlice";

const painting = mockPaintings[0];

const spy = jest.fn();

jest.mock("../../hooks/usePaintings/usePaintings", () => () => ({
  deletePainting: () => spy(),
}));

describe("Given a PaintingCard component", () => {
  const storeWithAdminUser = {
    user: {
      ...initialUserState,
      administrator: true,
    },
  };

  describe("When rendered", () => {
    test("Then it should show a painting image", () => {
      const expectedPaintingName = painting.name;

      renderWithProviders(<PaintingCard painting={painting} loading="lazy" />);

      const paintingImage = screen.getByRole("img", {
        name: expectedPaintingName,
      });

      expect(paintingImage).toBeInTheDocument();
    });

    test("Then it should show an author's name", () => {
      const expectedAuthor = painting.author;

      renderWithProviders(<PaintingCard painting={painting} loading="lazy" />);

      const author = screen.getByText(expectedAuthor);

      expect(author).toBeInTheDocument();
    });

    test("Then it should show a painting's name and year of production", () => {
      const expectedInformation = `${painting.name}, ${painting.year}`;

      renderWithProviders(<PaintingCard painting={painting} loading="lazy" />);

      const nameAndYear = screen.getByText(expectedInformation);

      expect(nameAndYear).toBeInTheDocument();
    });
  });

  describe("When rendering a painting with 2 bids", () => {
    test("Then it should show its price and its bid count", () => {
      painting.bidCount = "2";
      const expectedPriceAndBidcount = `$${painting.price!.toLocaleString()} (${
        painting.bidCount
      } bids)`;

      renderWithProviders(<PaintingCard painting={painting} loading="lazy" />);

      const priceAndBidCount = screen.getByText(expectedPriceAndBidcount);

      expect(priceAndBidCount).toBeInTheDocument();
    });
  });

  describe("When rendered by the administrator", () => {
    test("Then it should show an edit button", () => {
      const expectedRenderedButton = ariaLabels.buttonEdit;

      renderWithProviders(
        <PaintingCard painting={painting} loading="lazy" />,
        storeWithAdminUser
      );

      const editButton = screen.getByLabelText(expectedRenderedButton);

      expect(editButton).toBeInTheDocument();
    });

    test("Then it should show an delete button", () => {
      const expectedRenderedButton = ariaLabels.buttonDelete;

      renderWithProviders(
        <PaintingCard painting={painting} loading="lazy" />,
        storeWithAdminUser
      );

      const deleteButton = screen.getByLabelText(expectedRenderedButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When the administrator clicks on its delete button", () => {
    test("Then it should call the action given to it", async () => {
      const expectedRenderedButton = ariaLabels.buttonDelete;

      renderWithProviders(
        <PaintingCard painting={painting} loading="lazy" />,
        storeWithAdminUser
      );

      const deleteButton = screen.getByLabelText(expectedRenderedButton);

      await act(async () => await userEvent.click(deleteButton));

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("When the administrator clicks on its edit button", () => {
    test("Then it should call the action given to it", async () => {
      const expectedRenderedButton = ariaLabels.buttonEdit;

      renderWithProviders(
        <PaintingCard painting={painting} loading="lazy" />,
        storeWithAdminUser
      );

      const deleteButton = screen.getByLabelText(expectedRenderedButton);

      await act(async () => await userEvent.click(deleteButton));

      expect(spy).toHaveBeenCalled();
    });
  });
});
