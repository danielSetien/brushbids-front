import fetch from "node-fetch";
import {
  BackDetailResponse,
  BackPaintingsResponse,
} from "../../hooks/usePaintings/types";
import { Painting, Paintings } from "../../types/paintingTypes";
import definedResponses from "../responseUtils/responseUtils";

export const getPaintingsData = async (): Promise<Paintings> => {
  const response = await fetch(
    "https://dani-setien-final-project-back-202301-bcn.onrender.com/paintings"
  );

  if (!response.ok) {
    throw new Error(definedResponses.internalServerError.message);
  }

  const { paintings } = (await response.json()) as BackPaintingsResponse;

  return paintings;
};

export const getDetailData = async (id: string): Promise<Painting> => {
  const response = await fetch(
    `https://dani-setien-final-project-back-202301-bcn.onrender.com/paintings/${id}`
  );

  if (!response.ok) {
    throw new Error(definedResponses.internalServerError.message);
  }

  const { painting } = (await response.json()) as BackDetailResponse;

  return painting;
};
