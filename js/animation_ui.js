$(document).ready(function(){

    //open animation *draft*

    $(".img-responsive").click(function(){

        $(this).next(".content-window").show().animate({

            "height": $("article").height() + "px"

        }, 500, "linear");

    });


    //closing animation *draft*

    $("span").click(function(){

        var parent = $(this).parent('.content-window');

        parent.animate({

            "height": 0

        }, 500, "linear", function(){

            parent.hide();

        });

    });

});