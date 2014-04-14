// Required

var coefficients = [];
var powers = [];
var termType = [];
var termNum = 1;
var fx = "F(x) = ";

function calculateFunction(x, coefficients, powers, termType) {
    //if (
    var y = 0;
    for (var i = 0; i < coefficients.length; i++) {
        if (termType[i] === 0) {
            y += Math.pow(coefficients[i], powers[i]);
        } else if (termType[i] === 1) {
            y += coefficients[i] * Math.pow(x, powers[i]);
        } else if (termType[i] === 2) {
            y += Math.pow(coefficients[i], powers[i] * x);
        } else if (termType[i] === 3) {
            y += coefficients[i] * Math.pow(x, powers[i] * x);
        } else if (termType[i] === 4) {
            y += -Math.pow(coefficients[i], powers[i] * x);
        }
    }
    
    return y;
}

function addTerm() {
    //Build a new term
    var termTextBox = document.getElementById("termTextBox");
    var term = new Term(termTextBox.value);

    //Woot woot.
    coefficients[coefficients.length] = term.coefficient;
    powers[powers.length] = term.power;

    //Find out what type of term it is for the calculateFunction() function.
    if (term.hasXInCoefficient === false && term.hasXInPower === false) {
        termType[termType.length] = 0;
    } else if (term.hasXInCoefficient === true && term.hasXInPower === false) {
        termType[termType.length] = 1;
    } else if (term.hasXInCoefficient === false && term.hasXInPower === true) {
        if (termTextBox.value[0] === '-') {
            termType[termType.length] = 4;
        } else {
            termType[termType.length] = 2;
        }
    } else if (term.hasXInCoefficient === true && term.hasXInPower === true) {
        termType[termType.length] = 3;
    }

    if (termTextBox.value[0] === '-') {
        fx += " - " + termTextBox.value.substring(1, termTextBox.value.length);
    } else {
        if (termNum !== 1) {
            fx += " + " + termTextBox.value;
        } else {
            fx += termTextBox.value;
        }
    }

    termTextBox.value = "";
    isGraphUpdated = false;
    termNum++;

}