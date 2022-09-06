let username = document.querySelector('#username');
let btn = document.querySelector('#get_avatar');
let img = document.querySelector('#result');

// TODO: Set all six URLs to the values associated with your project.
const localApiUrl = "http://localhost:5001/insta-profile-pic/us-central1/instapic";
const remoteApiUrl = "https://us-central1-insta-profile-pic.cloudfunctions.net/instapic";
const localPicUrl = "http://localhost:9199/insta-profile-pic.appspot.com/avatars/";
const remotePicUrl = "gs://insta-profile-pic.appspot.com/avatars/";
const localProxyUrl = "http://localhost:5002/private-cors-server/us-central1/proxy/";
const remoteProxyUrl = "https://private-cors-server.herokuapp.com/";

const local = window.location.hostname === "localhost"; // true if local

// Set URLs below based on whether locally hosted emulator is running or not.
const API_URL = local ? localApiUrl : remoteApiUrl;
const PIC_URL = local ? localPicUrl : remotePicUrl;
const PROXY_URL = local ? localProxyUrl : remoteProxyUrl;

btn.addEventListener('click', async e => {
  let user = username.value;
  let result = await fetch(`${PROXY_URL}${API_URL}?username=${user}`);
  username.value = null;
  img.src = PIC_URL + user + ".png";
})
