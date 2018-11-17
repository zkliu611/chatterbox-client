var Rooms = {
  
  add: function() {
    alert("been called");
    var roomName = prompt('Please Enter a new Room name');
    RoomsView.renderRoom(roomName);
    
  }

};