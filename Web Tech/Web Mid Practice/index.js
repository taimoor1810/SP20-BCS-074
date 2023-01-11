// console.log("hello world");

// $(".btn").on('click', function(){
//     $(".btn").slideDown();
// })
$(function has(){
    $('.slbtn').click(function(){
        console.log("you clicked on button");
        $('.slbtn').addClass("red");
        $('.dc2').addClass("green");
        $('.div1').animate({
            left:'100px',
            width: '200px',
            height: '30px',
        });
        $('.dc2').addClass("blue");
        $('.slbtn').animate({
            left:'100px',
            width: '200px',
            height: '30px',
        });
        $('.dc3').hide();

    })
})


$(slbtn).load(function() {
    $(".dc2 .ess").each(function() {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
          i.children(":first-child").clone().appendTo($(this));
        
        for (var n = 0; n < 4; n++)(i = i.next()).length ||
          (i = $(this).siblings(":first")),
          i.children(":first-child").clone().appendTo($(this))
    })
});
