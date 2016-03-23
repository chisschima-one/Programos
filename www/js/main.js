////////////// Global  Variable initialzation   //////////
var loginStatus;
var un;
var pw;
var loggedin = "false";
var selected_broker;
var selected_broker_img;
var er;
/////////////////////////////////////////////////////////



/////////////// On App Load Functions   ////////////////////////////////
$(document).on('ons-page:init', '#my-overview', function(event) {
     var navigator = event.component;
    
  if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           }  
    
    showMktlist();
});
$(document).on('ons-page:init', '#my-page', function(event) {
    
   var navigator = event.component;
  if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
        
   $("#overview").change(function(){
       displayOverviewlist();
       
       
   });
     $("#topgainers").change(function(){
       displayTopgainerlist();
       
       
   });
     $("#toplosers").change(function(){
        
        displayToploserslist();
       
   });
    
      $(".mktlist list__item list__item--tappable").click(function(){
        alert("working...");
        showMKTdesp();
    });
  
});
$(document).on('ons-page:init', '#my-port', function(event) {
     var navigator = event.component;
     if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
        
    showPORTlist();
});
$(document).on('ons-page:init', '#my-pending', function(event) {
    
    
         
     if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
     var navigator = event.component;

    showPendbuylist();
    
     
   $("#buy").change(function(){
       displayPendbuylist();
       
       
   });
     $("#sell").change(function(){
       displayPendselllist();
       
       
   });
 
});
$(document).on('ons-page:init', '#my-Penddescription', function(event) {
    
    
     var navigator = event.component;
         
        if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
 //alert("mfhdhdghd");
     $("#code5").empty();
    $("#quantity").empty();   
    $("#condition").empty();
    $("#price").empty();
    $("#source").empty();
    $("#timeinforce").empty();
    $("#expiry2").empty();
    $("#date2").empty();
    
    $("#code5").html(' ');
    $("#quantity").html(' ');  
    $("#condition").html(' ');
    $("#price").html(' ');
    $("#source").html(' ');
    $("#timeinforce").html(' ');
    $("#expiry2").html(' ');
    $("#date2").html(' ');
});
$(document).on('ons-page:init', '#my-TD', function(event) {
    
     var navigator = event.component;
     
        if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
    showTDlist();
});
$(document).on('ons-page:init', '#my-news', function(event) {
    

    
   var navigator = event.component;
    
    
         
        if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
        
     modal.show();
     $.get("http://localhost:59497/News.aspx", function(data, status){
       //alert("Data: " + data + "\nStatus: " + status);
          loginStatus = status;
        myarray =  data.split(" } ");
         myarray.pop();
        //alert(myarray.length);
           
         $.each(  myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
              var nay2 = [];  
                 nay = l.split(" ] ");
                    nay2 = l.split("  ")
             newsImg = nay[nay.length-4];
             newsHeader = nay[nay.length-3];
             newsView = nay[nay.length-2];
             newsDescription = nay[nay.length-1];
             $("#myNewslist").append( 
                 
                 '<li class="list__item list__item--chevron list__item--tappable" style="height: 95px;">' + 
                     
                     '<div class="col" style="margin-top: 0px;margin-left: 0px;width: 100%"> <div class="name" style="font-size: 18px;font-weight: 700;">' +  newsHeader + ' </div>' + 
                 ' <div align="left" class="desc" style="font-size: 16px;font-weight: normal;color: #ccc;">' + newsDescription + ' </div></div> <div class="col" style="width:40px;"></div>' + 
                 ' </li>'
                
                
             );
          
         });
              //$("#mytext").text(index + " : " + value);
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',400);
            //setTimeout('alertDialogSE.destroy()',2000);
                loginStatus = " ";
            }else{   }  
                
         
      });
});
$(document).on('ons-page:init', '#my-Mktdescription', function(event) {
    
    
   var navigator = event.component;
       if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);alert(loggedin);',100);
           } 
        
     $("#Mktdescriptionlist").fadeIn(1500);
   // $("#Mktdescriptionlist").animate({top:'123px'},'slow');
    setTimeout(function(){
        
        $("#Mktdescriptionlist").slideDown("slow");
        
    },2000)
    
});
$(document).on('ons-page:init', '#my-MDBuy', function(event) {
      
   var navigator = event.component;
    showbuyFields();
    
    if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);  
    } 
    
    $("#MDbuy_ordercondition").change(function(){
     var val = $("#MDbuy_ordercondition option:selected").html();
        
     er = val.toString();
        //$("#MDbuylimit_priceform").show('slow');
        //alert(er);
       if(er == "LIMIT"){
         // alert(er);  
          //$("#MDbuylimit_priceform").css("display","block");
           $("#MDbuylimit_priceform").show('slow');
        }
        if(er == "MARKET" || er == ""){
         // alert(er);  
          //$("#MDbuylimit_priceform").css("display","block");
           $("#MDbuylimit_priceform").hide('slow');
        }
    });
 
    
});
$(document).on('ons-page:init', '#my-MD_Sell', function(event) {
     var navigator = event.component;
    showsellFields();
    if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
    
    $("#MDsell_ordercondition").change(function(){
     var val = $("#MDsell_ordercondition option:selected").html();
        
     er = val.toString();
        //$("#MDbuylimit_priceform").show('slow');
        //alert(er);
       if(er == "LIMIT"){
         // alert(er);  
          //$("#MDbuylimit_priceform").css("display","block");
           $("#MDselllimit_priceform").show('slow');
        }
        if(er == "MARKET" || er == ""){
         // alert(er);  
          //$("#MDbuylimit_priceform").css("display","block");
           $("#MDbuylimit_priceform").hide('slow');
        }
    });
});
$(document).on('ons-page:init', '#my-about', function(event) {
     var navigator = event.component;
     if(loggedin == "true"){
    setTimeout('$(".pg_brokerIMGS").css("display","inline-block"); $(".pg_brokerLogoIN").css("display","block");$(".pg_brokerLogoIN").append(selected_broker); $(".pg_brokerIMGS").attr("src",selected_broker_img);',100);
           } 
        
    //showPORTlist();
});
$(document).ready(function(){
    //alert("dxgdgad");
    
      
      $("list__item").click(function(){
         
         
         
     });
                var myarray = [];
                var mydata; 
          //http://www.certification.programos.com.ng/goodpage.aspx
        
            
               $("#un").val("");
               $("#pw").val("");
       
    
        });
function dc(bg){
    alert(bg);
}
///////////////////////////////////////////////////////////////////////

///////////////  UI Initialization /////////
ons.ready(function() {
    
           ons.createAlertDialog('alert-dialog.html').then(function(alertDialog) {
            
               
          });
      ons.createAlertDialog('alert-dialogSE.html').then(function(alertDialogSE) {
            alertDialogSE.show();
          });
    
     ons.createAlertDialog('alert-dialogLOGIN.html').then(function(alertDialogLOGINSUCCESS) {
            //alertDialogSE.show();
         
         
          });
     ons.createAlertDialog('alert-dialogLOGINFAIL.html').then(function(alertDialogLOGINFAIL) {
            //alertDialogSE.show();
         
         
          });
    ons.createAlertDialog('alert-dialogTDSerach.html').then(function(alertdialogTDSerach) {
            //alertDialogSE.show();
         
         
          });
                
 });
////////////////////////////////////////////


///////// Display Market Price, Top Gainers, Top Losers  ////////
function displayOverviewlist(){
    
    
    //alert("dffhzsfh");
     $("#mylist2").slideUp("fast");
      $("#mylist3").slideUp("fast",showMktlist());
    
    
    
    
    setTimeout(' $("#mylist").slideDown();',1000);
    
    $("#mylist2").html(' ');
    $("#mylist3").html(' ');
}
function displayTopgainerlist(){
    
    
    $("#mylist").slideUp("fast");
   $("#mylist3").slideUp("fast",showMktlistFor_TG());
    
    setTimeout(' $("#mylist2").slideDown();',1000);
   
     $("#mylist").html(' ');
    $("#mylist3").html(' ');
     
    
}
function displayToploserslist(){
    
    
    $("#mylist").slideUp("fast");
     $("#mylist2").slideUp("fast",showMktlistFor_TL());
    
    setTimeout('$("#mylist3").slideDown();',1000);
   
     $("#mylist").html(' ');
    $("#mylist2").html(' ');
    
    
}
function showMktlistFor_TG(){
    
    modal.show();
    $.get("http://localhost:59497/topgainers.aspx", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
           
         $.each(  myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
             code = nay[nay.length-5];
             //name = nay[nay.length-5];
             open = nay[nay.length-4];
             close = nay[nay.length-3];
             change = nay[nay.length-2];
             sign = nay[nay.length-1];
             var arrows;
             if(sign == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sign == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
           $("#mylist2").append('<li class="mktlist list__item" style="  border-bottom: 4px solid #171717;">'+
           ' <div class="col">'+
            '<div class="name" style="font-size: x-large;font-weight: 800;margin-top: 13px;">'+ code +
            '</div>'+ 
            '<div class="location" style="font-size: x-small;height: 38px;position: relative;top: -13px;">'+ name +
                               
        '</div>'+
        ' <div align="right" class="name" style="font-size: x-large;height: 17px;margin-top: -59px;position: relative;padding-right: 10px;text-align: right;top: -1px;left: -196px;border-right-width: thin;border-right-color: #47484d;border-right-style: solid;">'+ open +
            '</div>'+
        '<div align="right" class="name" style="font-size: x-large;height: 17px;margin-top: -51px;position: relative;top: 27px;text-align: right;padding-right: 10px;left: -106px;border-right-width: thin;      border-right-color: #47484d;      border-right-style: solid;">'+ close +
        '</div>'+
        '<div align="right" class="name" style="font-size: x-large;height: 19px;margin-top: -50px;position: relative;text-align: right;top: 54px;padding-right: 10px;left: -12px;border-right-width: thin;      border-right-color: #47484d;      border-right-style: solid;'+ arrowcolor +'">'+ change +
        '</div>'+
        '<div class="name" style="position: relative;top: 36px;left: -7px;" align="right">'+
                               
    '<img src="img/'+ arrows +'" style="width: 19px;margin-right: 4px;margin-top: -10px;top: 1px;left: 20px;position: relative;">'+'</div>'+
                        '</div>'+
                '</li>');
             
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
        });
    
}
function showMktlistFor_TL(){
    
    //http://certification.programos.com.ng/goodpage.aspx?
    //http://localhost:59497/toplosers.aspx
    modal.show();
    $.get("http://certification.programos.com.ng/Topgainer.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);   
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
           
         $.each(  myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
             code = nay[nay.length-5];
            // name = nay[nay.length-5];
             open = nay[nay.length-4];
             close = nay[nay.length-3];
             change = nay[nay.length-2];
             sign = nay[nay.length-1];
             var arrows;
             if(sign == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sign == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
           $("#mylist3").append('<li class="mktlist list__item"  style="  border-bottom: 4px solid #171717;">'+
           ' <div class="col">'+
            '<div class="name" style="font-size: x-large;font-weight: 800;margin-top: 13px;">'+ code +
            '</div>'+ 
            '<div class="location" style="font-size: x-small;height: 38px;position: relative;top: -13px;">'+ name +
                               
        '</div>'+
        ' <div align="right" class="name" style="font-size: x-large;height: 17px;margin-top: -59px;position: relative;padding-right: 10px;text-align: right;top: -1px;left: -196px;border-right-width: thin;border-right-color: #47484d;border-right-style: solid;">'+ open +
            '</div>'+
        '<div align="right" class="name" style="font-size: x-large;height: 17px;margin-top: -51px;position: relative;top: 27px;text-align: right;padding-right: 10px;left: -106px;border-right-width: thin;      border-right-color: #47484d;      border-right-style: solid;">'+ close +
        '</div>'+
        '<div align="right" class="name" style="font-size: x-large;height: 19px;margin-top: -50px;position: relative;text-align: right;top: 54px;padding-right: 10px;left: -12px;border-right-width: thin;      border-right-color: #47484d;      border-right-style: solid;'+ arrowcolor +'">'+ change +
        '</div>'+
        '<div class="name" style="position: relative;top: 36px;left: -7px;" align="right">'+
                               
    '<img src="img/'+ arrows +'" style="width: 19px;margin-right: 4px;margin-top: -10px;top: 1px;left: 20px;position: relative;">'+'</div>'+
                        '</div>'+
                '</li>');
             
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
        });
    
}
function showMktlist(){
    
    //http://localhost:59497/Default.aspx?
    //http://certification.programos.com.ng/goodpage.aspx?
    var coderesult = " ";
    modal.show();
    $.get("http://localhost:59497/Default.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");//"/"
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each(  myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
           var code = nay[nay.length-9];
             name = nay[nay.length-8];
             pricedate = nay[nay.length-7];
             mktprice = nay[nay.length-6];
             dcount = nay[nay.length-5];
             volume = nay[nay.length-4];
             value = nay[nay.length-3];
             sybmol = nay[nay.length-2];
             sign = nay[nay.length-1];
             var arrows;
             if(sybmol == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sybmol == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
            coderesult = "'" + code + "'";
            n = i + 1;
             $("#mylist").append( 
                 
                 '<li id="list"  class="mktlist list__item list__item--tappable" onclick="showMKTdesp('+coderesult+')" style="  border-bottom: 4px solid #171717;">' + 
                    '<div class="col"> <div id="code" class="name" style="font-size: x-large;font-weight: 800;margin-top: 7px;">' + code + ' </div>' + 
                     ' <div class="location" style="font-size: medium;height: 35px;position: relative;top: -10px;">' + name + ' </div>' + '<div class="name" style="font-size: small;height: 0px;position: relative;top: -60px;color: #FFB300;text-align: center;/* left: 185px; */">'+ pricedate +'</div>'+
                 ' <div align="right" class="name" style="font-size: x-large;height: 35px;margin-top: -51px;position: relative;top: -9px;">' + mktprice + ' </div>' +
                 '<div align="right" id="symbol" class="name" style="font-size: smaller;'+ arrowcolor +';margin-top: -27px;text-al;">'+' <img src="img/'+ arrows +'" style="width: 17px;margin-right: 4px;margin-top: -10px;top: 5px;position: relative;"/>'+ sign +'</div>' +
                 '</div>' + 
                 ' </li>'
                
                
             );
             
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
        });
    
}

var cd1;
function showMKTdesp(cd){
    
    
  
  cd1 = cd;
    
     myNavigator.pushPage('Mktdescription.html', { animation : 'slide' } );
   $("#Mktdescriptionlist").fadeIn("slow");
     modal.show();
   setTimeout('query()',1000);
   
}
function query(){
    
    
    
     $.post("http://localhost:59497/mktpricedesp.aspx?" + cd1, 
       function(data, status){
        
       // myarray =  data.split(",");
        //myarray.pop();
        var myarray = [];
        myarray = data.split("@");
        loginStatus = status;
        //alert(myarray);
       /// $("#pricedate").html("343434");
        var li = 1;
            var i1 =1;
        code1 = myarray[myarray.length-9];
        name1 = myarray[myarray.length-8];
       pricedate = myarray[myarray.length-7];
        marketprice = myarray[myarray.length-6];
        dealcount = myarray[myarray.length-5];
        volume = myarray[myarray.length-4];
        value = myarray[myarray.length-3];
        change = myarray[myarray.length-1];
       
        
        
        $("#code1").append(code1);
         $("#name1").append(name1);
         $("#pricedate").append(pricedate);
         $("#marketprice").append(marketprice);
         $("#dealcount").append(dealcount);
         $("#volume").append(volume);
         $("#value").append(value);
         $("#change").append(change);
        
          if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
        /* $.each(  myarray, function( i, l ){
               alert( "Index #" + i + ": " + l );
             // alert("Data: " + l + "\nStatus" + status );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" @ ");
                   // nay2 = l.split("  ")
           var code = nay[nay.length-9];
             name = nay[nay.length-8];
             pricedate = nay[nay.length-7];
             mktprice = nay[nay.length-6];
             dcount = nay[nay.length-5];
             volume = nay[nay.length-4];
             value = nay[nay.length-3];
             sign = nay[nay.length-2];
             sign = nay[nay.length-1];
             var arrows;
             if(sybmol == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sybmol == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
             
              postResult = status;
        
      
                 $("#code1").html(code);
                 $("#name1").html(name); 
                $("#pricedate").html(pricedate);
                 $("#marketprice").html(mktprice); 
                 $("#dealcount").html(dcount);
                 $("#volume").html(volume);
                 $("#value").html(value);
                 $("#sign").html(sign);
                 $("#change").html(change);
         });
           

             */ 
    });
    
    
    
}
///////////////////////////////////////////////////////////////

//////////// Buy And Sell Mandates//////
function showbuyFields(){
     var coderesult = " ";
    
    modal.show();
    $.get("http://localhost:59497/newmandatefields.aspx?", function(data, status){
        
           
         
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each( myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
           var security1 = nay[nay.length-3];
            var timeofforce = nay[nay.length-2];
             
            var ordercondition = nay[nay.length-1];
             //alert(security1);
        $("#mdbuysecurityemptyoption").after('<option>'+ security1 +'</option>');
        $("#mdbuytimeinforceemptyoption").after('<option>'+ timeofforce +'</option>');
        $("#mdbuyorderconditionemptyoption").after('<option>'+ ordercondition +'</option>');
                 
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
         });
        
        
    });


}
function showsellFields(){
    
    var coderesult = " ";
    
    modal.show();
    $.get("http://localhost:59497/newmandatefields.aspx?", function(data, status){
        
           
         
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each( myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
           var security1 = nay[nay.length-3];
            var timeofforce = nay[nay.length-2];
             
            var ordercondition = nay[nay.length-1];
             //alert(security1);
        $("#mdsellsecurityemptyoption").after('<option>'+ security1 +'</option>');
        $("#mdselltimeinforceemptyoption").after('<option>'+ timeofforce +'</option>');
        $("#mdsellorderconditionemptyoption").after('<option>'+ ordercondition +'</option>');
                 
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
         });
        
        
    });
    
    
}
function buyMandates(){
    
    
}
function sellMandates(){
    
    
}

////////////////////////////////////////


///////// Display Protfolio  ////////
function showPORTlist(){
    
    
    
    var coderesult = " ";
    modal.show();
    $.get("http://localhost:59497/port.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each(myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" / ");
                   // nay2 = l.split("  ")
           var code = nay[nay.length-11];
             name = nay[nay.length-10];
            // pricedate = nay[nay.length-7];
            // mktprice = nay[nay.length-6];
            // dcount = nay[nay.length-5];
            // volume = nay[nay.length-4];
             //value = nay[nay.length-3];
             //sybmol = nay[nay.length-2];
             //sign = nay[nay.length-1];
             var arrows;
             if(sybmol == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sybmol == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
            coderesult = "'" + code + "'";
            n = i + 1;
             $("#port_list").append( 
                 
             '<li id="list"  class="mktlist list__item list__item--chevron list__item--tappable" onclick="showPORTdesp('+coderesult+')" style="  border-bottom: 4px solid #171717;">'+
                '<div class="col"> <div id="code" class="name" style="font-size: large;font-weight: 800;margin-top: 9px;position: relative;top: 4px;"> ' + code + ' </div>'+
                        
                '<div class="location" style="font-size: medium;height: 26px;position: relative;top: -10px;"> ' + name + ' PLC</div>'+
                '<div id="code" class="name" style="font-size: small;margin-top: -23px;margin-right: 31px;position: relative;text-align: right;color: #00B1DC;top: -18px;"> click to view details </div>'+
                     '</div>'+
             '</li>'
                
             );
                        
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
    });
    
    
}
var cd2;
function showPORTdesp(cd){
    
    cd2 = cd;
    myportNavigator.pushPage('PORTdescription.html', { animation : 'slide' } );
   $("#PORTdescription").fadeIn("slow");
   
     modal.show();
   setTimeout('showPORTquery()',1000);
    
}
function showPORTquery(){
    
    

    $.post("http://localhost:59497/portdesp.aspx?" + cd2, 
       function(data, status){
        
       // myarray =  data.split(",");
        //myarray.pop();
        var myarray = [];
        myarray = data.split("/");
        loginStatus = status;
        //alert(myarray);
       /// $("#pricedate").html("343434");
        var li = 1;
            var i1 =1;
        code2 = myarray[myarray.length-10];
        //name2 = myarray[myarray.length-10];
       port_volume = myarray[myarray.length-9];
        port_unitprice = myarray[myarray.length-8];
        port_totalcost = myarray[myarray.length-7];
        port_costweight = myarray[myarray.length-6];
        port_currentmktprice= myarray[myarray.length-5];
        port_currentmktvalue = myarray[myarray.length-4];
        port_mktweight = myarray[myarray.length-3];
        port_totalgainloss = myarray[myarray.length-2];
        port_capitalgainloss = myarray[myarray.length-1];
        
    $("#code2").append(code2);
    $("#name2").append(name2);
    $("#port_volume").append(port_volume);
    $("#port_unitprice").append(port_unitprice);
    $("#port_totalcost").append(port_totalcost);
    $("#port_costweight").append(port_costweight);
    $("#port_currentmktprice").append(port_currentmktprice);
    $("#port_currentmktvalue").append(port_currentmktvalue);
     $("#port_mktweight").append(port_mktweight);
    $("#port_totalgainloss").append(port_totalgainloss);
    $("#port_capitalgainloss").append(port_capitalgainloss);   
          if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
        /* $.each(  myarray, function( i, l ){
               alert( "Index #" + i + ": " + l );
             // alert("Data: " + l + "\nStatus" + status );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" @ ");
                   // nay2 = l.split("  ")
           var code = nay[nay.length-9];
             name = nay[nay.length-8];
             pricedate = nay[nay.length-7];
             mktprice = nay[nay.length-6];
             dcount = nay[nay.length-5];
             volume = nay[nay.length-4];
             value = nay[nay.length-3];
             sign = nay[nay.length-2];
             sign = nay[nay.length-1];
             var arrows;
             if(sybmol == "+"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
                var arrows = "arrowsup.png";
                 var arrowcolor = "color: #17c900";
             }
             if(sybmol == "-"){
                 //$("#symbol").css('background-image','url(img/arrows.png)');
               var  arrows = "arrowsdown.png";
                var arrowcolor = "color: #FB4736";
             }
             
              postResult = status;
        
      
                 $("#code1").html(code);
                 $("#name1").html(name); 
                $("#pricedate").html(pricedate);
                 $("#marketprice").html(mktprice); 
                 $("#dealcount").html(dcount);
                 $("#volume").html(volume);
                 $("#value").html(value);
                 $("#sign").html(sign);
                 $("#change").html(change);
         });
           

             */ 
    });
    
    
    
    
}
/////////////////////////////////////


///////// Display Transcation Details ////////
function showTDlist(){
    
    
    
    var coderesult = " ";
    
    modal.show();
    $.get("http://localhost:59497/transa.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each(myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" @ ");
                   // nay2 = l.split("  ")
           var  td_date = nay[nay.length-6];
             td_reference = nay[nay.length-5];
             
            // pricedate = nay[nay.length-7];
            // mktprice = nay[nay.length-6];
            // dcount = nay[nay.length-5];
            // volume = nay[nay.length-4];
             //value = nay[nay.length-3];
             //sybmol = nay[nay.length-2];
             //sign = nay[nay.length-1];
            
             coderesult = "'" + td_reference + "'";
           
            // alert(td_date);
             $("#TD_list").append('<li id="list"  class="mktlist list__item list__item--chevron list__item--tappable" onclick="showTDdesp('+coderesult+')" style="  border-bottom: 4px solid #171717;">'+'<div class="col"> <div id="code" class="name" style="font-size: large;font-weight: 800;margin-top: 9px;position: relative;top: 4px;"> ' + td_reference + ' </div>'+'<div class="location" style="font-size: medium;height: 26px;position: relative;top: -10px;"> ' + td_date + ' PLC</div>'+'<div id="code" class="name" style="font-size: small;margin-top: -23px;margin-right: 31px;position: relative;text-align: right;color: #00B1DC;top: -18px;"> click to view details </div>'+'</div>'+'</li>');
                        
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
    });
    
    
}
var cd3;
function showTDdesp(cd){
    
    cd3 = cd;
    myTDNavigator.pushPage('TDdescription.html', { animation : 'slide' } );
   $("#TDdescription").fadeIn("slow");
   
     modal.show();
   setTimeout('showTDquery()',1000);
    
}
function showTDquery(){
    
    $.post("http://localhost:59497/transadesp.aspx?" + cd3, 
       function(data, status){
        
       // myarray =  data.split(",");
        //myarray.pop();
        var myarray = [];
        myarray = data.split("@");
        loginStatus = status;
        //alert(myarray);
       /// $("#pricedate").html("343434");
        var li = 1;
            var i1 =1;
        td_date = myarray[myarray.length-6];
        td_reference = myarray[myarray.length-5];
       td_despcription= myarray[myarray.length-4];
        td_debit = myarray[myarray.length-3];
        td_credit= myarray[myarray.length-2];
        td_balance = myarray[myarray.length-1];
       
     $("#code4").append(td_reference);
    $("#name4").append(td_date);   
    $("#td_date").append(td_date);
    $("#td_reference").append(td_reference);
    $("#td_despcription").append(td_despcription);
    $("#td_debit").append(td_debit);
    $("#td_credit").append(td_credit);
    $("#td_balance").append(td_balance);
   
          if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
        
    });
    
    
    
    
}
//////////////////////////////////////////////////


///////// Display Pending Mandates  ////////////
function displayPendbuylist(){
    
  
      $("#pendselllist").slideUp("fast",showPendbuylist());
    setTimeout('$("#pendbuylist").slideDown();',1000);
    
    $("#pendselllist").empty();
   
    
}
function displayPendselllist(){
    
       $("#pendbuylist").slideUp("fast",showPendselllist());
    setTimeout('$("#pendselllist").slideDown();',1000);
    
    $("#pendbuylist").empty();
    $("#pendbuylist").html(' ');
}

function showPendbuylist(){
    
    
    
    $("#pendbuylist").empty();
    $("#pendbuylist").html(' ');
    var coderesult = " ";
    
    modal.show();
    $.get("http://localhost:59497/pendingbuy.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each(myarray, function( i, l ){
             //alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" @ ");
                   // nay2 = l.split("  ")
           var  code = nay[nay.length-8];
             quantity = nay[nay.length-7];
             condition = nay[nay.length-6];
             price = nay[nay.length-5];
             source = nay[nay.length-4];
            timeinofforce = nay[nay.length-3];
             expiry = nay[nay.length-2];
             date = nay[nay.length-1];
       
            
             coderesult = "'" + code + "'";
           
            // alert(td_date);
             $("#pendbuylist").append('<li id="list"  class="mktlist list__item list__item--chevron list__item--tappable" onclick="showpendbuydesp('+coderesult+')" style="  border-bottom: 4px solid #171717;">'+'<div class="col"> <div id="code" class="name" style="font-size: large;font-weight: 800;margin-top: 9px;position: relative;top: 4px;"> ' + code + ' </div>'+'<div class="location" style="font-size: medium;height: 26px;position: relative;top: -10px;"> ' + date + ' PLC</div>'+'<div id="code" class="name" style="font-size: small;margin-top: -23px;margin-right: 31px;position: relative;text-align: right;color: #00B1DC;top: -18px;"> click to view details </div>'+'</div>'+'</li>');
                        
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
    });
    
    
}
var cd4;
function showpendbuydesp(cd){
    
    
  
    cd4 = cd;
    mypendNavigator.pushPage('pendbuydescription.html', { animation : 'slide' } );
   $("#Pendescription").fadeIn("slow");
   
     modal.show();
   setTimeout('showpendbuyquery()',1000);
    
}
function showpendbuyquery(){
    
    
 
    
    $.post("http://localhost:59497/pendbuydesp.aspx?" + cd4, 
       function(data, status){
        
       // myarray =  data.split(",");
        //myarray.pop();
        var myarray = [];
        myarray = data.split(" @ ");
        loginStatus = status;
        modal.hide();
   // alert(myarray[myarray.length-2]);
        var code = myarray[myarray.length-8];
          var quantity = myarray[myarray.length-7];
            var condition = myarray[myarray.length-6];
           var  price = myarray[myarray.length-5];
           var  source = myarray[myarray.length-4];
           var timeinforce = myarray[myarray.length-3];
           var expiry2 = myarray[myarray.length-2];
          var date2 = myarray[myarray.length-1];
          
     $("#code5").append(code);
    $("#quantity").append(quantity);   
    $("#condition").append(condition);
    $("#price").append(price);
    $("#source").append(source);
    $("#timeinforce").append(timeinforce);
    $("#expiry2").append(expiry2);
    $("#date2").append(date2);
  
   //alert(timeinforce);
          if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
        
    });
    
    
    
    
}

function showPendselllist(){
    
    
    $("#pendselllist").empty();
    $("#pendselllist").html(' ');
    var coderesult = " ";
    
    modal.show();
    $.get("http://localhost:59497/pendingsell.aspx?", function(data, status){
      /// alert("Data: " + data + "\nStatus: " + status);
        
        loginStatus = status.toString();
        
        myarray =  data.split(",");
        myarray.pop();
         // alert(myarray.length);
            var li = 1;
            var i1 =1;
         $.each(myarray, function( i, l ){
            // alert( "Index #" + i + ": " + l );
             var nay = [];
             // var nay2 = [];  
            nay = l.split(" @ ");
                   // nay2 = l.split("  ")
           var  code = nay[nay.length-8];
             quantity = nay[nay.length-7];
             condition = nay[nay.length-6];
             price = nay[nay.length-5];
             source = nay[nay.length-4];
            timeinofforce = nay[nay.length-3];
             expiry = nay[nay.length-2];
             date = nay[nay.length-1];
       
            
             coderesult = "'" + code + "'";
           
            // alert(td_date);
             $("#pendselllist").append('<li id="list"  class="mktlist list__item list__item--chevron list__item--tappable" onclick="showpendselldesp('+coderesult+')" style="  border-bottom: 4px solid #171717;">'+'<div class="col"> <div id="code" class="name" style="font-size: large;font-weight: 800;margin-top: 9px;position: relative;top: 4px;"> ' + code + ' </div>'+'<div class="location" style="font-size: medium;height: 26px;position: relative;top: -10px;"> ' + date + ' PLC</div>'+'<div id="code" class="name" style="font-size: small;margin-top: -23px;margin-right: 31px;position: relative;text-align: right;color: #00B1DC;top: -18px;"> click to view details </div>'+'</div>'+'</li>');
                        
         if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
          
            });
        
    });
    
    
}
var cd5;
function showpendselldesp(cd){
    
    
     
    
    cd5 = cd;
    mypendNavigator.pushPage('pendselldescription.html', { animation : 'slide' } );
   $("#Pendsellescription").fadeIn("slow");
   
     modal.show();
   setTimeout('showpendsellquery()',1000);
    
}
function showpendsellquery(){
    
    
 
    
    $.post("http://localhost:59497/pendselldesp.aspx?" + cd5, 
       function(data, status){
        
       // myarray =  data.split(",");
        //myarray.pop();
        var myarray = [];
        myarray = data.split(" @ ");
        loginStatus = status;
        modal.hide();
   //alert(myarray[myarray.length-7]);
        var code = myarray[myarray.length-8];
          var quantity = myarray[myarray.length-7];
            var condition = myarray[myarray.length-6];
           var  price = myarray[myarray.length-5];
           var  source = myarray[myarray.length-4];
           var timeinforce = myarray[myarray.length-3];
           var expiry2 = myarray[myarray.length-2];
          var date2 = myarray[myarray.length-1];
          
     $("#code6").append(code);
    $("#quantity6").append(quantity);   
    $("#condition6").append(condition);
    $("#price6").append(price);
    $("#source6").append(source);
    $("#timeinforce6").append(timeinforce);
    $("#expiry6").append(expiry2);
    $("#date6").append(date2);
  
   //alert(timeinforce);
          if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',1000);
            setTimeout('alertDialogSE.destroy()',1000);
                loginStatus = " ";
            }else{  }
        
    });
    
    
    
    
}

///////////////////////////////////////////////


///////// Display News  ////////
function showNewslist(){
     modal.show();
    $.get("http://localhost:59497/News.aspx", function(data, status){
       //alert("Data: " + data + "\nStatus: " + status);
        myarray =  data.split(" } ");
         myarray.pop();
        //alert(myarray.length);
           
         $.each(  myarray, function( i, l ){
               // alert( "Index #" + i + ": " + l );
             var nay = [];
              var nay2 = [];  
                 nay = l.split(" ] ");
                    nay2 = l.split("  ")
             newsImg = nay[nay.length-4];
             newsHeader = nay[nay.length-3];
             newsView = nay[nay.length-2];
             newsDescription = nay[nay.length-1];
             $("#myNewslist").append( 
                 
                 '<li class="list__item list__item--chevron list__item--tappable" style="height: 95px;">' + 
                     '<div class="col" style="margin-top: 0px;margin-left: 0px;width: 100%;"> <div class="name" style="font-size: 18px;font-weight: 700;">' +  newsHeader + ' </div>' + 
                 ' <div align="left" class="desc" style="font-size: 16px;font-weight: normal;color: #ccc;">' + newsDescription + ' </div></div> <div class="col" style="width:40px;"></div>' + 
                 ' </li>'
                
                
             );
          
         });
              //$("#mytext").text(index + " : " + value);
           if(loginStatus == "success")
            {
                
                setTimeout('modal.hide()',2000);
            //setTimeout('alertDialogSE.destroy()',2000);
                loginStatus = " ";
            }else{   }
                
         
      });

}
///////////////////////////////


////////////  Display Stoke Exchange List   ///////////////////
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
    
    
    
    
    //Do Something Here.................
    showMktlist();
   
    
  
}
function loadingGSE(){
    
    modal.show();
    //Do Something Here.................
    setTimeout('modal.hide()',2000);
    setTimeout('alertDialogSE.destroy()',2000);
}
/////////////////////////////////////////////////////////////


///////////     Login Stuffs    ///////////////////
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
            modal.show();
           
            
           setTimeout('siginOutCloseloggedInStuffs()',1000);
            
           setTimeout('modal.hide()', 2000);  
        }else{}
}
function siginOutCloseloggedInStuffs(){
     $("#pg_customerSignOut").hide('slow');
            $("#pg_signOutBottombar").hide('slow');
            $("#pg_customerLoggedin").hide('slow');
            
            $("#pg_customerNotIN").css('opacity','1');
            $("#pg_customerNotIN").css('display','block');
            
             $(".pg_brokerIMGS").hide('slow');      
        $(".pg_brokerLogoIN").hide('slow'); 
    
}
function showSigIn(){
    
    alertDialog.show();
    menu.setMainPage('Markets.html', {closeMenu: true});
}
function loading(){
    un = $("#un").val();
    pw = $("#pw").val();
    if( un == "" && pw == ""){
        
    alertDialogLOGINFAIL.show();
        
    }else{
        
        
        login();
    }
    
    
    
}
function login(){
 //http://certification.programos.com.ng/mobilelogin.aspx?
 var   username = un;
  var  password = pw;
$.post("http://localhost:59497/users.aspx?" + username + "?" + password, 
       function(data, status){
    
    
            postResult = status;
           
    var myarr = [];
   var myarr = data.split(' / ');
    var results = myarr[myarr.length-4];
  var  type = myarr[myarr.length-3];
   var name = myarr[myarr.length-2];
   var  omsbal = myarr[myarr.length-1];
    
          //alert("Data: " + name + "\nStatus" + status );
 if(results == "login Successful")
     {
         //setTimeout('modalPW.hide()', 100);
                 
        
                
                
                 alertDialog.hide();
            navigatorSI.popPage()
          var options = 
                   {animation:'lift',
                    onTransitionEnd: function() {
                        alert("Execute Refresh list");
                    }
                   };
           $("#pg_customerImg").attr('src','img/Oyelowo-David 129X128.jpg');

            $("#pg_customerLoggedin").css('opacity','1');
            $("#pg_customerLoggedin").css('display','block');

             $("#pg_customerNotIN").css('opacity','0');
           $("#pg_customerNotIN").css('display','none');



             myNavigator.pushPage("Markets.html",options);
          showMktlist();
                 //show('#login.html');
                /**/ 
              $(".pg_brokerIMGS").show('slow');   
                $(".pg_brokerLogoIN").show('slow');
            $("#pg_signOutBottombar").show();
            $("#pg_customerSignOut").show('slow');
            
         ////////////////////////////////////
          $("#name").html(name);
         if(type == "I"){
             
             $("#type").html("Individual");
             
         }else if(type == "C"){
             
              $("#type").html("Company");
         }
         /////////////////////////////////////
         
         $(".pg_brokerLogoIN").append(selected_broker);        $(".pg_brokerIMGS").attr("src",selected_broker_img);
        
        
        loggedin = "true";
       
         //////////////////////////////////
         
         
         modalPW.hide();
           
          showMktlist();
         
            }else{ 
                modalPW.hide();
                alertDialogLOGINFAIL.show();
               alertDialogLOGINFAIL.isCancelable();
                 showMktlist();
                // $("#un").val('');
              // $("#pw").val('');
                
            }
     
     
        
            } );
    
    
   
      

}
function error(){
    
    
    

    setTimeout('modal.hide()',2000);
     setTimeout('alert("wrong username")',2000);
   
    
    
}

function MLgetName(){
    
   selected_broker = $("#ML_broker_name").html();
   selected_broker_img = "img/GTB.png"; 
   // alert(selected_broker);
    $(".pg_SignInToBrokerNm").html(selected_broker); $("#pg_SignInToBrokerlogo").attr("src",selected_broker_img);
}
function DBgetName(){
     
   selected_broker = $("#DB_broker_name").html();
    selected_broker_img = "img/download.png";
    //alert(selected_broker + "\n" +selected_broker_img);
    //setTimeout('setBrokerName()',100);
      $(".pg_SignInToBrokerNm").html(selected_broker); $("#pg_SignInToBrokerlogo").attr("src",selected_broker_img);
}
function setDBBrokerName(){
    
    
    
}
///////////////////////////////////////////////////

////////////// About page ///////////
function aboutphone(){
    
    document.location.href = 'tel:+1-800-555-1234';
    
}
/////////////////////////////////////


/////// function to prevent broker logo from disappering /////
function showMKTmenu(){
    
    menu.toggleMenu();
    //$("#pg_brokerIMGS").css('opacity'.'0');  
       // $(".pg_brokerLogoIN").css('opacity'.'0');
}

////////////////////////////////////////////////////////////////



