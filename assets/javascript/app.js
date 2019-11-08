// Planet array
let planets = [

    {
        name: "Dagobah",
        lodgingOne: "Immerse yourself in the dense and swampy forest and stay in the old Yoda's hut",
        lodgingTwo: "Enjoy the mist in the forest from a confortable private home",
        lodgingThree: "Stay dry in this luxurious private home while enjoying the perfect view of the bayous",
        link: "https://starwars.fandom.com/wiki/Dagobah",
        wikiNum: 452956
    },

    {
        name: "Endor",
        lodgingOne: "Experience the endless forest while being safe in this fortress",
        lodgingTwo: "This village is a perfect place to relax after an adventurous day",
        lodgingThree: "Go for the full experience and live with the Ewoks in their arboreal huts",
        link: "https://starwars.fandom.com/wiki/Endor",
        wikiNum: 456136
    },

    {
        name: "Felucia",
        lodgingOne: "Get a room in this shared community walking distance to the humid forest",
        lodgingTwo: "Stay in the heart of the jungle surrounded by humid landscape overgrown by forests of bizarre wilderness",
        lodgingThree: "Stay in this private home and enjoy the immense primitive plants and other life-forms",
        link: "https://starwars.fandom.com/wiki/Felucia",
        wikiNum: 465003
    },

    {
        name: "Geonosis",
        lodgingOne: "This old hotel is perfect for those who want to explore the harsh desert",
        lodgingTwo: "This beautiful castle is minutes away from the Geonosians maintain large factories of droids and weapons",
        lodgingThree: "Stay in the historical district where 'The Battle of Geonosis' took place",
        link: "https://starwars.fandom.com/wiki/Geonosis",
        wikiNum: 457990
    },

    {
        name: "Hoth",
        lodgingOne: "Experience this world of ice and snow from this old observatory",
        lodgingTwo: "Stay in this cozy room and enjoy the natural caves formed by giant ice bubbles",
        lodgingThree: "Enjoy this beautiful private home located up in the mountains",
        link: "https://starwars.fandom.com/wiki/Hoth",
        wikiNum: 451989
    },

    {
        name: "Kashyyyk",
        lodgingOne: "Stay with a Wookie Host Family!",
        lodgingTwo: "Relax in this Private Home in the City of Rwookrrorro, the Birthplace of Chewbacca!",
        lodgingThree: "Enjoy the Pent House Suite Overlooking the Beautiful Wroshyr Trees!",
        link: "https://starwars.fandom.com/wiki/Kashyyyk",
        wikiNum: 455688
    },

    {
        name: "Tatooine",
        lodgingOne: "Stay in the same house Luke Skywalker lived in his childhood",
        lodgingTwo: "This dwelling is a perfect place to learn how the moisture farms work",
        lodgingThree: "Enjoy this private room in this underground community",
        link: "https://starwars.fandom.com/wiki/Tatooine",
        wikiNum: 452688
    },

    {
        name: "Naboo",
        lodgingOne: "Private home in this peaceful city thriving in art, environmental protection and scientific achievements.",
        lodgingTwo: "Stay in this historic hotel located in the main capital of Naboo 'Theed'",
        lodgingThree: "Enjoy the tranquility in this luxurious home and explore the underwater city of Gungans",
        link: "https://starwars.fandom.com/wiki/Naboo",
        wikiNum: 451978
    },

    {
        name: "Bespin",
        lodgingOne: "Stay in this private room located in the heart of Cloud city",
        lodgingTwo: "Enjoy the view of the Metropolis from this spacious room",
        lodgingThree: "stay in this luxurious room and enjoy the view of Cloud city",
        link: "https://starwars.fandom.com/wiki/Bespin",
        wikiNum: 453786
    },

    {
        name: "Mustafar",
        lodgingOne: "Stay in this simple dwelling and enjoy the rivers of lava in the surroundings",
        lodgingTwo: "Enjoy your stay in this nice area where temperture is low due to the unusual mineral allotropes",
        lodgingThree: "Stay in the fortress Vader and feel the energy from the dark side",
        link: "https://starwars.fandom.com/wiki/Mustafar",
        wikiNum: 453226
    },

    {
        name: "Coruscant",
        lodgingOne: "Private room with a view to the local city",
        lodgingTwo: "Enjoy this suite in one of the tallest skyscrapers in the capital of the galaxy",
        lodgingThree: "Stay in this luxurious suite noted for its cosmopolitan culture and towering skyscrapers",
        link: "https://starwars.fandom.com/wiki/Coruscant",
        wikiNum: 452675
    },

    {
        name: "Kamino",
        lodgingOne: "Immerse yourself in this aquatic world and enjoy the spacious modern hotel with confortable capsule beds",
        lodgingTwo: "Enjoy this underwater hotel",
        lodgingThree: "Luxurious hotel with a view to the ocean world",
        link: "https://starwars.fandom.com/wiki/Kamino",
        wikiNum: 453917
    }
];

// Displays planets on splash page with modal functionality
createPlanets()
createModal()

function createPlanets() {
    for (let i = 0; i < planets.length; i++) {
        let planetColumn = $("<div>").html(`<br>${planets[i].name}<br>`)
            .addClass("col-sm-4 text-center")
            .attr("data-toggle", "modal")
            .attr("data-target", `#${planets[i].name.toLowerCase()}`)
            .append(
                $("<img>").attr("src", `assets/images/planets/${planets[i].name.toLowerCase()}/planet.png`)
                    .attr("height", "150px")
                    .attr("width", "150px")
            )
        $(".planets").append(planetColumn)
    }
}

function createModal() {
    for (let i = 0; i < planets.length; i++) {
        let modal = $("<div>").addClass("modal fade")
            .attr("id", `${planets[i].name.toLowerCase()}`)
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
            .html(`<h5 class="modal-title" id="exampleModalLongTitle">${planets[i].name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>`)
        let modalBody = $("<div>").addClass("modal-body planet-info")
            .attr("id", `planet-info-${planets[i].name.toLowerCase()}`)
        let modalFooter = $("<div>").addClass("modal-footer")
            .html(`<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary user-select" data-dismiss="modal" value='${planets[i].name}'>Select</button>`)
        $(".my-modals").append(modal)
        modalContent.append(modalHeader)
        modalContent.append(modalBody)
        modalContent.append(modalFooter)
        // modalBody.append(linkText);
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

    // Recieves SWAPI information by planet name and appends it to id planet-info-planetname found in modalBody
    for (let i = 0; i < planets.length; i++) {
        swapiModule.getPlanets({ search: planets[i].name }).then(function (data) {
            function addComma(num) {
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
            }
            function capitalize_Words(str) {
                return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            }

            let dataResults = data.results[0]
            let planetInfo = $("<div>").html(`Climate: ${capitalize_Words(dataResults.climate)}<br>
                                                Gravity: ${capitalize_Words(dataResults.gravity)}<br>
                                                Population: ${addComma(dataResults.population)}<br>
                                                Terrain: ${capitalize_Words(dataResults.terrain)}`)
            $(`#planet-info-${planets[i].name.toLowerCase()}`)
                .append(planetInfo)
                .append("<hr>")

            // Wookiepedia API    
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = `https://starwars.fandom.com/api/v1/Articles/AsSimpleJson?id=${planets[i].wikiNum}`;
            fetch(proxyurl + url)
                .then(response => response.text())
                .then(contents => {
                    let data = JSON.parse(contents);
                    // Append description to modal
                    let snippet = data.sections[0].content[0].text.replace(/was/g, "is").replace(/had/g, "has");
                    $(`#planet-info-${planets[i].name.toLowerCase()}`)
                        .append(snippet)
                        .append("<hr>")
                    // Append link to modal
                    let linkHere = $("<a>").attr("href", planets[i].link).text("Read more about " + planets[i].name + " here").addClass("wookiaLink")
                    linkHere.on("click", function () {
                        event.preventDefault();
                        event.stopPropagation();
                        window.open(this.href, '_blank')
                    })
                    $(`#planet-info-${planets[i].name.toLowerCase()}`).append(linkHere);

                })
                .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

            // console.log(`This is planet: ${planets[i].name}`);
            // console.log(`climate: ${data.results[0].climate}`);
            // console.log(`gravity: ${data.results[0].gravity}`);
            // console.log(`population: ${data.results[0].population}`);
            // console.log(`terrain: ${data.results[0].terrain}`);
            // console.log(`---------------------------`)
        });
    }

}

// On clicks for SpaceBnB logo and Home on Navbar
$(".splash-page").on("click", function () {
    $("#page3").hide()
    $("#page2").hide()
    $(".user-spaceship").hide();
    $("#page1").show()
});

// On click for planet divs to take user to lodging options
$(document).on("click", ".user-select", function () {
    $("#page1").hide()
    $("#page3").hide()
    $("#page2").show()
    $(".user-spaceship").hide();
    let planetSelection = $(this).attr("value");
    console.log(planetSelection);

    findWithAttr(planets, "name", planetSelection)

    createPlanetLodging()
});

// Returns the index of planetSelection in planets array to use that index for retrieving the lodging titles
let thePlanetIndex;

function findWithAttr(array, attr, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][attr] === value) {
            thePlanetIndex = i;
            return i;
        }
    }
    return -1;
}

// Dynamically creates lodging options with images
function createPlanetLodging() {
    $(".user-lodging").html("");

    let planetLodgingTitle = $("<div>").addClass("col-sm-12 text-center")
        .html("<br><br><br><h3>Choose where you would like to stay</h3>")
    $(".user-lodging").append(planetLodgingTitle)

    let planetLodgingColumnOne = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].name}`)
        .attr("amount", "99")
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-one.jpg`)
                .attr("height", "280px")
                .attr("width", "280px")
        )
        .append(
            $("<h4>").html(`${planets[thePlanetIndex].lodgingOne}<br>$99`)
        )
    $(".user-lodging").append(planetLodgingColumnOne)

    let planetLodgingColumnTwo = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].name}`)
        .attr("amount", "199")
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-two.jpg`)
                .attr("height", "280px")
                .attr("width", "280px")
        )
        .append(
            $("<h4>").html(`${planets[thePlanetIndex].lodgingTwo}<br>$199`)
        )
    $(".user-lodging").append(planetLodgingColumnTwo)

    let planetLodgingColumnThree = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].name}`)
        .attr("amount", "299")
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-three.jpg`)
                .attr("height", "280px")
                .attr("width", "280px")
        )
        .append(
            $("<h4>").html(`${planets[thePlanetIndex].lodgingThree}<br>$299`)
        )
    $(".user-lodging").append(planetLodgingColumnThree)
}

// Spaceship array
let spaceships = [
    {
        name: "B Wing",
        image: "assets/images/spaceships/b-wing.png",
        amount: 99
    },

    {
        name: "Interdictor Star Destroyer",
        image: "assets/images/spaceships/interdictor-star-destroyer.png",
        amount: 199
    },

    {
        name: "Millennium Falcon",
        image: "assets/images/spaceships/millennium-falcon.jpg",
        amount: 299
    },

    {
        name: "Naboo Starfighter",
        image: "assets/images/spaceships/naboo-starfighter.png",
        amount: 99
    },

    {
        name: "Outrider",
        image: "assets/images/spaceships/outrider.png",
        amount: 199
    },

    {
        name: "Star Wars Ravager",
        image: "assets/images/spaceships/star-wars-ravager.png",
        amount: 299
    },

    {
        name: "Super Star Destroyer",
        image: "assets/images/spaceships/super-star-destroyer.png",
        amount: 99
    },

    {
        name: "X Wing",
        image: "assets/images/spaceships/xwing.png",
        amount: 199
    },

    {
        name: "Y Wing",
        image: "assets/images/spaceships/y-wing.png",
        amount: 299
    },
];

// On click for lodging anchors to take user to spaceship options
$(document).on("click", ".user-select-lodging", function () {
    let userDestination = $(this).attr("value");
    console.log(userDestination);

    createSpaceships()

    // Display end page and checkout
    $(document).on("click", ".user-spaceship", function () {
        $("#page1").hide()
        $("#page2").hide()
        $("#page3").show()
        // let userSpaceship = $(this).attr("value");
        // console.log(userSpaceship);

        $("#user-select-title").html(`<br><br><h1>Pack your bags, you're traveling to ${userDestination.toUpperCase()}!</h1>`)
        $("#end-image").html("")
            .append(
                $("<img>").attr("src", "assets/images/happy-yoda.gif")
            )
    });
});

// Dynamically creates spaceship options with images
function createSpaceships() {
    $(".user-spaceship").html("");
    $(".user-spaceship").show();

    let spaceshipTitle = $("<div>").addClass("col-sm-12 text-center")
        .attr("id", "anchor-here")
        .html("<br><br><br><h3>Looking for flight options?</h3>")
    $(".user-spaceship").append(spaceshipTitle)

    for (let i = 0; i < spaceships.length; i++) {
        let spaceshipColumn = $("<div>").addClass("col-sm-4 text-center")
            .attr("value", spaceships[i].name)
            .attr("amount", spaceships[i].amount)
            .append(
                $("<img>").attr("src", spaceships[i].image)
                    .attr("height", "70%")
                    .attr("width", "70%")
            )
            .append(
                $("<h4>").html(`${spaceships[i].name}<br>$${spaceships[i].amount}<br><br><br>`)
            )
        $(".user-spaceship").append(spaceshipColumn)
    }

    
}











