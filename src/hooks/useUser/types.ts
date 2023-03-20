import { JwtPayload } from "jwt-decode";

export interface BackLoginResponse {
  token: string;
}

export interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
  administrator: boolean;
}
