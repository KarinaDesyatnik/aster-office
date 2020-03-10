$(function(){

$('.btn__menu').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
})

$("#menu").on("click","a", function (event) {


        var id  = $(this).attr('href'),



        top = $(id).offset().top;




        $('body,html').animate({scrollTop: top}, 1500);

    });
});

