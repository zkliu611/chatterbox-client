var MessagesView = {

  $chats: $('#chats'),
  
  items: null,
  
  initialize: function() {
    
    MessagesView.render();
  },

  render: function() {
    
    var messages = MessagesView.items.results;
    
    var code = '';
    
    for ( var idx = 0; idx < messages.length; idx++ ) {
      
      var name = sanitizeHtml(messages[idx].username);
      var text = sanitizeHtml(messages[idx].text);
      var time = sanitizeHtml(messages[idx].createdAt);
      
      // display tweets in a table style
      code += '<table><thead><tr><th>User: ' + name + ' </th></tr></thead>';
      code += '<tbody><tr><th>' + text + '</th></tr></tbody>';
      code += '<tfoot><tr><th>Message time: ' + time + '</th></tr></tfoot></table>';    
          
    }
    
    MessagesView.$chats.append(code);
    
  },
  
  renderMessage: function(message) {
    
    var name = message.username;
    var text = message.text;
    var roomname = message.roomname;
    
    var code = '<div class = "roomname"><h3>' + name + '</h3><p>' + text + '</p></div>';
    MessagesView.$chats.append(code);
  }
  
};
