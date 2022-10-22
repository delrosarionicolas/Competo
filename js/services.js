fetch('http://localhost:3000/services.php')
    .then(response => response.json())
    .then(data => {
        servicesTable(data)
    });

function servicesTable(data) {
    let contentServices = "";
    data.map( item => {
        let row = "<tr>";
        row += "<td>" + item.Type + "</td>";
        row += "<td>" + item.Costs + "</td>";
        row += "<td>" + item.Lenght + "</td>";
        row += "<td>" + item.StartDate + "</td>";
        row += "<td>" + item.EndDate + "</td>";
        row += "<tr/>";
        contentServices += row
    });

    $("#tbody-services").html(contentServices)
}

