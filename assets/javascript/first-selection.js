let desert  = $("#desert")
let frozen  = $("#frozen")
let tropical  = $("#tropical")
let forrest = $("#forrest")

let terrainOptions = [desert, frozen, tropical, forrest]

let selection = $(".dropdown-item")

selection.on("click", function(){
    for (let i = 0; i < terrainOptions.length; i++) {
        if (selection = desert) {
            console.log("hello")
            $("#frozenPlanets").hide();
            $("#tropicalPlanets").hide();
            $("#forrestPlanets").hide();
        }
    }
})

// desert.on("click", function(){
//     console.log("hello")
//     $("#frozenPlanets").hide();
//     $("#tropicalPlanets").hide();
//     $("#forrestPlanets").hide();
// })

// frozen.on("click", function(){
//     console.log("hello")
//     $("#desertPlanets").hide();
//     $("#tropicalPlanets").hide();
//     $("#forrestPlanets").hide();
// })

// tropical.on("click", function(){
//     console.log("hello")
//     $("#desertPlanets").hide();
//     $("#frozenPlanets").hide();
//     $("#forrestPlanets").hide();
// })

// forrest.on("click", function(){
//     console.log("hello")
//     $("#desertPlanets").hide();
//     $("#frozenPlanets").hide();
//     $("#tropicalPlanets").hide();
// })
