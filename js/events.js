$(document).ready(function () {
    $("#setZoomButton").click(function () {
        zoomAmount = $("#zoomTextBox").val();
    });

    $("#addTermButton").click(function () {
        if ($("#termTextBox").val() !== "") {
            addTerm();
        }
    });

    $("#newFunctionButton").click(function () {
        newFunction();
    });

    $("#setBoundsButton").click(function () {
        setBounds();
    });

    $("#setIntensityButton").click(function () {
        setIntensity();
    });

    $("#drawButton").click(function () {
        draw();
    });

    $("#autoDrawButton").click(function () {
        if (autoDraw === true) {
            autoDraw = false;
        } else if (autoDraw === false) {
            autoDraw = true;
        }
    });

    $("#shPanelButton").click(function () {
        if ($("#shPanelButton").html() === "Hide") {
            $("#shPanelButton").html("Show");
            $("#menuBox").hide();
        } else if ($("#shPanelButton").html() === "Show") {
            $("#shPanelButton").html("Hide");
            $("#menuBox").show();
        }
    });
});