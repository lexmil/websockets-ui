export enum MessageType {
  ATTACK = "attack",
  REGISTRATION = "reg",
  UPDATE_WINNERS = "update_winners",
  CREATE_ROOM = "create_room",
  ADD_USER_TO_ROOM = "add_user_to_room",
  UPDATE_ROOM = "update_room",
  ADD_SHIPS = "add_ships",
  START_GAME = "start_game",
  RANDOM_ATTACK = "randomAttack",
  CREATE_GAME = "create_game",
  TURN = "turn",
  FINISH = "finish",
}

export interface Message {
  type: MessageType;
  data: unknown;
  id: 0;
}
