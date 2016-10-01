$(function () {

    var $attrHead = $('#attributes > dt > .attr');

    $attrHead.on('click', function () {
        $(this).parent().next().slideToggle(250);
    });

});