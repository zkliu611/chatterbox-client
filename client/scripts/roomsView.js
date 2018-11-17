var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    var code = '<option id = "roomName">' + roomName + '</option>';
    RoomsView.$select.append(code);
    
  }

};


