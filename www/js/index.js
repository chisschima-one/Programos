
var app = {
   
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {



        /*var MyDelegate = {
          countItems: function() {
            return 45;
          },
          createItemContent: function(index, oldContent) {
            if (oldContent) {
              return oldContent;
            }

            var $element = $("<div><span style='opacity: 0.7;'><ons-icon icon='fa-spinner' spin='true'></ons-icon> Loading bacon...</span></div>");

            var request = $.getJSON('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1', function(data) {
              $element.text(data[0]);
            });

            $element.data('request', request);

            return $element[0];
          },
          destroyItemContent: function(index, element) {
            var request = $(element).data('request');
            request.abort();
          },
          calculateItemHeight: function(index) {
            return 44;
          }
        }   
         */

        /*
        function DoIt()
        {
            var surl = "http://localhost:65458/Default.aspx";
               $.ajax({
                type: 'GET',
                url: surl,
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                data: { UserID: 1234 },
                dataType: "jsonp",
                success: function(val) {
                      myjsonobject = val;
                },
                error: function(xhr, status, error) { alert('Error !!'); },
                async: false,
                cache: false
            });   $('#somediv').html(myjsonobject);
        }
        */
    

       
        
        
        
        app.receivedEvent('deviceready');
        
           
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};

app.initialize();
