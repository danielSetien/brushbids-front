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
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  backRouteUtils,
  frontRouteUtils,
} from "../../utils/routeUtils/routeUtils";
import {
  AxiosPaintingResponse,
  BackDetailResponse,
  BackPaintingsResponse,
} from "./types";
import definedResponses from "../../utils/responseUtils/responseUtils";
import displaySuccessModal from "../../utils/componentUtils/modals/successModal";
import feedbackUtils from "../../utils/feedbackUtils/feedbackUtils";
import { useRouter } from "next/router";
import {
  setButtonIsLoadingActionCreator,
  setIsLoadingActionCreator,
  unsetButtonIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/userUi/uiSlice";

interface UsePaintingsStructure {
  getPaintings: () => Promise<void>;
  getDetail: (id: string) => Promise<void>;
  deletePainting: (id: string) => Promise<void>;
  createPainting: (painting: FormData) => Promise<void>;
}

const usePaintings = (): UsePaintingsStructure => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { paintingsEndpoint, createEndpoint } = backRouteUtils;

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
    dispatch(setIsLoadingActionCreator());

    try {
      const response = await fetch(`${apiUrl}${paintingsEndpoint}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(definedResponses.internalServerError.message);
      }

      dispatch(deletePaintingActionCreator(id));

      dispatch(unsetIsLoadingActionCreator());

      displaySuccessModal(feedbackUtils.success.deletionMessage);
    } catch (error: unknown) {
      displayErrorModal((error as Error).message);
    }
  };

  const createPainting = async (paintingData: FormData) => {
    dispatch(setButtonIsLoadingActionCreator());

    try {
      const response: AxiosPaintingResponse = await axios.post(
        `${apiUrl}${createEndpoint}`,
        paintingData
      );
      dispatch(createPaintingActionCreator(response.data.newPainting));

      dispatch(unsetButtonIsLoadingActionCreator());

      displaySuccessModal(feedbackUtils.success.creationMessage);

      router.push(frontRouteUtils.homePage);
    } catch {
      dispatch(unsetButtonIsLoadingActionCreator());

      displayErrorModal(definedResponses.internalServerError.message);
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
