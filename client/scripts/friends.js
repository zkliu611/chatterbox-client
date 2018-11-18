var Friends = {

  friendList: {},
  
  toggleStatus: function(event) {
    // console.log(event);
    var friend = event.currentTarget.textContent;
    console.log(friend);
    if ( Friends.friendList.hasOwnProperty(friend) ) {
      delete Friends.friendList[friend];
      
    } else {
      
      Friends.friendList[friend] = true;
    }
   
    console.log(this.friendList);
  }
  
  
};