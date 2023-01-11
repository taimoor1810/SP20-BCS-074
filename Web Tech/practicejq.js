function addNew()
{
    var newVal = $(".input").val();
    if(!newVal)
    {
        $(".input").addClass("red");
        $(".input").animate({left:'10px'});
        $(".input").animate({right:'10px'});
        // alert("wrong");
    }
    else{
        $(".input").addClass("green");
        $(".input").animate({left:'10px'});
        $(".input").animate({right:'100px'});
        $(".ulist").append("<li>" + newVal + "</li>");
    }

}