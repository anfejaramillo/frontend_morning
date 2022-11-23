// let PORT = 3500;
// let HOST = "localhost";
// let PROTOCOL = "http";

let PORT = 80;
let HOST = "backend-proyecto-morning.vercel.app";
let PROTOCOL = "https";
let API_ROUTE = "/api/";
let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
let FULL_API_PATH = "";
FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;
if (PORT === 80) {
    FULL_API_PATH = PROTOCOL + "://" + HOST + API_ROUTE;
}

module.exports = {
    PORT,
    HOST,
    PROTOCOL,
    API_ROUTE,
    FULL_PATH,
    FULL_API_PATH,
};
