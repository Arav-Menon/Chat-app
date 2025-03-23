import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port : 8080 });

let userCount = 0;
let allSockets : WebSocket[] = [];

wss.on('connection', (socket) => {

    allSockets.push(socket)

    socket.on('message', (mesaage) => {
  
        userCount = userCount + 1;
        console.log(`User ${userCount} is connected`);

        for (let i = 0; i < allSockets.length; i++ ) {
            const s = allSockets[i];
            s.send(`Message revieved ${mesaage.toString()}`);
        }
        console.log(mesaage.toString())
    })

    socket.on('disconnet', () => {

      allSockets = allSockets.filter(x => x != socket)  

    }) 

} ) 