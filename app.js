Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "test-stream",
  streamUrl:
    "rtsp://rtspstream:160593805eb918b5fccf30919c1a4707@zephyr.rtsp.stream/movie",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, 
  },
});
