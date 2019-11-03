let planets = ["Dagobah", "Endor", "Felucia", "Geonosis", "Hoth", "Kashyyyk", "Tatooine", "Naboo", "Bespin", "Mustafar", "Coruscant", "Kamino"]

createPlanets()
createModal ()

function createPlanets () {
    for (let i = 0; i < planets.length; i++) {
        let planetColumn = $("<div>").html(`${planets[i]}<br>`)
                                .addClass("col-sm-4 text-center")
                                .attr("data-toggle", "modal")
                                .attr("data-target", `#${planets[i].toLowerCase()}`)
                                .append(
                                    $("<img>").attr("src", `assets/images/planets/${planets[i].toLowerCase()}/planet.png`)
                                                .attr("height", "200px")
                                                .attr("width", "200px")
        )
        $(".planets").append(planetColumn)
    }
}

function createModal () {
    for (let i = 0; i < planets.length; i++) {
        let modal = $("<div>").addClass("modal fade")
                            .attr("id", `${planets[i].toLowerCase()}`)
                            .attr("tabindex", "-1")
                            .attr("role", "dialog")
                            .attr("aria-labelledby", "exampleModalCenterTitle")
                            .attr("aria-hidden", "true")
        let modalDialog = $("<div>").addClass("modal-dialog modal-dialog-centered")
                                .attr("role", "document")
                                .appendTo(modal)
        let modalContent = $("<div>").addClass("modal-content")
                                    .appendTo(modalDialog)
        let modalHeader = $("<div>").addClass("modal-header")
                                    .html(`<h5 class="modal-title" id="exampleModalLongTitle">${planets[i]}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>`)
                                    .appendTo(modalContent)
        let modalBody = $("<div>").addClass("modal-body planet-info")
                                .appendTo(modalContent)
                                .attr("id", `planet-info-${planets[i].toLowerCase()}`)
        let modalFooter = $("<div>").addClass("modal-footer")
                                .html(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Select</button>`)
                                .appendTo(modalContent)
        $(".my-modals").append(modal)
    }
}

// Initializes SWAPI-Wrapper - Do Not Change!
document.addEventListener("DOMContentLoaded", init, false);
function init() {
    var con = document.querySelector("#console");
    function log() {
        console.log(...arguments);
        var pre = document.createElement("pre");
        for (var arg of arguments) {
            switch (typeof arg) {
                case "string":
                    pre.append(arg);
                    break;
                default:
                    pre.append(JSON.stringify(arg, null, 2));
            }
            pre.append(" ");
        }
        con.append(pre);
    }

    // swapiModule.getPlanets({ page: 2 }).then(function (data) {
    //     console.log("Result of getPlanets", data);
    // }); 

    for (let i = 0; i < planets.length; i++) {
        swapiModule.getPlanets({ search: planets[i] }).then(function (data) {
            let planetInfo = $("<div>").html(`Climate: ${data.results[0].climate}<br>
                                                Gravity: ${data.results[0].gravity}<br>
                                                Population: ${data.results[0].population}<br>
                                                Terrain: ${data.results[0].terrain}`)
            $(`#planet-info-${planets[i].toLowerCase()}`).append(planetInfo)
            
            console.log(`This is planet: ${planets[i]}`);
            console.log(`climate: ${data.results[0].climate}`);
            console.log(`gravity: ${data.results[0].gravity}`);
            console.log(`population: ${data.results[0].population}`);
            console.log(`terrain: ${data.results[0].terrain}`);
            console.log(`---------------------------`)
        });
    }

}









        