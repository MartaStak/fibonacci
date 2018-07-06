const aFor = parseInt(prompt('Please enter a number:'));

const fFor = fibonacciFor(aFor);
alert ('Method: sum - Your Fibonacci number is    ' + fFor);

function fibonacciFor (aFor) {
    if (aFor <= 2) return 1;
    let a = 1;
    let b = 1;
    let fib;
    for (let i = 3; i <= aFor; i++) {
         fib = a + b;
         a = b;
         b = fib;
    }
    return fib;
}

const aArr = parseInt(prompt('Please enter a number:'));

const fArr = fibonacciArr(aArr);
alert ('Method: array - Your Fibonacci number is    ' + fArr);

function fibonacciArr (aArr) {
    let fibArr = [1, 1];
    for (let i = 2; i < aArr; i++) {
        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }
    for (let i = 0; i < fibArr.length; i++) {
        console.log(fibArr[i]);
    }
    return fibArr[fibArr.length-1];
}

const aRec = parseInt(prompt('Please enter a number:'));

const fRec = fibonacciRec(aRec);
alert ('Method: recursion - Your Fibonacci number is    ' + fRec);

function fibonacciRec (aRec) {
    if (aRec <= 2) return 1;
    return fibonacciRec(aRec - 1) + fibonacciRec(aRec - 2);
}


const aMath = parseInt(prompt('Please enter a number:'));

const fMath = fibonacciMath(aMath);
alert ('Method: formula - Your Fibonacci number is    ' + fMath);

function fibonacciMath (aMath) {
    if (aRec <= 2) return 1;
    console.log(Math.round((Math.pow((1 + Math.sqrt(5)) / 2, aMath) - Math.pow(-2 / (1 + Math.sqrt(5)), aMath)) / Math.sqrt(5)));
    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, aMath) - Math.pow(-2 / (1 + Math.sqrt(5)), aMath)) / Math.sqrt(5)) ;
}

