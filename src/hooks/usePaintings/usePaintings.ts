import { useCallback } from "react";
import axios from "axios";
import fetch from "node-fetch";
import displayErrorModal from "../../utils/componentUtils/modals/errorModal";
import {
  createPaintingActionCreator,
  deletePaintingActionCreator,
  loadDetailActionCreator,
  loadPaintingsActionCreator,
} from "../../store/features/paintingsSlice/paintingsSlice";
import { useAppDispatch } from "../../store/hooks";
import { backRouteUtils } from "../../utils/routeUtils/routeUtils";
import { BackDetailResponse, BackPaintingsResponse } from "./types";
import definedResponses from "../../utils/responseUtils";
import displaySuccessModal from "../../utils/componentUtils/modals/successModal";
import feedbackUtils from "../../utils/feedbackUtils/feedbackUtils";
import { Painting, Paintings } from "../../types/paintingTypes";

interface UsePaintingsStructure {
  getPaintings: () => Promise<void>;
  getDetail: (id: string) => Promise<void>;
  deletePainting: (id: string) => Promise<void>;
  createPainting: (painting: FormData) => Promise<void>;
}

const usePaintings = (): UsePaintingsStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { paintingsEndpoint, createEndpoint } = backRouteUtils;

  const getPaintings = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}${paintingsEndpoint}`);

      if (!response.ok) {
        throw new Error(definedResponses.internalServerError.message);
      }

      const { paintings } = (await response.json()) as BackPaintingsResponse;

      dispatch(loadPaintingsActionCreator(paintings));
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  }, [apiUrl, dispatch, paintingsEndpoint]);

  const getDetail = useCallback(
    async (id: string) => {
      try {
        const response = await fetch(`${apiUrl}${paintingsEndpoint}/${id}`);

        if (!response.ok) {
          throw new Error(definedResponses.internalServerError.message);
        }

        const { painting } = (await response.json()) as BackDetailResponse;

        dispatch(loadDetailActionCreator(painting));
      } catch (error: unknown) {
        displayErrorModal((error as Error).message);
      }
    },
    [apiUrl, dispatch, paintingsEndpoint]
  );

  const deletePainting = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}${paintingsEndpoint}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(definedResponses.internalServerError.message);
      }

      dispatch(deletePaintingActionCreator(id));

      displaySuccessModal(feedbackUtils.success.deletionMessage);
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  };

  const createPainting = async (paintingData: FormData) => {
    try {
      const response: Painting = await axios.post(
        `${apiUrl}${createEndpoint}`,
        paintingData
      );

      dispatch(createPaintingActionCreator(response));

      displaySuccessModal(feedbackUtils.success.creationMessage);
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  };

  return {
    getPaintings,
    getDetail,
    deletePainting,
    createPainting,
  };
};

export default usePaintings;

export const getPaintingsData = async (): Promise<Paintings | undefined> => {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { paintingsEndpoint } = backRouteUtils;

  try {
    const response = await fetch(`${apiUrl}${paintingsEndpoint}`);

    if (!response.ok) {
      throw new Error(definedResponses.internalServerError.message);
    }

    const { paintings } = (await response.json()) as BackPaintingsResponse;

    return paintings;
  } catch (error: unknown) {}
};
