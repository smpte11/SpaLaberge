$(document).ready(function(){

    $('.img-responsive').click(function(){

        $("." + $(this).attr("class") + " + .content-window").animate({

            height: $("article").height() + "px"

        }, 2000, function(){

            this.show();

        });

    })

});