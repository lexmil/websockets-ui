export interface GameAttackRequest {
  type: "attack";
  data: {
    gameId: number | string;
    x: number;
    y: number;
    indexPlayer:
      | number
      | string /* id of the player in the current game session */;
  };
  id: number;
}

export interface GameAttackResponse {
  type: "attack";
  data: {
    position: {
      x: number;
      y: number;
    };
    currentPlayer:
      | number
      | string /* id of the player in the current game session */;
    status: "miss" | "killed" | "shot";
  };
  id: number;
}

export interface GameRandomAttackRequest {
  type: "randomAttack";
  data: {
    gameId: number | string;
    indexPlayer:
      | number
      | string /* id of the player in the current game session */;
  };
  id: number;
}

export interface GameTurnInfoResponse {
  type: "turn";
  data: {
    currentPlayer:
      | number
      | string /* id of the player in the current game session */;
  };
  id: number;
}

export interface FinishGameResponse {
  type: "finish";
  data: {
    winPlayer:
      | number
      | string /* id of the player in the current game session */;
  };
  id: number;
}
