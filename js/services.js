fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-63d0eec1-53fa-417b-8052-e630ca4a896b/default/Services')
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

