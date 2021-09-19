$(document).ready(function(){
    $(window).scroll(function(){
        // scroll navbar on scroll script
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // active link in the navigation bar

        // problem: the color doesn't change when scrolling
        if (this.scrollY > 750 && this.scrollY < 1250){
            $('.navbar.sticky .menu li:first-child').addClass("active");
        }else{
            $(".navbar.sticky .menu li:first-child").removeClass("active");
        }
    });




});