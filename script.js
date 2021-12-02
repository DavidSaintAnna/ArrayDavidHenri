let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');
let number4 = document.querySelector('#number4');
let firstArray = [];
// armazenar valores
function storeValues() {
    let emptyArray = [];
    for (let i = 1; i <= 4; i++) {
        emptyArray[i] = document.querySelector('#number' + i.toString()).value

    }
    for (let i = 0; i <= 3; i++) {
        firstArray[i] = emptyArray[i + 1]

    }
    document.querySelector('#showArray').innerHTML = firstArray;
}
// inverter
function reOrder() {
    let inverted = [];
    let j = 3;
    for (let i = 0; i < 4; i++) {
        inverted[i] = firstArray[j];
        j--;
    }
    console.log(inverted)
    document.querySelector('#showArray2').innerHTML = inverted;
}

// ordem crescente
function ascendingOrder() {
    let ascedingArray = firstArray;
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < i; j++) {
            if (ascedingArray[i] < ascedingArray[j]) {
                let x = ascedingArray[i];
                ascedingArray[i] = ascedingArray[j];
                ascedingArray[j] = x;
            }
        }
    }
    document.querySelector('#showArray3').innerHTML = ascedingArray;
}