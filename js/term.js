/* Termwise string parser
 *  Design based on Dillion-Lane Function Plotter
 */

function Term(fx) {
    this.hasXInCoefficient = false;
    this.hasXInPower = false;
    this.coefficientXIndex = -1;
    this.powerXIndex = -1;
    this.carrotIndex = -1;
    this.coefficient = 1;
    this.power = 1;

    for (var i = 0; i < fx.length; i++) {
        if (fx[i] === '^') {
            this.carrotIndex = i;
        }
    }

    if (this.carrotIndex !== -1) {
        for (var i = 0; i < this.carrotIndex; i++) {
            if (fx[i] === 'x') {
                this.hasXInCoefficient = true;
                this.coefficientXIndex = i;
            }
        }

        for (var i = this.carrotIndex; i < fx.length; i++) {
            if (fx[i] === 'x') {
                this.hasXInPower = true;
                this.powerXIndex = i;
            }
        }

        if (this.hasXInCoefficient === true) {
            if (this.coefficientXIndex !== 0) {
                if (fx[0] === '-' && this.coefficientXIndex === 1) {
                    this.coefficient = -1;
                } else {
                    this.coefficient = parseFloat(fx.substring(0, this.coefficientXIndex));
                }
            }
        } else {
            this.coefficient = parseFloat(fx.substring(0, this.carrotIndex));
            if (fx[0] === '-') {
                this.coefficient *= -1;
            }
        }

        if (this.powerXIndex !== this.carrotIndex + 1) {
            if (fx[this.carrotIndex + 1] === '-' && this.powerXIndex === this.carrotIndex + 2) {
                this.power = -1;
            } else {
                this.power = parseFloat(fx.substring(this.carrotIndex + 1, fx.length));
            }
        }
    } else {
        for (var i = 0; i < fx.length; i++) {
            if (fx[i] === 'x') {
                this.hasXInCoefficient = true;
                this.coefficientXIndex = i;
            }
        }

        if (this.hasXInCoefficient === true) {
            if (this.coefficientXIndex !== 0) {
                if (fx[0] === '-' && this.coefficientXIndex === 1) {
                    this.coefficient = -1;
                } else {
                    this.coefficient = parseFloat(fx.substring(0, this.coefficientXIndex));
                }
            }
        } else {
            this.coefficient = parseFloat(fx);
        }
    }
}