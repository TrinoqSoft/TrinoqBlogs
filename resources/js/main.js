
/*======================================================*/
 /***  MAIN JS FILE    ***/
 /***  TRINOQ BLOGS    ***/
/*======================================================*/

$(document).ready(function(){

    // STICKY MENU
    $(".js--sticky-header").waypoint(function(direction){
        if(direction == 'down'){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });

    // MIXITUP (PORTFOLIO)
    // var mixer = mixitup('#portfolio-filter-items');
});

/*======== MOBILE MENU ============================*/
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}
