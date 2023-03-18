import { painting } from "../../mocks/handlers";
import {
  createPaintingActionCreator,
  deletePaintingActionCreator,
  initialPaintingsState,
  loadDetailActionCreator,
  loadPaintingsActionCreator,
  paintingsReducer,
} from "../../store/features/paintingsSlice/paintingsSlice";
import { Paintings, PaintingsState } from "../../types/paintingTypes";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";

describe("Given a paintingsSlice", () => {
  describe("When its function loadPaintings is called", () => {
    test("Then it should update our paintings list with the paintings it gets", () => {
      const expectedPaintingsState: PaintingsState = {
        ...initialPaintingsState,
        paintings: [...mockPaintings],
      };

      const loadedPaintings = loadPaintingsActionCreator(mockPaintings);

      const updatedPaintingsState = paintingsReducer(
        initialPaintingsState,
        loadedPaintings
      );

      expect(updatedPaintingsState).toStrictEqual(expectedPaintingsState);
    });
  });

  describe("When its function loadDetail is called", () => {
    test("Then it should update our paintingDetail with the painting it gets", () => {
      const painting = mockPaintings[0];

      const expectedPaintingsState: PaintingsState = {
        ...initialPaintingsState,
        paintingDetail: painting,
      };

      const loadedPaintings = loadDetailActionCreator(painting);

      const updatedPaintingsState = paintingsReducer(
        initialPaintingsState,
        loadedPaintings
      );

      expect(updatedPaintingsState).toStrictEqual(expectedPaintingsState);
    });
  });

  describe("When its function deletePainting is called to delete a painting", () => {
    test("Then it should remove said painting from our list of paintings", () => {
      const painting = mockPaintings[0];

      const expectedPaintingsState = [] as Paintings;

      const mockInitialPaintingsState: PaintingsState = {
        ...initialPaintingsState,
        paintings: [painting],
      };

      const deletedPainting = deletePaintingActionCreator(painting.id);

      const deletedPaintingState = paintingsReducer(
        mockInitialPaintingsState,
        deletedPainting
      );

      expect(deletedPaintingState.paintings).toStrictEqual(
        expectedPaintingsState
      );
    });
  });

  describe("When its function createPainting is called to add a painting to our list", () => {
    test("Then it should add a painting to our list of paintings", () => {
      const expectedPaintingsState: PaintingsState = {
        ...initialPaintingsState,
        paintings: [...initialPaintingsState.paintings, painting],
      };

      const createdPainting = createPaintingActionCreator(painting);

      const updatedPaintingsState = paintingsReducer(
        initialPaintingsState,
        createdPainting
      );

      expect(updatedPaintingsState).toStrictEqual(expectedPaintingsState);
    });
  });
});
