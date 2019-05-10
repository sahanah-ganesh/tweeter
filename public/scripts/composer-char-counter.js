$(document).ready(function() {

    $("textarea").on("keyup", function(event) {

        let inputLength = $(this).val().length;

        let maximum = 140;

        let count = maximum - inputLength;

        //console.log event here

        if (inputLength >= maximum) {

            $(".counter", this.parentElement).text(count).addClass("setRed");

        } else {

            $(".counter", this.parentElement).text(count).removeClass("setRed");
        }
    })
});



