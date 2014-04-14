// :{ <- He's got a moustache.

//Global Variables
//DO NOT CHANGE.
var pointCount = 0;
var numberCount = 0;
var gridCount = 0;
var originX;
var originY;
var numL;
var numH;
var numC;
var isGraphUpdated = false;


//These can be changed to set default vals.

var zoomAmount = 100;
var intensity = 1;
var leftBound = -1;
var rightBound = 1;

//AKA Class Point() { foo };
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.pointIndex = pointCount;
    //Increase the total number of points instantiated.
    pointCount++;

    Point.prototype.draw = function () {
        //Create/build a DOM element (tag "point") that IS the current object and append it to the document...
        this.guy = document.createElement("div");
        //this.guy is the current "object"
        this.guy.className = "point";
        //Set this point's ID so that it can be referenced and changed later...
        this.guy.id = "point" + this.pointIndex;
        document.body.appendChild(this.guy);
        //Reset the entire coordinate system for every point so that (0, 0) is (originX, originY)
        document.getElementById("point" + this.pointIndex).style.left = (originX + this.x) + "px";
        document.getElementById("point" + this.pointIndex).style.top = (originY - this.y) + "px";
    }
}

function drawPoints() {
    //Delete any point elements in the DOM
    var parent = document.body;
    var child;
    for (var i = 0; i < pointCount; i++) {
        child = document.getElementById("point" + i);
        parent.removeChild(child);
    }
    pointCount = 0;

    //For science
    var points = [];

    for (var xVal = leftBound * zoomAmount; xVal <= rightBound * zoomAmount; xVal += intensity) {
        points[pointCount] = new Point(xVal, zoomAmount * calculateFunction((1 / zoomAmount) * xVal, coefficients, powers, termType));
    }

    for (var i = 0; i < points.length; i++) {
        points[i].draw();
    }
    points.length = 0;
}

function Number(x, y) {
    this.x = x;
    this.y = y;
    this.number = numC;
    this.guy;
    numC++;

    this.guy = document.createElement("div");
    this.guy.className = "number";
    this.guy.id = "number" + numberCount;

    document.body.appendChild(this.guy);

    document.getElementById("number" + numberCount).style.left = (originX + this.x) + "px";
    document.getElementById("number" + numberCount).style.top = (originY - this.y) + "px";
    document.getElementById("number" + numberCount).innerHTML = this.number;
    numberCount++;
}

function drawNumbers() {

    //Delete any number elements in the DOM
    var parent = document.body;
    var child;
    for (var i = 0; i < numberCount; i++) {
        child = document.getElementById("number" + i);
        parent.removeChild(child);
    }
    numberCount = 0;
    //For science
    var numbers = [];
    numL = parseInt((originX - document.body.offsetWidth) / zoomAmount);
    numH = -1 * numL;

    //X
    numC = numL;
    for (var i = 0; i <= (numH - numL); i++) {
        numbers[i] = new Number(numC * zoomAmount, 0);
    }

    //Y
    numC = numL;
    for (var i = 0; i <= (numH - numL); i++) {
        numbers[i] = new Number(0, numC * zoomAmount);
    }

    //Clear the array
    numbers.length = 0;
}

function HGL(pos) {
    this.pos = pos;
    this.guy = document.createElement("div");
    this.guy.className = "HGL";
    this.guy.style.top = (originY - this.pos) + "px";
    this.guy.id = "HGL" + gridCount;
    document.body.appendChild(this.guy);
    gridCount++;
}

function VGL(pos) {
    this.pos = pos;
    this.guy = document.createElement("div");
    this.guy.className = "VGL";
    this.guy.style.left = (originX + this.pos) + "px";
    this.guy.id = "VGL" + gridCount;
    document.body.appendChild(this.guy);
    gridCount++;
}

function drawGrid() {

    var parent = document.body;
    var child;
    for (var i = 0; i < gridCount; i++) {
        child = document.getElementById("HGL" + i);
        parent.removeChild(child);
        child = document.getElementById("VGL" + i);
        parent.removeChild(child);
    }


    //Horizontal Grid Lines
    var hGrid = [];
    gridCount = 0;
    numC = numL;
    for (var i = 0; i <= (numH - numL); i++) {
        hGrid[i] = new HGL(numC * zoomAmount);
        numC++;
    }
    hGrid.length = 0;

    //Vertical Grid Lines
    var vGrid = [];
    gridCount = 0;
    numC = numL;
    for (var i = 0; i <= (numH - numL); i++) {
        vGrid[i] = new VGL(numC * zoomAmount);
        numC++;
    }
    vGrid.length = 0;
}

//END of Object Prototypes and Functions

//All functions, in order, to redraw the entire graph.
function draw() {
    drawNumbers();
    drawGrid();
    drawPoints();
    isGraphUpdated = true;
}

function updateOrigin() {
    originX = document.body.offsetWidth / 2;
    originY = document.body.offsetHeight / 2;
}

function newFunction() {
    coefficients.length = 0;
    powers.length = 0;
    termType.length = 0;
    termNum = 1;
    fx = "F(x) = ";
}

//Global Mutators

function setZoom() {
    zoomAmount = document.getElementById("zoomTextBox").value;
    isGraphUpdated = false;
}

function setFx() {
    fx = document.getElementById("fxTextBox").value;
}

function setBounds() {
    leftBound = parseFloat(document.getElementById("leftBoundTextBox").value);
    rightBound = parseFloat(document.getElementById("rightBoundTextBox").value);
    isGraphUpdated = false;
}

function setIntensity() {
    intensity = parseInt(document.getElementById("inverseQualityTextBox").value);
    isGraphUpdated = false;
}