$(function(){
    $("section").each(function(){
        let title = $(this).find("h2").html();
        let idsection = $(this).attr("id");
        $("#menu-main").append('<li class="nav-item">' + 
        ' <a class="nav-link" href="#'+ idsection +'">' + title +' </a>'+  ' </li>');
    })


    $("#menu-item-form").click(function(){
        fetch("fetch/form.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
        });   

    })

    $("#menu-item-partners").click(function(){
        fetch("fetch/partners.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
        });   

    })

    //ASI INTENTAMOS HACER EL HIDE:(

    // $(".title").click(function() {
    //     if ($("#channel").show == true) {
    //         $("#channel").hide
    //     } else {
    //         $("#channel").show
    //     }
    // })

})

