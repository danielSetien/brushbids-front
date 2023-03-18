export interface Painting {
  id: string;
  author: string;
  name: string;
  year: string;
  certificate: string;
  image: string;
  gallery?: string;
  technique?: string;
  size?: string;
  medium?: string;
  materials?: string;
  unique?: string;
  rarity?: string;
  condition?: string;
  signature?: string;
  price?: string;
  frame?: string;
  highlightOrder?: string;
  summary?: string;
  width?: string;
  height?: string;
  bidCount?: string;
}

export type Paintings = Painting[];

export interface PaintingsState {
  paintings: Paintings;
  paintingDetail: Painting;
}

export interface CreatePaintingFormFields {
  author: string;
  name: string;
  year: string;
  gallery: string;
  technique: string;
  size: string;
  medium: string;
  materials: string;
  price: string;
}

export interface CreatePaintingSelectFields {
  unique: string;
  certificate: string;
  rarity: string;
  condition: string;
  signature: string;
  frame: string;
}
