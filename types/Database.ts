export interface Player {
  name: string;
  password: string;
}

export interface Game {
  id: string;
  players: Player[];
  grid: String[][];
}

export interface Room {
  id: string;
  users: Player[];
}

export interface Winner {
  id: string;
  name: string;
  wins: number;
}
