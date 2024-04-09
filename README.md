# NodeJS RTSP Sample

This is a demo application on using RTSP to stream video from server to the client. 

## Libraries
- [node-rtsp-stream](https://www.npmjs.com/package/node-rtsp-stream)
- [jsmpeg](https://github.com/phoboslab/jsmpeg)
- [ffmpeg](https://ffmpeg.org/)

## Presequisite

- Install `ffmpeg`. Details can be found in https://ffmpeg.org/download.html .
- Install NodeJS. Recommended version >= 16.

## Code structure
`app.js`: A simple NodeJS server that using `node-rtsp-stream` to stream the video from RTSP URL.
`index.html`: A simple webpage to show the video and stop/start button.

## Run the code

Install dependencies:
`npm install`

Run the server:
`node app.js`

Open the `index.html` file on the browser