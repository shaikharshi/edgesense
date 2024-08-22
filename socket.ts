import { io } from "socket.io-client";

export const socket = io("https://backend.sovorun.com", {
    transports: ["websocket", "polling"],
});