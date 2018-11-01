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

        // lastTimeMouseMoved = new Date().getTime();
        //  var t=setTimeout(function(){
        //      var currentTime = new Date().getTime();
        //      if(currentTime - lastTimeMouseMoved > 1000){
        //        $(".stemL").removeClass(".motionBlur");
        //         //  $('.fall').remove();
        //      }
        //  },1000)
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
            'width' : 80 + 0.2 * startValue ,
            // 'box-shadow':-4 0 22 0 ,
            // 'margin-right' : 40 + 0.01 * startValue,

        });

        $('.rootLetterBig').css({
            'width' : 80 + 0.5 * startValue ,
            // 'box-shadow':-4 0 22 0 ,
            // 'margin-right' : 40 + 0.01 * startValue,

        });

        $('.rootLetterLast').css({
            'width' : 80 + 0.8 * startValue ,
            // 'box-shadow':-4 0 22 0 ,
            // 'margin-right' : 40 + 0.01 * startValue,

        });


        }

        if(xPos > 200 && xPos < 400){
        $('#hoverArea').css({
            'background-color' : '#230000',
        });

        $("body").get(0).style.setProperty("--color", "#ffcccc");


      }
        if(xPos > 400 && xPos < 600){
        $('#hoverArea').css({
            'background-color' : '#750000',
        });

        $("body").get(0).style.setProperty("--color", "#ffd8d8");
      }

        if(xPos > 600 && xPos < 800){
        $('#hoverArea').css({
            'background-color' : '#b70000',
        });

        $("body").get(0).style.setProperty("--color", "#ffe2e2");
      }

        if(xPos > 1000 && xPos < 1200){
        $('#hoverArea').css({
            'background-color' : '#e50000',
        });

        $("body").get(0).style.setProperty("--color", "#ffeded");
      }


        if(xPos > 1200){
        $('#hoverArea').css({
            'background-color' : '#ff2600',
        });

        $("body").get(0).style.setProperty("--color", "#fffcfc");
      }


    })
  });
