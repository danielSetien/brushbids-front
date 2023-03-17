import { useCallback } from "react";
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
import { Painting } from "../../types/paintingTypes";
import feedbackUtils from "../../utils/feedbackUtils/feedbackUtils";

interface UsePaintingsStructure {
  getPaintings: () => Promise<void>;
  getDetail: (id: string) => Promise<void>;
  deletePainting: (id: string) => Promise<void>;
  createPainting: (painting: Painting) => Promise<void>;
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

  const createPainting = async (painting: Painting) => {
    const {
      author,
      name,
      year,
      gallery,
      technique,
      size,
      medium,
      materials,
      unique,
      certificate,
      rarity,
      condition,
      signature,
      price,
      frame,
      summary,
      image,
    } = painting;

    try {
      const response = await fetch(`${apiUrl}${createEndpoint}`, {
        method: "POST",
        body: JSON.stringify({
          author: author,
          name: name,
          year: year,
          gallery: gallery,
          technique: technique,
          size: size,
          medium: medium,
          materials: materials,
          unique: unique,
          certificate: certificate,
          rarity: rarity,
          condition: condition,
          signature: signature,
          price: price,
          frame: frame,
          summary: summary,
          image: image,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) {
        throw new Error(definedResponses.internalServerError.message);
      }

      dispatch(createPaintingActionCreator(painting));

      displaySuccessModal(feedbackUtils.success.creationMessage);
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  };

  return { getPaintings, getDetail, deletePainting, createPainting };
};

export default usePaintings;
