let desert  = {
    dropDown: $("#desert"),
    menu: {
        icon: $("#desertPlanets"),
        hidden: false
    }
}

let frozen  = {
    dropDown: $("#frozen"),
    menu: {
        icon: $("#frozenPlanets"),
        hidden: false
    }
}

let tropicalJungle  = {
    dropDown: $("#tropicalJungle"),
    menu: {
        icon: $("#tropicalJunglePlanets"),
        hidden: false
    }
}

let forrest  = {
    dropDown: $("#forrest"),
    menu: {
        icon: $("#forrestPlanets"),
        hidden: false
    }
}

let selectArray = [desert, frozen, tropicalJungle, forrest]

desert.dropDown.on("click", function(){
    if (desert.menu.hidden = true) {
        desert.menu.icon.show();
        desert.menu.hidden = false;
    }
    console.log("desert")
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
    forrest.menu.icon.hide();
    forrest.menu.hidden = true
})

frozen.dropDown.on("click", function(){
    console.log("frozen")
    if (frozen.menu.hidden = true) {
        frozen.menu.icon.show();
        frozen.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
    forrest.menu.icon.hide();
    forrest.menu.hidden = true
})

tropicalJungle.dropDown.on("click", function(){
    console.log("tropicalJungle")
    if (tropicalJungle.menu.hidden = true) {
        tropicalJungle.menu.icon.show();
        tropicalJungle.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    forrest.menu.icon.hide();
    forrest.menu.hidden = true
})

forrest.dropDown.on("click", function(){
    console.log("forrest")
    if (forrest.menu.hidden = true) {
        forrest.menu.icon.show();
        forrest.menu.hidden = false;
    }
    desert.menu.icon.hide();
    desert.menu.hidden = true
    frozen.menu.icon.hide();
    frozen.menu.hidden = true
    tropicalJungle.menu.icon.hide();
    tropicalJungle.menu.hidden = true
})

$("#showAllBtn").on("click", function(){
    for (let i = 0 ; i < selectArray.length; i++) {
        if (selectArray[i].menu.hidden = true) {
            selectArray[i].menu.hidden = false;
            selectArray[i].menu.icon.show();
        } else {
            return
        }
    }
})