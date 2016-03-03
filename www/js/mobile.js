document.addEventListener("deviceready", onDeviceReady, false);

document.addEventListener("online", onOnline, false);

document.addEventListener("offline", onOffline, false);

function onDeviceReady() {
    alert("DeviceReady");
    console.log(device.cordova);
}

function onOnline() {
    alert("Online");
    console.log(device.cordova);
}
function onOffline() {
    alert("Online");
    console.log(device.cordova);
}