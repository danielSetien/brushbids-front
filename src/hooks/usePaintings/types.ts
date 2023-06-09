import { Painting, Paintings } from "../../types/paintingTypes";

export interface BackPaintingsResponse {
  paintings: Paintings;
}

export interface BackDetailResponse {
  painting: Painting;
}

export interface AxiosPaintingResponse {
  data: {
    newPainting: Painting;
  };
}
