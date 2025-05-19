import crypto from "node:crypto";
import WebSocket from "ws";
import { Player, PlayerLoginRequestData } from "../../../types";

export const register = (
  db: Map<string, Player>,
  ws: WebSocket,
  data: PlayerLoginRequestData,
) => {
  const entry = [...db.entries()].find(([_, p]) => p?.name === data?.name);

  console.log("this is data", typeof data);

  if (entry) {
    ws.send(
      JSON.stringify({
        name: data.name,
        index: entry[0],
        error: true,
        errorText: "User is already logged in",
      }),
    );
  } else {
    const id = crypto.randomBytes(16).toString("hex");
    db.set(id, data);

    console.log("big", data, Object.keys(data));

    ws.send(
      JSON.stringify({
        type: "reg",
        data: JSON.stringify({
          name: data.name,
          index: db.size + 1,
          error: false,
          errorText: "",
        }),
        id: 0,
      }),
    );

    console.log("Registering new player", db.get(id));
  }
};
