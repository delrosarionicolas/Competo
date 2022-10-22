$(function () {
    $("section").each(function () {
        let title = $(this).find("h2").html();
        let idsection = $(this).attr("id");
        $("#menu-main").append('<li class="nav-item">' +
            ' <a class="nav-link" href="#' + idsection + '">' + title + ' </a>' + ' </li>');
    })
    $("#menu-item-form").click(function () {
        fetch("fetch/form.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
            });

    })
    $("#menu-item-partners").click(function () {
        fetch("fetch/partners.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
            });
    })
    $("#our-sponsors-title").click(function () {
        $("#our-sponsors").toggle();
    })
    $("#app-benefits-title").click(function () {
        $("#app-benefits").toggle();
    })
    $("#our-tools-title").click(function () {
        $("#our-tools").toggle();
    })
    $("#our-channel-title").click(function () {
        $("#our-channel").toggle();
    })


    $("#menu-item-services").click(function () {
        fetch("fetch/services.html")
            .then(response => response.text())
            .then(data => {
                console.log(data)
                $("#main-content").html(data);
            });
    })


    fetch('http://localhost:3000/clients.php')
        .then(response => response.json())
        .then(data => {
            clientsTable(data)
        });

    function clientsTable(data) {
        let contentClients = "";
        data.map(item => {
            let row = "<tr>";
            row += "<td>" + item.Name + "</td>";
            row += "<td>" + item.LastName + "</td>";
            row += "<td>" + item.Email + "</td>";
            row += "<td>" + item.PhoneNumber + "</td>";
            row += "<td>" + item.Addres + "</td>";
            row += "<tr/>";
            contentClients += row
        });

        $("#tbody-clients").html(contentClients)
    }

})

