const aFor = parseFloat(prompt('Please enter a number:'));

const fFor = fibonacciFor(aFor);
alert (fFor);

function fibonacciFor (aFor) {
    if (aFor <= 1) return 1;
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);
    let fib;
    for (let i = 0; i <= aFor; i++) {
         fib = a + b;
         a = b;
         b = fib;
         console.log(fib);
    }
    return fib;
}

const aArr = parseFloat(prompt('Please enter a number:'));

const fArr = fibonacciArr(aArr);
alert (fArr);

function fibonacciArr (aArr) {
    if (aFor <= 1) return 1;
    let fibArr = [1, 1];
    for (let i = 0; i <= aArr; i++) {
        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }
    for (let i = 0; i < fibArr.length; i++) {
        console.log(fibArr[i]);
    }
    let l = fibArr.length-1;
    return fibArr[l];
}

const aRec = parseFloat(prompt('Please enter a number:'));

const fRec = fibonacciRec(aRec);
alert (fRec);

function fibonacciRec (aRec) {
    if (aRec <= 1) return 1;
    let fR = fibonacciRec(aRec - 1) + fibonacciRec(aRec - 2);
    console.log(fR);
    return fR;
}




