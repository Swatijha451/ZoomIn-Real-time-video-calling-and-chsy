let IS_PROD = true;
const server = IS_PROD ?
    "https://zoomin-realtime-video-calling-and.onrender.com" :

    "http://localhost:8080"


export default server;