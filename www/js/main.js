
 
 ons.ready(function() {
           ons.createAlertDialog('alert-dialog.html').then(function(alertDialog) {
            
               
          });
      ons.createAlertDialog('alert-dialogSE.html').then(function(alertDialogSE) {
            alertDialogSE.show();
          });
                
 });


 $(document.body).on("pageinit", '#my-signIn', function() {



        });


         $(document.body).on("pageinit", '#my-page', function() {

             
            

            $("#homebtn").click(function(){


                alert("this page is alive");
            });
             
                 
        });



      $(document).ready(function(){
            showSE();
               $("#un").val("");
               $("#pw").val("");
     
        });

function showSE(){
    
    
}
function  showSigIn(){
    alertDialog.show();
}

function displayNSE(){
    loadingNSE();
}
function displayGSE(){
    loadingGSE();
}

function loadingNSE(){
    
    modal.show();
    //Do Something Here.................
    setTimeout('modal.hide()',2000);
    setTimeout('alertDialogSE.destroy()',2000);
}
function loadingGSE(){
    
    modal.show();
    //Do Something Here.................
    setTimeout('modal.hide()',2000);
    setTimeout('alertDialogSE.destroy()',2000);
}

function showSigIn(){
    alertDialog.show();
}
function loading(){
    
    
       var un = $("#un").val();
       var pw = $("#pw").val();
      modal.show();
    //setTimeout('modal.hide()', 2000);
    
        //alert("chiako");
       // loading.show();
       
        //modal.hide();
 if(un == "chiako"){
        setTimeout('modal.hide()', 2000);
     
    // setTimeout('window.open("dashboard.html", "_self")',2000);
      
     setTimeout('login()',2000);
        
       }else{error();}
     
 }
function login(){
    alertDialog.destroy();
  var options = 
           {animation:'lift',
            onTransitionEnd: function() {
                alert("Execute Refesh list");
            }
           };
    myNavigator.pushPage("Markets.html",options)
         //show('#login.html');
        /**/ 
            
                                                      
      

}
function error(){
    

    setTimeout('modal.hide()',2000);
     setTimeout('alert("wrong username")',2000);
   
    
    
}


