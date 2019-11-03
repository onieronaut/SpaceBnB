let planets = ["Dagobah", "Endor", "Felucia", "Geonosis", "Hoth", "Kashyyyk", "Tatooine", "Naboo", "Bespin", "YavinIV", "Coruscant", "Kamino"]

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
        let modalBody = $("<div>").addClass("modal-body")
                                .appendTo(modalContent)
        let modalFooter = $("<div>").addClass("modal-footer")
                                .html(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Select</button>`)
                                .appendTo(modalContent)
        $(".my-modals").append(modal)
    }
}







        