import WebSocket from "ws";
import { playersDB } from "./database.js";
import { register } from "./handlers/register.js";
import {
  Message,
  MessageType,
  PlayerLoginRequestData,
} from "../../types/index.js";
import {
  addShips,
  addUserToRoom,
  createGame,
  createRoom,
  finish,
  randomAttack,
  startGame,
  turn,
  updateRoom,
  updateWinners,
} from "./handlers/index.js";

export const routeMessage = (ws: WebSocket, message: Message) => {
  console.log("ROUTER: ", message);

  const dataObject = JSON.parse(message.data as string);

  switch (message.type) {
    case MessageType.ATTACK:
      break;
    case MessageType.REGISTRATION:
      register(playersDB, ws, dataObject as PlayerLoginRequestData);
      break;
    case MessageType.UPDATE_WINNERS:
      updateWinners();
      break;
    case MessageType.CREATE_ROOM:
      createRoom();
      break;
    case MessageType.ADD_USER_TO_ROOM:
      addUserToRoom();
      break;
    case MessageType.UPDATE_ROOM:
      updateRoom();
      break;
    case MessageType.ADD_SHIPS:
      addShips();
      break;
    case MessageType.START_GAME:
      startGame();
      break;
    case MessageType.RANDOM_ATTACK:
      randomAttack();
      break;
    case MessageType.CREATE_GAME:
      createGame();
      break;
    case MessageType.TURN:
      turn();
      break;
    case MessageType.FINISH:
      finish();
      break;
    default:
      ws.send(JSON.stringify({ error: "Unknown message type" }));
  }
};
