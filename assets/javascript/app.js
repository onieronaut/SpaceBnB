// Animate on Scroll Library initialization
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
// Planet array
let planets = [

    {
        name: "Dagobah",
        lodgingOne: "Yoda's hut",
        lodgingTwo: "Forest hut in the mist",
        lodgingThree: "Luxurious private home in the swamp",
        link: "https://starwars.fandom.com/wiki/Dagobah",
        wikiNum: 452956
    },
    {
        name: "Endor",
        lodgingOne: "Fortress in the Endless Forest",
        lodgingTwo: "The Village",
        lodgingThree: "The Ewoks' arboreal huts",
        link: "https://starwars.fandom.com/wiki/Endor",
        wikiNum: 456136
    },
    {
        name: "Felucia",
        lodgingOne: "Shared community in the forest",
        lodgingTwo: "Shared community in the heart of the jungle",
        lodgingThree: "The home of primitive plants",
        link: "https://starwars.fandom.com/wiki/Felucia",
        wikiNum: 465003
    },
    {
        name: "Geonosis",
        lodgingOne: "Geonosian hotel",
        lodgingTwo: "The Geonosian castle",
        lodgingThree: "The Battle of Geonosis District Hotel",
        link: "https://starwars.fandom.com/wiki/Geonosis",
        wikiNum: 457990
    },
    {
        name: "Hoth",
        lodgingOne: "The Hoth Observatory",
        lodgingTwo: "The Giant Ice Hotel",
        lodgingThree: "Wampa Hotel",
        link: "https://starwars.fandom.com/wiki/Hoth",
        wikiNum: 451989
    },
    {
        name: "Kashyyyk",
        lodgingOne: "Private home with Wookie Host Family",
        lodgingTwo: "Private Home in the City of Rwookrrorro",
        lodgingThree: "Pent House Suite Overlooking the Wroshyr Trees",
        link: "https://starwars.fandom.com/wiki/Kashyyyk",
        wikiNum: 455688
    },
    {
        name: "Tatooine",
        lodgingOne: "Moisture Farm private room",
        lodgingTwo: "Hotel room with central access to the city and cantina",
        lodgingThree: "Luke Skywalker's childhood home",
        link: "https://starwars.fandom.com/wiki/Tatooine",
        wikiNum: 452688
    },
    {
        name: "Naboo",
        lodgingOne: "Private home with access to the city.",
        lodgingTwo: "Historic hotel room in the main city",
        lodgingThree: "Private suite in the underwater city of the Gungans",
        link: "https://starwars.fandom.com/wiki/Naboo",
        wikiNum: 451978
    },
    {
        name: "Bespin",
        lodgingOne: "Standard Cloud City room",
        lodgingTwo: "Upgraded room with view of the metropolis",
        lodgingThree: "Private suite with full view of the Cloud City",
        link: "https://starwars.fandom.com/wiki/Bespin",
        wikiNum: 453786
    },
    {
        name: "Mustafar",
        lodgingOne: "Standard room with view of lava rivers",
        lodgingTwo: "Low temperature private rooms",
        lodgingThree: "Fortress Vader",
        link: "https://starwars.fandom.com/wiki/Mustafar",
        wikiNum: 453226
    },
    {
        name: "Coruscant",
        lodgingOne: "Standard room with city view",
        lodgingTwo: "Upgraded skyscraper room",
        lodgingThree: "Skyscraper suite with city view",
        link: "https://starwars.fandom.com/wiki/Coruscant",
        wikiNum: 452675
    },
    {
        name: "Kamino",
        lodgingOne: "Crew Quarters",
        lodgingTwo: "Clone Pod Room",
        lodgingThree: "Suite with ocean view",
        link: "https://starwars.fandom.com/wiki/Kamino",
        wikiNum: 453917
    }
];

// Displays planets on splash page with modal functionality
createPlanets()
createModal()

function createPlanets() {
    for (let i = 0; i < planets.length; i++) {
        if (i % 3 === 0) {
            let planetColumn = $("<div>").html(`<br>${planets[i].name}<br>`)
                .addClass("col-sm-4 text-center")
                .attr("data-toggle", "modal")
                .attr("data-aos", "fade-right")
                .attr("data-target", `#${planets[i].name.toLowerCase()}`)
                .append(
                    $("<img>").attr("src", `assets/images/planets/${planets[i].name.toLowerCase()}/planet.png`)
                        .attr("height", "150px")
                        .attr("width", "150px")
                )
            $(".planets").append(planetColumn)

        } else if (i % 3 === 1) {
            let planetColumn = $("<div>").html(`<br>${planets[i].name}<br>`)
                .addClass("col-sm-4 text-center")
                .attr("data-toggle", "modal")
                .attr("data-aos", "fade-up")
                .attr("data-target", `#${planets[i].name.toLowerCase()}`)
                .append(
                    $("<img>").attr("src", `assets/images/planets/${planets[i].name.toLowerCase()}/planet.png`)
                        .attr("height", "150px")
                        .attr("width", "150px")
                )
            $(".planets").append(planetColumn)
        } else {
            let planetColumn = $("<div>").html(`<br>${planets[i].name}<br>`)
                .addClass("col-sm-4 text-center")
                .attr("data-toggle", "modal")
                .attr("data-aos", "fade-left")
                .attr("data-target", `#${planets[i].name.toLowerCase()}`)
                .append(
                    $("<img>").attr("src", `assets/images/planets/${planets[i].name.toLowerCase()}/planet.png`)
                        .attr("height", "150px")
                        .attr("width", "150px")
                )
            $(".planets").append(planetColumn)
        }
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

    function addComma(num) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    function capitalize_Words(str) {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    // Recieves SWAPI information by planet name and appends it to id planet-info-planetname found in modalBody
    for (let i = 0; i < planets.length; i++) {
        swapiModule.getPlanets({ search: planets[i].name }).then(function (data) {
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
    localStorage.setItem("user-planet", JSON.stringify(planetSelection));

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

    let userPlanetChoice = JSON.parse(localStorage.getItem("user-planet"));

    let planetLodgingTitle = $("<div>").addClass("col-sm-12 text-center")
        .html(`<br><br><br><h3>Choose where you would like to stay on ${userPlanetChoice} ?</h3>`).addClass("choiceTxt")
    $(".user-lodging").append(planetLodgingTitle)

    let planetLodgingColumnOne = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].lodgingOne}`)
        .attr("amount", "99")
        .attr("data-aos", "fade-left")
        .attr("link", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-one.jpg`)
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-one.jpg`)
                .attr("height", "240px")
                .attr("width", "300px")
        )
        .append(
            $("<h4>").html(`${planets[thePlanetIndex].lodgingOne}<br>$99`)
        )
    $(".user-lodging").append(planetLodgingColumnOne)

    let planetLodgingColumnTwo = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].lodgingTwo}`)
        .attr("amount", "199")
        .attr("data-aos", "fade-up")
        .attr("link", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-two.jpg`)
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-two.jpg`)
                .attr("height", "240px")
                .attr("width", "300px")
        )
        .append(
            $("<h4>").html(`${planets[thePlanetIndex].lodgingTwo}<br>$199`)
        )
    $(".user-lodging").append(planetLodgingColumnTwo)

    let planetLodgingColumnThree = $("<a>").addClass("col-sm-4 text-center user-select-lodging")
        .attr("href", "#anchor-here")
        .attr("value", `${planets[thePlanetIndex].lodgingThree}`)
        .attr("amount", "299")
        .attr("data-aos", "fade-right")
        .attr("link", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-three.jpg`)
        .append(
            $("<img>").attr("src", `assets/images/planets/${planets[thePlanetIndex].name.toLowerCase()}/lodging-three.jpg`)
                .attr("height", "240px")
                .attr("width", "300px")
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
        amount: 999
    },

    {
        name: "Interdictor Star Destroyer",
        image: "assets/images/spaceships/interdictor-star-destroyer.png",
        amount: 1199
    },

    {
        name: "Millennium Falcon",
        image: "assets/images/spaceships/millennium-falcon.jpg",
        amount: 1999
    },

    {
        name: "Naboo Starfighter",
        image: "assets/images/spaceships/naboo-starfighter.png",
        amount: 999
    },

    {
        name: "Outrider",
        image: "assets/images/spaceships/outrider.png",
        amount: 1199
    },

    {
        name: "Star Wars Ravager",
        image: "assets/images/spaceships/star-wars-ravager.png",
        amount: 1999
    },

    {
        name: "Super Star Destroyer",
        image: "assets/images/spaceships/super-star-destroyer.png",
        amount: 999
    },

    {
        name: "X Wing",
        image: "assets/images/spaceships/xwing.png",
        amount: 1199
    },

    {
        name: "Y Wing",
        image: "assets/images/spaceships/y-wing.png",
        amount: 1999
    },
];

// On click for lodging anchors to take user to spaceship options
$(document).on("click", ".user-select-lodging", function () {
    let userLodgingDescription = $(this).attr("value");
    let userLodgingCost = $(this).attr("amount");
    let userLodgingImage = $(this).attr("link");
    localStorage.setItem("user-lodging", JSON.stringify(userLodgingDescription));
    localStorage.setItem("user-lodging-cost", JSON.stringify(userLodgingCost));
    localStorage.setItem("user-lodging-image", JSON.stringify(userLodgingImage));

    createSpaceships()
});


$(document).on("click", ".user-spaceship-selection", function () {
    $("#page1").hide()
    $("#page2").hide()
    $("#page3").show()
    let userSpaceshipName = $(this).attr("value");
    let userSpaceshipCost = $(this).attr("amount");
    let userSpaceshipImage = $(this).attr("link");
    localStorage.setItem("user-spaceship", JSON.stringify(userSpaceshipName));
    localStorage.setItem("user-spaceship-cost", JSON.stringify(userSpaceshipCost));
    localStorage.setItem("user-spaceship-image", JSON.stringify(userSpaceshipImage));

    let userDestinationPlanet = JSON.parse(localStorage.getItem("user-planet"));

    $("#user-select-title").html(`<br><br><h1>Pack your bags, you're traveling to ${userDestinationPlanet}!</h1>`).addClass("choiceTxt")
    $("#end-image").html("")
        .append(
            $("<img>").attr("src", "assets/images/happy-yoda.gif")
        )

    $(".checkout-head").html("");
    $(".checkout-body").html("");
    createCheckout()
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
        if (i % 3 === 0) {
            let spaceshipColumn = $("<div>").addClass("col-sm-4 text-center user-spaceship-selection")
                .attr("value", spaceships[i].name)
                .attr("amount", spaceships[i].amount)
                .attr("link", spaceships[i].image)
                .attr("data-aos", "fade-left")
                .append(
                    $("<img>").attr("src", spaceships[i].image)
                        .attr("height", "70%")
                        .attr("width", "70%")
                )
                .append(
                    $("<h4>").html(`${spaceships[i].name}<br>$${spaceships[i].amount}<br><br><br>`)
                )
            $(".user-spaceship").append(spaceshipColumn)
        } else if (i % 3 === 1) {
            let spaceshipColumn = $("<div>").addClass("col-sm-4 text-center user-spaceship-selection")
                .attr("value", spaceships[i].name)
                .attr("amount", spaceships[i].amount)
                .attr("link", spaceships[i].image)
                .attr("data-aos", "fade-up")
                .append(
                    $("<img>").attr("src", spaceships[i].image)
                        .attr("height", "70%")
                        .attr("width", "70%")
                )
                .append(
                    $("<h4>").html(`${spaceships[i].name}<br>$${spaceships[i].amount}<br><br><br>`)
                )
            $(".user-spaceship").append(spaceshipColumn)
        } else {
            let spaceshipColumn = $("<div>").addClass("col-sm-4 text-center user-spaceship-selection")
                .attr("value", spaceships[i].name)
                .attr("amount", spaceships[i].amount)
                .attr("link", spaceships[i].image)
                .attr("data-aos", "fade-right")
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
}
function createTableHeader() {
    return $("<tr>").append(
        $("<th>").addClass("border-0 bg-light")
            .append(
                $("<div>").addClass("p-2 px-3 text-uppercase")
                    .html("Items")
            ),
        $("<th>").addClass("border-0 bg-light")
            .append(
                $("<div>").addClass("p-2 px-3 text-uppercase")
                    .html("Description")
            ),
        $("<th>").addClass("border-0 bg-light")
            .append(
                $("<div>").addClass("p-2 px-3 text-uppercase")
                    .html("Price")
            )
    );
}
function createLodgingRow(image, description, price) {
    return $("<tr>").append(
        $("<td>").append(
            $("<img>").attr("src", `${image}`)
                .attr("width", "160px")
                .attr("height", "120px"),
        ),
        $("<td>").html(`${description}`),
        $("<td>").html(`$${price}`)
    );
}
function createSpaceshipRow(image, description, price) {
    return $("<tr>").append(
        $("<td>").append(
            $("<img>").attr("src", `${image}`)
                .attr("width", "160px")
                .attr("height", "120px"),
        ),
        $("<td>").html(`${description}`),
        $("<td>").html(`$${price}`)
    )
}
function createTotalRow(total) {
    return $("<tr>").append(
        $("<td>").html("Total").addClass("tableFooter"),
        $("<td>").html("").addClass("tableFooter"),
        $("<td>").html(`$${total}`).addClass("tableFooter")
    );
}
function createCheckout() {
    let lodgingImage = JSON.parse(localStorage.getItem("user-lodging-image"));
    let lodgingDescription = JSON.parse(localStorage.getItem("user-lodging"));
    let lodgingPrice = JSON.parse(localStorage.getItem("user-lodging-cost"));
    let spaceshipImage = JSON.parse(localStorage.getItem("user-spaceship-image"));
    let spaceshipDescription = JSON.parse(localStorage.getItem("user-spaceship"));
    let spaceshipPrice = JSON.parse(localStorage.getItem("user-spaceship-cost"));
    let tableHeader = createTableHeader();
    $(".checkout-head").append(tableHeader);
    let lodgingRow = createLodgingRow(lodgingImage, lodgingDescription, lodgingPrice);
    $(".checkout-body").append(lodgingRow);
    let spaceshipRow = createSpaceshipRow(spaceshipImage, spaceshipDescription, spaceshipPrice);
    $(".checkout-body").append(spaceshipRow);
    let totalRow = createTotalRow(parseInt(lodgingPrice) + parseInt(spaceshipPrice));
    $(".checkout-body").append(totalRow);
};
// Anchor to Spaceship selection
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
