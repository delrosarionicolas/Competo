$(function() {
    $("section").each(function() {
        let title = $(this).find("h2").html();
        let = idSection = $(this).attr("id")
        $("#menu-main").append('<li class="nav-item">' +
        '<a class="nav-link" href="#' + idSeccion + '">' + title +'</a></li>');
    });

})