var autoDraw = false;

function updateUI() {
    $("#zoomLabel").html(zoomAmount);
    $("#fxLabel").html(fx);
    $("#leftBoundLabel").html(leftBound);
    $("#rightBoundLabel").html(rightBound);
    $("#inverseQualityLabel").html(intensity);
    $("#pointCountLabel").html(pointCount);

    if (isGraphUpdated) {
        document.getElementById("initializeMI").style.background = "rgba(150, 150, 150, 1)";
    } else {
        document.getElementById("initializeMI").style.background = "rgba(255, 0, 0, 0.5)";
    }

    document.getElementById("shPanelButton").style.left = document.getElementById("menuBox").offsetWidth + "px";

    if (autoDraw === false) {
        $("#autoDrawButton").css("background", "rgba(0, 0, 0, 0)");
        $("#autoDrawButton").css("color", "rgba(0, 0, 0, 1.0)");
        $("#drawButton").show();
    } else if (autoDraw === true) {
        $("#autoDrawButton").css("background", "rgba(0, 0, 0, 1.0)");
        $("#autoDrawButton").css("color", "rgba(255, 255, 255, 1.0)");
        $("#drawButton").hide();
    }
}