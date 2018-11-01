$( document ).ready(function() {
    $('#hoverArea').mousemove(function(e){

        // adding code to get moust position inside of div, not the window / page
        // get hoverArea's offset from the top left as you scroll
        var parentOffset = $(this).offset();

        // recalculate x and y mouse position
        var xPos = e.pageX - parentOffset.left;
        var yPos = e.pageY - parentOffset.top;

        // var hoverArea = document.getElementById('hoverArea');
        // hoverArea.style.background = 'hsl(2, 80%, dw)';


        // update mouse x and y position
        // let xPos = e.pageX;
        // let yPos = e.pageY;
        var windowWidth = $(window).width();

        startValue = xPos-200;

        if(xPos > 200 && xPos < windowWidth - 200){
        $('.partSpeed2').css({
            'left' : 0.1 * startValue + 34,
        });

        $('.partSpeed3').css({
            'left' : 0.3 * startValue + 34,

        });

        $('.rootLetter').css({
            'width' : 80 + 0.5 * startValue ,
            // 'box-shadow':-4 0 22 0 ,
            // 'margin-right' : 40 + 0.01 * startValue,

        });


        }

        if(xPos > 200 && xPos < 400){
        $('#hoverArea').css({
            'background-color' : '#230000',
        });
      }
        if(xPos > 400 && xPos < 600){
        $('#hoverArea').css({
            'background-color' : '#750000',
        });
      }

        if(xPos > 600 && xPos < 800){
        $('#hoverArea').css({
            'background-color' : '#b70000',
        });
      }

        if(xPos > 1000){
        $('#hoverArea').css({
            'background-color' : '#e50000',
        });
      }


    });

});
