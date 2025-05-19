import { WebSocketServer } from "ws";
import { routeMessage } from "./router.js";

const WS_PORT = 3000;

const wss = new WebSocketServer({ port: WS_PORT });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection");

  ws.on("message", (data) => {
    try {
      const messageString = data.toString("utf-8");
      const message = JSON.parse(messageString);

      routeMessage(ws, message);
    } catch (err) {
      ws.send(JSON.stringify({ error: "Invalid JSON" }));
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("===> Websocket server on the %d port!", WS_PORT);
