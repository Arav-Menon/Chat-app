"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
wss.on('connection', (socket) => {
    allSockets.push(socket);
    socket.on('message', (mesaage) => {
        userCount = userCount + 1;
        console.log(`User ${userCount} is connected`);
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(`Message revieved ${mesaage.toString()}`);
        }
        console.log(mesaage.toString());
    });
});
