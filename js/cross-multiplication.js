"use strict";
const container = document.getElementById("cross-multiplication");
let crossMultiplicationFactors = document.getElementsByClassName("cross-multiplication-factors");
let [field1, field2, field3, field4, field5, field6, field7, field8, field9, field10] = [];
const [simpleTemplate, composedTemplate3, composedTemplate4, composedTemplate5] = [document.getElementById("Simple"), document.getElementById("composed3"), document.getElementById("composed4"), document.getElementById("composed5")];
const selectType = document.getElementById("type");
let [number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, columns, results, temp] = [];
let [simple, reverse, reverse1, reverse2, reverse3, reverse4] = [true, false, false, false, false, false, false];
let simpleProportion;
let [composedInversor1, composedInversor2, composedInversor3, composedInversor4] = [];
let [reverseProportionField1, reverseProportionField2, reverseProportionField3] = document.getElementsByClassName("composedInverters");
let templateClone;
columns = parseInt(selectType.value);
function updateValues() {
    crossMultiplicationFactors = document.getElementsByClassName("cross-multiplication-factors");
    [field1, field2, field3, field4, field5, field6, field7, field8, field9, field10] = [...crossMultiplicationFactors];
    number1 = field1 ? field1.valueAsNumber : 0;
    number2 = field2 ? field2.valueAsNumber : 0;
    number3 = field3 ? field3.valueAsNumber : 0;
    number4 = field4 ? field4.valueAsNumber : 0;
    number5 = field5 ? field5.valueAsNumber : 0;
    number6 = field6 ? field6.valueAsNumber : 0;
    number7 = field7 ? field7.valueAsNumber : 0;
    number8 = field8 ? field8.valueAsNumber : 0;
    number9 = field9 ? field9.valueAsNumber : 0;
    number10 = field10 ? field10.valueAsNumber : 0;
    [reverseProportionField1, reverseProportionField2, reverseProportionField3] = document.getElementsByClassName("composedInverters");
}
function result() {
    updateValues();
    switch (columns) {
        case 2:
            simple ? results = (number2 * number3) / number1 : null;
            reverse ? results = (number1 * number2) / number3 : null;
            field4.value = results ? results.toString() : "";
            break;
        case 3:
            if (reverse1) {
                temp = number1;
                number1 = number4;
                number4 = temp;
                temp = 0;
            }
            if (reverse2) {
                temp = number2;
                number2 = number5;
                number5 = temp;
                temp = 0;
            }
            results = (number3 * number4 * number5) / (number1 * number2);
            field6.value = results ? results.toString() : "";
            break;
        case 4:
            if (reverse1) {
                temp = number1;
                number1 = number5;
                number5 = temp;
                temp = 0;
            }
            if (reverse2) {
                temp = number2;
                number2 = number6;
                number6 = temp;
                temp = 0;
            }
            if (reverse3) {
                temp = number3;
                number3 = number7;
                number7 = temp;
                temp = 0;
            }
            results = (number4 * number5 * number6 * number7) / (number1 * number2 * number3);
            field8.value = results ? results.toString() : "";
            break;
        case 5:
            if (reverse1) {
                temp = number1;
                number1 = number6;
                number6 = temp;
                temp = 0;
            }
            if (reverse2) {
                temp = number2;
                number2 = number7;
                number7 = temp;
                temp = 0;
            }
            if (reverse3) {
                temp = number3;
                number3 = number8;
                number8 = temp;
                temp = 0;
            }
            if (reverse4) {
                temp = number4;
                number4 = number9;
                number9 = temp;
                temp = 0;
            }
            results = (number5 * number6 * number7 * number8 * number9) / (number1 * number2 * number3 * number4);
            field10.value = results ? results.toString() : "";
            break;
    }
}
function composedCrossMultiplicationType() {
    switch (columns) {
        case 2:
            [reverse1, reverse2, reverse3, reverse4] = [false, false, false, false];
            templateClone = simpleTemplate.content.cloneNode(true);
            container.innerHTML = "";
            container.appendChild(templateClone);
            simpleProportion = document.getElementById("proportional");
            break;
        case 3:
            [reverse1, reverse2, reverse3, reverse4] = [false, false, false, false];
            templateClone = composedTemplate3.content.cloneNode(true);
            container.innerHTML = "";
            container.appendChild(templateClone);
            break;
        case 4:
            [reverse1, reverse2, reverse3, reverse4] = [false, false, false, false];
            templateClone = composedTemplate4.content.cloneNode(true);
            container.innerHTML = "";
            container.appendChild(templateClone);
            break;
        case 5:
            [reverse1, reverse2, reverse3, reverse4] = [false, false, false, false];
            templateClone = composedTemplate5.content.cloneNode(true);
            container.innerHTML = "";
            container.appendChild(templateClone);
            break;
    }
    updateValues();
}
function reverseProportion(target) {
    updateValues();
    if (target == 1) {
        if (!reverse1) {
            composedInversor1 = document.getElementById('composedInvert1');
            composedInversor1.classList.toggle('reversed', true);
            setTimeout(() => {
                if (columns == 3) {
                    reverseProportionField1.innerHTML = "<span><span class='text' style='transform: rotateX(-180deg)'>Inverso</span><br><b>&nbsp <---</b></span>";
                }
                reverse1 = true;
                result();
            }, 100);
        }
        else {
            composedInversor1 = document.getElementById('composedInvert1');
            composedInversor1.classList.toggle('reversed', false);
            setTimeout(() => {
                if (columns == 3) {
                    reverseProportionField1.innerHTML = "<span><span class='text'>Proporcional</span><br><b>&nbsp <---</b></span>";
                }
                reverse1 = false;
                result();
            }, 100);
        }
    }
    if (target == 2) {
        if (!reverse2) {
            composedInversor2 = document.getElementById('composedInvert2');
            composedInversor2.classList.toggle('reversed', true);
            setTimeout(() => {
                if (columns == 3) {
                    reverseProportionField2.innerHTML = "<span><span class='text' style='transform: rotateX(-180deg)'>Inverso</span><br><b>&nbsp <---</b></span>";
                }
                reverse2 = true;
                result();
            }, 100);
        }
        else {
            composedInversor2 = document.getElementById('composedInvert2');
            composedInversor2.classList.toggle('reversed', false);
            setTimeout(() => {
                if (columns == 3) {
                    reverseProportionField2.innerHTML = "<span><span class='text'>Proporcional</span><br><b>&nbsp <---</b></span>";
                }
                reverse2 = false;
                result();
            }, 100);
        }
    }
    if (target == 3) {
        if (!reverse3) {
            composedInversor3 = document.getElementById('composedInvert3');
            composedInversor3.classList.toggle('reversed', true);
            setTimeout(() => {
                reverse3 = true;
                result();
            }, 100);
        }
        else {
            composedInversor3 = document.getElementById('composedInvert3');
            composedInversor3.classList.toggle('reversed', false);
            setTimeout(() => {
                reverse3 = false;
                result();
            }, 100);
        }
    }
    if (target == 4) {
        if (!reverse4) {
            composedInversor4 = document.getElementById('composedInvert4');
            composedInversor4.classList.toggle('reversed', true);
            setTimeout(() => {
                reverse4 = true;
                result();
            }, 100);
        }
        else {
            composedInversor4 = document.getElementById('composedInvert4');
            composedInversor4.classList.toggle('reversed', false);
            setTimeout(() => {
                reverse4 = false;
                result();
            }, 100);
        }
    }
}
function simpleProportionChange() {
    simpleProportion.classList.toggle("reverse");
    if (simpleProportion.classList.value == "reverse") {
        simpleProportion.innerHTML = "<p style='transform:rotateX(-180deg)'>Inversamente Proporcional</p>";
        reverse = true;
        simple = false;
    }
    else {
        simple = true;
        reverse = false;
        simpleProportion.innerText = "Proporcional";
    }
    result();
}
composedCrossMultiplicationType();
function changeType() {
    columns = parseInt(selectType.value);
    composedCrossMultiplicationType();
}
container.onkeyup = () => { result(); };
