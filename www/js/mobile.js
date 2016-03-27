document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady() {
 document.addEventListener("online", onOnline, false);

document.addEventListener("offline", onOffline, false);

document.addEventListener("backbutton", onBackKeyDown, false);
    
    
}

function onOnline() {
   
    console.log(device.cordova);
}



function onOffline() {
     navigator.notification.alert(
    'Could not access the internet, check internet settings!',  // message
         // callback
    'Network Error',            // title
    'OK'                  // buttonName
);
  
    
}

function onbackKeyDown() { 
    // do something here if you wish
    // alert('go back!');
    
navigator.notification.confirm(
    'Sure to quit', // message
     onQuit,            // callback to invoke with index of button pressed
    'Quit',           // title
    ['Yes','No']     // buttonLabels
);
}
function onQuit(buttonIndex){
        
        if(buttonIndex == 1){
             navigator.app.exitApp();
        }else{ 
            //exit dialog
        }
       
        
    }



 
//navigator.app.exitApp();