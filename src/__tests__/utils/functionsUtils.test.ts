import { act } from "react-dom/test-utils";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import getPaintingsData from "../../utils/functionsUtils/functionUtils";
import definedResponses from "../../utils/responseUtils/responseUtils";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";

jest.mock("next/router", () => require("next-router-mock"));

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

      const errorMessage = definedResponses.internalServerError.message;

      const expectedError = new Error(errorMessage);

      await expect(getPaintingsData()).rejects.toThrow(expectedError);
    });
  });
});
