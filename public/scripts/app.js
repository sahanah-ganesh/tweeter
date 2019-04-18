/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {

  for (tweet of tweets) {

    let $tweet = createTweetElement(tweet);
    $('.tweets-container').append($tweet);

      console.log(tweet);

  }
}

  function createTweetElement(tweet) {

    let {user, content, created_at} = tweet;
    let {name, avatars, handle} = user;
    let {text} = content;
    let src = avatars.regular;


    $tweet = $('<article>').addClass('tweet');
    $header = $('<header>');
    $img = $('<img>').addClass('avatar').attr("src");
    $h3 = $('<h3>').text(name);
    $h5 = $('<h5>').text(handle);
    $p = $('<p>').addClass('tweet-text').text(text);
    $footer = $('<footer>');
    $span = $('<span>').text(created_at);
    $div = $('<div>').addClass('icons');
    $iconFlag = $(`<i class='fa fa-flag'></i>`);
    $iconRetweet = $(`<i class='fa fa-retweet'></i>`);
    $iconHeart = $(`<i class='fa fa-heart'></i>`);

//appending elements
    $header.append($img);
    $header.append($h3);
    $header.append($h5);

    $footer.append($span);

    $div.append($iconFlag);
    $div.append($iconRetweet);
    $div.append($iconHeart);

    $footer.append($div);

    $tweet.append($header);
    $tweet.append($p);
    $tweet.append($footer);


  return $tweet;
}

renderTweets(data);


});
    // <article>

    //       <header>

    //         <img class="avatar" src="/images/bird.png">

    //         <h3>Sahanah</h3>

    //         <h5>@Sahanah</h5>

    //       </header>

    //           <p class='tweet-text'>Little tweet here</p>

    //       <footer>

    //         <span id="date" class="months">days ago</span>

    //         <div class="icons">
    //           <i class="fa fa-flag" aria-hidden="true"></i>
    //           <i class="fa fa-retweet" aria-hidden="true"></i>
    //           <i class="fa fa-heart" aria-hidden="true"></i>
    //         </div>

    //       </footer>

    //     </article>




  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container


