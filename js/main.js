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
    $("#our-sponsors-title").click(function() {
        $("#our-sponsors").toggle();
        })
    $("#app-benefits-title").click(function() {
        $("#app-benefits").toggle();
        })
    $("#our-tools-title").click(function() {
        $("#our-tools").toggle();
        })
    $("#our-channel-title").click(function() {
        $("#our-channel").toggle();
        })

        
    $("#menu-item-services").click(function(){
        fetch("fetch/services.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
        });   
    }) 
})

