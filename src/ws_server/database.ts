import { Player, Game, Room, Winner } from "../../types/index.js";

export const playersDB = new Map<string, Player>();
export const gamesDB = new Map<string, Game>();
export const roomsDB = new Map<string, Room>();
export const winnersDB = new Map<string, Winner>();
