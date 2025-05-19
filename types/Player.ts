export interface PlayerLoginRequestData {
  name: string;
  password: string;
}

export interface PlayerLoginRequest {
  type: "reg";
  data: PlayerLoginRequestData;
  id: 0;
}

export interface PlayerLoginResponse {
  type: "reg";
  name: string;
  index: number | string;
  error: boolean;
  errorText: string;
  id: 0;
}

export interface UpdatePlayerResponse {
  type: "update_winners";
  data: [
    {
      name: string;
      wins: number;
    },
  ];
  id: 0;
}
