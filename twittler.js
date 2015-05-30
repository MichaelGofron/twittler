      $(document).ready(function(){

        // function now orders by wrong dates such that the latest are at the bottom
        // we want it to be the other way

        var index = 0;
        function viewNewTweets(){
          var lastIndex = streams.home.length - 1;
          while(index < lastIndex){
            var tweet = streams.home[index];
            var $tweet = $('<div class="container-fluid tweet"></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message
             + " " + tweet.created_at);
            $tweet.appendTo($body);
            index += 1;
          }
          console.log("calling new Tweets");
        }

        function addRefreshButton(){
          var $button = $('<button id="refresh">Refresh</button>');
          $button.on("click",viewNewTweets);
          $button.prependTo($body);
        }

        var $body = $('body');
        $body.html('');

        viewNewTweets();
        addRefreshButton();
      });
      