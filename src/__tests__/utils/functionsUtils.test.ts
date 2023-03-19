import { act } from "react-dom/test-utils";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  getPaintingsData,
  getDetailData,
} from "../../utils/functionsUtils/functionUtils";
import definedResponses from "../../utils/responseUtils/responseUtils";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";

jest.mock("next/router", () => require("next-router-mock"));

const errorMessage = definedResponses.internalServerError.message;

const expectedError = new Error(errorMessage);

describe("Given a getPaintingsData function", () => {
  describe("When called to get a list of paintings", () => {
    test("Then it should return a list of paintings", async () => {
      const expectedPaintings = mockPaintings;

      const paintingsData = await act(async () => getPaintingsData());

      expect(paintingsData).toStrictEqual(expectedPaintings);
    });
  });

  describe("When called to get a list of paintings but received an error instead", () => {
    test("Then it should throw an error with message 'Internal Server Error.'", async () => {
      server.resetHandlers(...errorHandlers);

      await expect(getPaintingsData()).rejects.toThrow(expectedError);
    });
  });
});

describe("Given a getDetailData function", () => {
  const expectedPainting = mockPaintings[0];
  const id = expectedPainting.id;

  describe("When called to get a particular painting", () => {
    test("Then it should return said painting", async () => {
      const detailData = await act(async () => getDetailData(id));

      expect(detailData).toStrictEqual(expectedPainting);
    });
  });

  describe("When called to get a list of paintings but received an error instead", () => {
    test("Then it should throw an error with message 'Internal Server Error.'", async () => {
      server.resetHandlers(...errorHandlers);

      await expect(getDetailData(id)).rejects.toThrow(expectedError);
    });
  });
});
