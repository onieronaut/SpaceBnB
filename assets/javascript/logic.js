
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

    // List of our created objects that will store names, image sources,
    // and other information to complement SWAPI
    const coruscant = {
        name: "Coruscant",
        class: "Planet"
    }

    const dagobah = {
        name: "Dagobah",
        class: "Planet"
    }

    const kashyyyk = {
        name: "Kashyyyk",
        class: "Planet",
        planet: "../images/planets/Kashyyyk/planet.png"
    }

    const milleniumFalcon = {
        name: "Millennium Falcon",
        class: "Spaceship"
    }

    const sandCrawler = {
        name: "Sand Crawler",
        class: "Vehicle"
    }

    // How to search by planet name and console log object
    // List of Planets
    // Dagobah, Kashyyyk, Coruscant, Tatooine, Naboo,
    // 
    // Relevant information we want:
    // Climate
    // Gravity
    // Population
    // Terrain
    swapiModule.getPlanets({ search: kashyyyk.name }).then(function (data) {
        console.log("Result of getPlanets", data);
        console.log(data.results[0].climate);
        console.log(data.results[0].gravity);
        console.log(data.results[0].population);
        console.log(data.results[0].terrain);
    });

    // How to search by starship name and console log object
    // List of Starships
    // Millenium Falcon, Y-Wing, X-Wing, TIE Advanced X1
    // Jedi Starfighter, Slave 1
    swapiModule.getStarships({search: "Millennium Falcon"}).then(function(data) {
        console.log("Result of getStarships", data);
      });

    
    // How to search by vehicle name and console log object
    // List of Vehicles
    // AT-AT, Snowspeeder, Sith Speeder, Sand Crawler,
    // Single Trooper Aerial Platform, Imperial Speeder Bike
    swapiModule.getVehicles({search: sandCrawler.name}).then(function(data) {
        console.log("Result of getVehicles", data);
      });



      swapiModule.getAllSpecies().then(function(data) {
        console.log("Result of getAllSpecies", data);
      });


      // Add an image from one of our objects to the page
      let newImg = $("<img>").attr("src", kashyyyk.planet);
      $("#img-test").append(newImg);




}