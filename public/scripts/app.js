$(document).ready(function() {

    $('.new-tweet').slideUp();
    $('textarea').keyup(function() {
        $('#error').slideUp()
    });

    loadTweets();

    $('#nav-bar button').on('click', (function() {
        $('.new-tweet').slideToggle('slow');
        $('#tweet-area').focus();
    }));

    function renderTweets(tweets) {

        var tweetContainer = $('.tweets-container')
        tweetContainer.empty();

        for (tweet of tweets) {
            let $tweet = createTweetElement(tweet);
            tweetContainer.prepend($tweet);
        }
    }

    function createTweetElement(tweet) {

        let {
            user,
            content,
            created_at
        } = tweet;
        let {
            name,
            avatars,
            handle
        } = user;
        let {
            text
        } = content;
        let src = avatars.regular;

        $tweet = $('<article>').addClass('tweet');
        $header = $('<header>');
        $img = $('<img>').addClass('avatar').attr('src', src);
        $h3 = $('<h3>').text(name);
        $h5 = $('<h5>').text(handle);
        $pExample = $('<p>').addClass('tweet-text').text(text);
        $footer = $('<footer>');
        $pDate = $('<p>').addClass('date').text(created_at);
        $div = $('<div>').addClass('icons');
        $iconFlag = $(`<i class='fa fa-flag'></i>`);
        $iconRetweet = $(`<i class='fa fa-retweet'></i>`);
        $iconHeart = $(`<i class='fa fa-heart'></i>`);

        $header.append($img);
        $header.append($h3);
        $header.append($h5);

        $footer.append($pDate);

        $div.append($iconFlag);
        $div.append($iconRetweet);
        $div.append($iconHeart);

        $footer.append($div);

        $tweet.append($header);
        $tweet.append($pExample);
        $tweet.append($footer);

        return $tweet;
    }


    var form = $('#create-new-tweet');
    form.on('submit', function(event) {

        event.preventDefault();

        var tweetLength = $('#tweet-area').val().length;

        if (tweetLength > 140) {
            $('#error').text("Tweet longer than 140 characters").slideDown();
            return;
        }

        if (!tweetLength) {
            $('#error').text("Please enter a tweet").slideDown();
            return;
        }



        console.log('Form submitted, performing ajax call...');
        var queryStr = $(this).serialize();

        $.ajax({
            url: '/tweets',
            method: 'POST',
            data: queryStr,
            success: function() {
                $('textarea').val("").focus();
                $('.counter').text("140");
                loadTweets();
            }
        })
    })

    function loadTweets() {

        $.ajax({
            url: '/tweets',
            method: 'GET',
            success: function(tweets) {
                renderTweets(tweets);
            }
        })
    }
});


