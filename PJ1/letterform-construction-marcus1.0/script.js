$( document ).ready(function() {
    $(document).mousemove(function(e){

        // update mouse x and y position
        let xPos = e.pageX;
        let yPos = e.pageY;
        var windowWidth = $(window).width();

        startValue = xPos-200;

        if(xPos > 200 && xPos < windowWidth - 200){
        $('.partSpeed2').css({
            'left' : 0.4 * startValue + 34,

        });

        $('.partSpeed3').css({
            'left' : 0.8 * startValue + 34,

        });

        $('.rootLetter').css({
            'width' : 80 + startValue ,
            'margin-right' : 40 + 0.1 * startValue,

        });
        }

    });
});