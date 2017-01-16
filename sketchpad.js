$(document).ready(function(){
     gridMake();
     pen();
     penChange();
     erase();
});
	
var row = 16;
var column = 16;
var penColor = "black";

function gridMake() {
	
	for (var i = 0; i < row * column; i++) {
          $('#sketchpad').append('<div class="box"></div>');
    }

    $('.box').css({
		'height' : $('#sketchpad').height() / row,
		'width' : $('sketchpad').width() / column,
	});
	
}

function pen(){
        $('.box').hover(function(){
        $(this).css('background-color', penColor);
         });
}
function penChange () {
       $('#whiteP').click(function(){
          $('.box').hover(function(){
          	$(this).css('background-color','white');
             });
        });

       $('#blackP').click(function(){
          $('.box').hover(function(){
          	$(this).css('background-color','black');
             });
        });

       $('#redP').click(function(){
          $('.box').hover(function(){
          	$(this).css('background-color','red');
             });
        });

       $('#greenP').click(function(){
          $('.box').hover(function(){
          	$(this).css('background-color','green');
             });
        });
 }

 function erase (){
        $('#reset').click(function(){
          	$('.box').css('background-color','pink');
             });
 }