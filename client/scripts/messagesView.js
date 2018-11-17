var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function() {
  },
  
  renderMessage: function(message) {
    
    var name = message.username;
    var text = message.text;
    var roomname = message.roomname;
    
    var code = '<div class = "roomname"><h3>' + name + '</h3><p>' + text + '</p></div>';
    MessagesView.$chats.append(code);
  }
  
};
