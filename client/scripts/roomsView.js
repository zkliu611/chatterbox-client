var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.append('<option id = "public">Public</option>');
    RoomsView.render();
  },

  render: function() {
    // get all the rooms exist and display them in the list
    var messages = App.data.results;
    var rooms = {};
    var code = '';
    
    for ( var idx = 0; idx < messages.length; idx++ ) {
      // get the values from the object and sanitize it
      var key = sanitizeHtml(messages[idx].roomname);
      rooms[key] = null;
 
    }
    
    for ( var key in rooms ) {
      // display messages in a table style
      code += '<option id = "key">' + key + '</option>';
            
    }
    console.log(code);
    
    RoomsView.$select.append(code);
  },
  
  renderRoom: function(roomName) {
    var code = '<option id = "roomName">' + roomName + '</option>';
    RoomsView.$select.append(code);
    
  }

};


