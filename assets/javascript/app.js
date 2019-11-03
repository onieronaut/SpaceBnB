let planets = ["Dagobah", "Endor", "Felucia", "Geonosis", "Hoth", "Kashyyyk", "Tatooine", "Naboo", "Bespin", "YavinIV", "Coruscant", "Kamino"]

createPlanets()

function createPlanets () {
    for (let i = 0; i < planets.length; i++) {
        let planetColumn = $("<div>").html(`${planets[i]}<br>`)
                                .addClass("col-sm-4 text-center")
                                .append(
                                    $("<img>").attr("src", `assets/images/planets/${planets[i]}/planet.png`)
                                                .attr("height", "200px")
                                                .attr("width", "200px")
        )
        $(".planets").append(planetColumn)
    }
}

