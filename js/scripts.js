$(function(){

    $("a[id*=plus]").on('click', function () {
        var nomer = $(this).attr("id");
        var id= nomer.slice(5);
        var minus="#minus-"+id;
        var bool=$(this).addClass('hidden') ;
        $(minus).removeClass('hidden') ;

    });
    $("a[id*=minus]").on('click', function () {

        var nomer = $(this).attr("id");
        var id= nomer.slice(6);
        var plus="#plus-"+id;
        var bool=$(this).addClass('hidden') ;
        $(plus).removeClass('hidden') ;

        });
    new WOW().init();
});

