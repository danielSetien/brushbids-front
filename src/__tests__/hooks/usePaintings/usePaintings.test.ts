import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import axios from "axios";
import { act } from "react-dom/test-utils";
import usePaintings from "../../../hooks/usePaintings/usePaintings";
import { errorHandlers, painting } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { store } from "../../../store";
import {
  createPaintingActionCreator,
  deletePaintingActionCreator,
  loadDetailActionCreator,
  loadPaintingsActionCreator,
} from "../../../store/features/paintingsSlice/paintingsSlice";
import { mockPaintings } from "../../../utils/testUtils/mockHardcodedData";
import Wrapper from "../../../utils/testUtils/Wrapper";
import { Painting } from "../../../types/paintingTypes";
import definedResponses from "../../../utils/responseUtils/responseUtils";

jest.mock("next/router", () => require("next-router-mock"));

const mockDisplayErrorModal = jest.spyOn(toast, "error");

const mockDispatcher = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a getPaintings function", () => {
  describe("When it is called to get a list of 2 paintings", () => {
    test("Then it should load a list of 2 paintings", async () => {
      const {
        result: {
          current: { getPaintings },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => getPaintings());

      expect(mockDispatcher).toHaveBeenCalledWith(
        loadPaintingsActionCreator(mockPaintings)
      );
    });
  });

  describe("When it is called to get a list of paintings but receives an error response", () => {
    test("Then it should call the function to show the user the error message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getPaintings },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => getPaintings());

      expect(mockDisplayErrorModal).toHaveBeenCalled();
    });
  });
});

describe("Given a getDetail function", () => {
  const paintingDetail = mockPaintings[0];

  describe("When it is called to get the detail of a painting", () => {
    test("Then it should load the detail of a painting", async () => {
      const {
        result: {
          current: { getDetail },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => getDetail(paintingDetail.id));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loadDetailActionCreator(paintingDetail)
      );
    });
  });

  describe("When it is called to get the detail but it receives an error response", () => {
    test("Then it should call the function to show the user the error message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getDetail },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => getDetail(paintingDetail.id));

      expect(mockDisplayErrorModal).toHaveBeenCalled();
    });
  });
});

describe("Given a deletePainting function", () => {
  const id = painting.id;

  describe("When it is called to delete a painting", () => {
    test("Then it should delete the painting from our list", async () => {
      const {
        result: {
          current: { deletePainting },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => deletePainting(id));

      expect(mockDispatcher).toHaveBeenCalledWith(
        deletePaintingActionCreator(id)
      );
    });
  });

  describe("When it is called to delete a painting but receives an error instead", () => {
    test("Then it should call the function to show the user the error message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deletePainting },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => deletePainting(id));

      expect(mockDisplayErrorModal).toHaveBeenCalled();
    });
  });
});

describe("Given a createPainting function", () => {
  const createdPainting: Painting = {
    id: "uniqueId",
    author: "Pablo Picasso",
    name: "Guernica",
    year: "1937",
    certificate: "true",
    image: "guernicaImageUrl.jpg",
  };

  const paintingData = new FormData();
  paintingData.append("author", createdPainting.author);
  paintingData.append("name", createdPainting.name);
  paintingData.append("year", createdPainting.year);
  paintingData.append("certificate", createdPainting.certificate);

  describe("When it is called to create a painting", () => {
    test("Then it should add the painting to our list of paintings", async () => {
      const {
        result: {
          current: { createPainting },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      axios.post = jest.fn().mockReturnValue({
        data: {
          newPainting: createdPainting,
        },
      });

      await act(async () => createPainting(paintingData));

      expect(mockDispatcher).toHaveBeenCalledWith(
        createPaintingActionCreator(createdPainting)
      );
    });
  });

  describe("When it is called to create a painting but it receives an error instead", () => {
    test("Then it should call the funciton to show the user the error message", async () => {
      server.resetHandlers(...errorHandlers);
      const thrownErrorMessage = definedResponses.internalServerError.message;

      const {
        result: {
          current: { createPainting },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      axios.post = jest.fn().mockImplementationOnce(() => {
        throw new Error(thrownErrorMessage);
      });

      await act(async () => createPainting(paintingData));

      expect(mockDisplayErrorModal).toHaveBeenCalled();
    });
  });
});
