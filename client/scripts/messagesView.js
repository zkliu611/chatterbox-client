var MessagesView = {

  $chats: $('#chats'),
  
  items: null,
  
  initialize: function() {
    
    MessagesView.render();
    
    MessagesView.$chats.on('click', '.username', function(event) {
      Friends.toggleStatus(event);
    });
    
  },

  render: function() {
    
    var messages = App.data.results;
    
    var code = '';
    
    for ( var idx = 0; idx < messages.length; idx++ ) {
      // get the values from the object and sanitize it
      var name = sanitizeHtml(messages[idx].username);
      var text = sanitizeHtml(messages[idx].text);
      var time = sanitizeHtml(messages[idx].createdAt);
      
      // display messages in a table style
      code += '<table>';
      code += '<thead class = username><tr><th>' + name + '</th></tr></thead>';
      if (Friends.friendList[name]) {
        code += '<tbody><tr><th><strong>' + text + '</strong></th></tr></tbody>';
      } else {
        code += '<tbody><tr><th>' + text + '</th></tr></tbody>';
      }
      code += '<tfoot><tr><th>Message time: ' + time + '</th></tr></tfoot>';
      code += '</table>';    
          
    }
    
    MessagesView.$chats.append(code);
    
  },
  
  renderMessage: function(message) {
    
    var name = message.username;
    var text = message.text;
    var roomname = message.roomname;
    
    var code = '<div class = "roomname"><h3 class = "username" onclick="Friends.toggleStatus(name)">' + name + '</h3><p>' + text + '</p></div>';
    MessagesView.$chats.append(code);
    
  }
  
};
