$(document).ready(function(){

    $(".img-responsive").click(function(){

        $(this).next(".content-window").show().animate({

            "height": $("article").height() + "px"

        }, 500, "linear");

    });

    $("span").click(function(){

        var parent = $(this).parent('.content-window');

        parent.animate({

            "height": 0

        }, 500, "linear", function(){

            parent.hide();

        });

    });

});