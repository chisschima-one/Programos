
 
 ons.ready(function() {
           ons.createAlertDialog('alert-dialog.html').then(function(alertDialog) {
            alertDialog.show();
          });
                 ons.createDialog('login.html').then(function(dialog) {
    dialog.show();
                 });
        });
       