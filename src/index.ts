import Server from "./server/server";
import router from "./routes/router";
// import MySQL from "./db/db";
const server = new Server(3000);

server.app.use(router)

// MySQL.instance;

server.start(()=>{
    console.log("Servidor corriendo en el puerto 3000");
})