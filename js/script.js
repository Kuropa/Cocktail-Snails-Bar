$(document).ready(function() {
    //Инициализация основных эффектов
    AOS.init();
    //Печатающаяся строка
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 80,
        loop: true
    });
    //Настройка сдвигов молекулы
    var movementStrength = 5;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(window).mousemove(function(e){
        if ($(window).width() >= 1190) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.roadmap-img').css("background-position", newvalueX + "px     " + newvalueY + "px");
        }
    });
    // Год в футере
    $(".year").html(new Date().getFullYear())
});