export interface ShipsAddRequest {
  type: "add_ships";
  data: {
    gameId: number | string;
    ships: [
      {
        position: {
          x: number;
          y: number;
        };
        direction: boolean;
        length: number;
        type: "small" | "medium" | "large" | "huge";
      },
    ];
    indexPlayer:
      | number
      | string /* id of the player in the current game session */;
  };
  id: number;
}

export interface ShipsStartGameResponse {
  type: "start_game";
  data: {
    ships: /* player's ships, not enemy's */
    [
      {
        position: {
          x: number;
          y: number;
        };
        direction: boolean;
        length: number;
        type: "small" | "medium" | "large" | "huge";
      },
    ];
    currentPlayerIndex:
      | number
      | string /* id of the player in the current game session, who have sent his ships */;
  };
  id: number;
}
