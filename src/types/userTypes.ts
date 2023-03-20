export interface LoginFormFields {
  email: string;
  password: string;
}

export interface User {
  username: string;
  token: string;
  id: string;
  administrator: boolean;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}
