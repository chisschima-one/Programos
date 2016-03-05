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
    //navigatorSI.pushPage(,{animation:'lift'});
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


function showSignOut(){
   
    navigator.notification.confirm(
    'Sure to SignOut', // message
     onSignOut,            // callback to invoke with index of button pressed
    'Sign Out',           // title
    ['Yes','No']     // buttonLabels
);
     menu.setMainPage('Markets.html', {closeMenu: true});
}
function onSignOut(buttonIndex){
    if(buttonIndex == 1)
        {
           setTimeout('modal.show();', 2000); 
            
            $("#pg_customerSignOut").hide('slow');
            $("#pg_customerLoggedin").hide('slow');
            $("#pg_customerNotIN").show('slow');
             $("#pg_brokerIMGS").hide('slow');      
        $(".pg_brokerLogoIN").hide('slow');  
            
        }else{}
}
function showSigIn(){
    alertDialog.show();
    menu.setMainPage('Markets.html', {closeMenu: true});
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

    
    
    alertDialog.hide();
    navigatorSI.popPage()
  var options = 
           {animation:'lift',
            onTransitionEnd: function() {
                alert("Execute Refesh list");
            }
           };
   $("#pg_customerImg").attr('src','img/Oyelowo-David 129X128.jpg');
   
    $("#pg_customerLoggedin").css('opacity','1');
    $("#pg_customerLoggedin").css('display','block');
     
     $("#pg_customerNotIN").css('opacity','0');
   $("#pg_customerNotIN").css('display','none');
    
    
   
     myNavigator.pushPage("Markets.html",options);
         //show('#login.html');
        /**/ 
      $("#pg_brokerIMGS").show('slow');      
        $(".pg_brokerLogoIN").show('slow');
    $("#pg_customerSignOut").show('slow');
      

}
function error(){
    
    

    setTimeout('modal.hide()',2000);
     setTimeout('alert("wrong username")',2000);
   
    
    
}


