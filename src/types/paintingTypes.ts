export interface Painting {
  id: string;
  author: string;
  name: string;
  year: string;
  price: string;
  image: string;
  width: string;
  height: string;
  certificate?: string;
  gallery?: string;
  technique?: string;
  size?: string;
  medium?: string;
  materials?: string;
  unique?: string;
  rarity?: string;
  condition?: string;
  signature?: string;
  frame?: string;
  highlightOrder?: string;
  summary?: string;
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
