      $(document).ready(function(){

        resetBody();
        viewNewTweets();
      });

      var userProfile = false; // if on user profile
      // When viewing a user's profile we must be able to refresh the users tweets
      function viewUserTweets(userStr){
        userProfile = true;
          resetUserTweets(userStr); // clears all tweets
          var UserTweets = _.filter(streams.home,function(tweet){
            if (tweet.user == userStr){
              generateTweet(tweet); // generates tweet with tweet object
            }
          });
          addBackButton();
        }
     function resetTweets(){
          resetBody();
          addRefreshButton();
        }
        function resetUserTweets(userStr){
          resetBody();
          if (userProfile)
            addUserRefreshButton(userStr);
          else
            addRefreshButton();
        }

        function addUserRefreshButton(userStr){
          $body = $('body');
          var $button = $('<button class="refresh" onclick="viewUserTweets(\''+userStr+'\')" >Refresh</button>');
          $button.on("click",viewNewTweets);
          $button.prependTo($body);
        }
    
    function resetBody(){
          $('body').html('');
        }

        function generateTweet(tweet){
          $body = $('body');
          var $tweet = $('<div class="container-fluid tweet"></div>');
          $tweet.html('<a onclick="viewUserTweets(\''+tweet.user+'\')">' + '@' + tweet.user + "</a>" + ': ' + tweet.message
          + " " + tweet.created_at);
          $tweet.appendTo($body);
        }

        function addRefreshButton(){
          $body = $('body');
          var $button = $('<button class="refresh">Refresh</button>');
          $button.on("click",viewNewTweets);
          $button.prependTo($body);
        }
        function addBackButton(){
          $body = $('body');
          var $backButton = $('<button class="refresh" onclick="viewNewTweets()">Back</button>');
          $backButton.on("click",viewNewTweets);
          $backButton.appendTo($body);
        }
        function viewNewTweets(){
          userProfile = false;
          resetTweets();
          var $body = $('body');
          var index = 0;
          var lastIndex = streams.home.length - 1;
          var twittlerUsers = []
          while(index < lastIndex){
            var tweet = streams.home[index];
            generateTweet(tweet);
            index += 1;
          }
        }