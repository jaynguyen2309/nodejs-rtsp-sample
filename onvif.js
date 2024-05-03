const { Cam } = require("onvif");
const Stream = require("node-rtsp-stream");
require("dotenv").config();

const CAMERA_HOST = process.env.CAMERA_HOST || "";
const USERNAME = process.env.USERNAME || "";
const PASSWORD = process.env.PASSWORD || "";
const PORT = 80;
const RTSP_PORT = 554;

const initCamera = () => {
  return new Promise((resolve, reject) => {
    const cam = new Cam(
      {
        hostname: CAMERA_HOST,
        username: USERNAME,
        password: PASSWORD,
        port: PORT,
      },
      function (err) {
        if (err) {
          console.log(
            `Connection Failed for ${CAMERA_HOST} Port: ${PORT} Username: ${USERNAME} Password: ${PASSWORD}`
          );
          reject(err);
        } else {
          console.log("CONNECTED");
          this.absoluteMove({
            x: 1,
            y: 1,
            zoom: 1,
          });
          this.getStreamUri({ protocol: "RTSP" }, function (err, stream) {
            if (err) {
              reject(err);
            } else {
              const url = new URL(stream.uri);
              url.username = USERNAME;
              url.password = PASSWORD;
              url.port = RTSP_PORT;
              resolve(url.href);
            }
          });
        }
      }
    );
  });
};

const initStream = (rtspUri) => {
  return new Stream(
    {
      name: "test-stream",
      streamUrl: rtspUri,
      wsPort: 9999,
      ffmpegOptions: {
        "-stats": "", // an option with no necessary value uses a blank string
        "-r": 30,
      },
    },
    function (err) {
      console.log(err);
    }
  );
};

initCamera()
  .then((rtspUri) => {
    console.log(rtspUri);
    initStream(rtspUri);
  })
  .catch((err) => {
    console.error(err);
  });
