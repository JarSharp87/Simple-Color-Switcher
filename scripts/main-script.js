// Objects to save values into
    const tilesImg = {
        hue: "0deg",
        sat: "100%",
        brightness: "100%",
        contrast: "100%"
    };

    const railsImg = {
        hue: "0deg",
        sat: "100%",
        brightness: "100%",
        contrast: "100%"
    };

    const legsImg = {
        hue: "0deg",
        sat: "100%",
        brightness: "100%",
        contrast: "100%"
    };

    const mainImg = {
        hue: "0deg",
        sat: "100%",
        brightness: "100%",
        contrast: "100%"
    };

//Tile Functions
    function changeTilesHue(objValue){
        console.log("Clicked, change hue of Tiles by " + objValue + " degrees");
        tilesImg.hue = objValue + "deg";
        updateTilesFilter();
    }

    function changeTilesSat(objValue){
        console.log("Clicked, change saturation of Tiles by " + objValue + "%");
        tilesImg.sat = objValue + "%";
        updateTilesFilter();
    }

    function changeTilesBright(objValue){
        console.log("Clicked, change brightess of Tiles by " + objValue + "%");
        tilesImg.brightness = objValue + "%";
        updateTilesFilter();
    }

    function changeTilesContrast(objValue){
        console.log("Clicked, change contrast of Tiles by " + objValue + "%");
        tilesImg.contrast = objValue + "%";
        updateTilesFilter();
    }

    function updateTilesFilter(){
        document.getElementById("img-1").style.filter = "hue-rotate(" + tilesImg.hue + ") saturate(" + tilesImg.sat + ") brightness(" + tilesImg.brightness + ") contrast(" + tilesImg.contrast + ")";
    }
//Rails functions
    function changeRailsHue(objValue){
        console.log("Clicked, change hue of Tiles by " + objValue + " degrees");
        railsImg.hue = objValue + "deg";
        updateRailsFilter();
    }

    function changeRailsSat(objValue){
        console.log("Clicked, change saturation of Tiles by " + objValue + "%");
        railsImg.sat = objValue + "%";
        updateRailsFilter();
    }

    function changeRailsBright(objValue){
        console.log("Clicked, change brightess of Tiles by " + objValue + "%");
        railsImg.brightness = objValue + "%";
        updateRailsFilter();
    }

    function changeRailsContrast(objValue){
        console.log("Clicked, change contrast of Tiles by " + objValue + "%");
        railsImg.contrast = objValue + "%";
        updateRailsFilter();
    }

    function updateRailsFilter(){
        document.getElementById("img-2").style.filter = "hue-rotate(" + railsImg.hue + ") saturate(" + railsImg.sat + ") brightness(" + railsImg.brightness + ") contrast(" + railsImg.contrast + ")";
    }

//Legs Functions
    function changeLegsHue(objValue){
        console.log("Clicked, change hue of Tiles by " + objValue + " degrees");
        legsImg.hue = objValue + "deg";
        updateLegsFilter();
    }

    function changeLegsSat(objValue){
        console.log("Clicked, change saturation of Tiles by " + objValue + "%");
        legsImg.sat = objValue + "%";
        updateLegsFilter();
    }

    function changeLegsBright(objValue){
        console.log("Clicked, change brightess of Tiles by " + objValue + "%");
        legsImg.brightness = objValue + "%";
        updateLegsFilter();
    }

    function changeLegsContrast(objValue){
        console.log("Clicked, change contrast of Tiles by " + objValue + "%");
        legsImg.contrast = objValue + "%";
        updateLegsFilter();
    }

    function updateLegsFilter(){
        document.getElementById("img-3").style.filter = "hue-rotate(" + legsImg.hue + ") saturate(" + legsImg.sat + ") brightness(" + legsImg.brightness + ") contrast(" + legsImg.contrast + ")";
    }

//Full functions
    function changeFullHue(objValue){
        console.log("Clicked, change hue of Tiles by " + objValue + " degrees");
        mainImg.hue = objValue + "deg";
        updateFullFilter();
    }

    function changeFullSat(objValue){
        console.log("Clicked, change saturation of Tiles by " + objValue + "%");
        mainImg.sat = objValue + "%";
        updateFullFilter();
    }

    function changeFullBright(objValue){
        console.log("Clicked, change brightess of Tiles by " + objValue + "%");
        mainImg.brightness = objValue + "%";
        updateFullFilter();
    }

    function changeFullContrast(objValue){
        console.log("Clicked, change contrast of Tiles by " + objValue + "%");
        mainImg.contrast = objValue + "%";
        updateFullFilter();
    }

    function updateFullFilter(){
        document.getElementById("img-4").style.filter = "hue-rotate(" + mainImg.hue + ") saturate(" + mainImg.sat + ") brightness(" + mainImg.brightness + ") contrast(" + mainImg.contrast + ")";
    }