import { useCallback } from "react";
import fetch from "node-fetch";
import displayErrorModal from "../../utils/componentUtils/modals/errorModal";
import {
  loadDetailActionCreator,
  loadPaintingsActionCreator,
} from "../../store/features/paintingsSlice/paintingsSlice";
import { useAppDispatch } from "../../store/hooks";
import { backRouteUtils } from "../../utils/routeUtils/routeUtils";
import { BackDetailResponse, BackPaintingsResponse } from "./types";
import definedResponses from "../../utils/responseUtils";

interface UsePaintingsStructure {
  getPaintings: () => Promise<void>;
  getDetail: (id: string) => Promise<void>;
}

const usePaintings = (): UsePaintingsStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const { paintingsEndpoint } = backRouteUtils;

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

  const getDetail = async (id: string) => {
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
  };

  return { getPaintings, getDetail };
};

export default usePaintings;
