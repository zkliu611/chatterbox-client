var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  
  data: null,

  initialize: function() {
    App.username = window.location.search.substr(10);
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    // initialize the brevious functions and refersh the out put every 0.5 sec
    setTimeout(FormView.initialize, 500);
    setTimeout(RoomsView.initialize, 500);
    setTimeout(MessagesView.initialize, 500);
    

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      App.data = data; 
      callback();
    });
    
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  
};
