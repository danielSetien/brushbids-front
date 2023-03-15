import {
  initialPaintingsState,
  loadDetailActionCreator,
  loadPaintingsActionCreator,
  paintingsReducer,
} from "../../store/features/paintingsSlice/paintingsSlice";
import { PaintingsState } from "../../types/paintingTypes";
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
});
