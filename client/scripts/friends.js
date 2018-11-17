var Friends = {

  friendList: {},
  
  toggleStatus: function(friend = '') {
    
    if ( Friends.friendList.hasOwnProperty(friend) ) {
      delete Friends.friendList[friend];
      
    } else {
      
      Friends.friendList[friend] = true;
    }
    console.log(friend);
    console.log(this.friendList);
  }
  
  
};