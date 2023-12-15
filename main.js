//Task1
// function sumTwoNumber(a,b){
//     console.log(a+b);
// }

// sumTwoNumber(2,3);
// sumTwoNumber(4,4);
// sumTwoNumber(-2,4);


//Task2

// function checkNumber (a){
//     if(a > 0){
//         console.log("Positive");
//     }
//     else if (a < 0){
//         console.log("Negative");
//     }
//     else {
//         console.log("Zero");
//     }
// }

// checkNumber(5);
// checkNumber(-8);
// checkNumber(0);



// Task 3

// function generateMultiplicationTable(a){
//     for(let i = 1; i <= 10;i++){
//         console.log(a + "*" + i + "=" + a * i);
//     }
// }

// generateMultiplicationTable(5);

//Task4

// function endNine(a){
//     if(a % 10 == 9){
//         console.log("Yes");
//     }
//     else {
//         console.log("No");
//         }
// }

// endNine(123);
// endNine(129);



// Class Tasks

// function longestTime(a,b,c){
//     let aa = a;
//     let bb = b;
//     aa = (a * 60)*60;
//     bb = (b * 60);
//     if(aa > bb && aa > c){
//         console.log(a);
//     }
//     else if(bb > aa && bb > c){
//         console.log(b);
//     }
//     else if (c > aa && c > bb){
//         console.log(c);
//     }
// }

// longestTime(1,59,3598);
// longestTime(2,300,15000);
// longestTime(15,955,59400);


//tast 2 

// function same(a){
//    let b = Math.floor(a % 10);
//    let c = Math.floor(a / 10) % 10;
//    let d = Math.floor(a / 100) % 10;
//    if(b == c || b == d || c == d){
//     console.log("True");
//    }
//    else {
//     console.log("False");
//    }
// }

// same(123);


//Home Task
//1

// function calculateCircleArea(a){
//    let pi = 3.14;
//    let result = Math.round(pi*(a*a));
//    return console.log(result);
// }

// calculateCircleArea(5);
// calculateCircleArea(8);
// calculateCircleArea(3);


//2
// function sum3Digit(a){
//    let first = Math.round(a / 100) % 10;
//    let second = Math.round(a / 10) % 10;
//    let last = Math.round(a % 10);
//    let sum = first + second + last;
//    return console.log(sum);
// }

// sum3Digit(123);
// sum3Digit(345);
// sum3Digit(321);

// function sumOfDigits(a){
//    if(a % 2 == 0){
//    return console.log(a = a + 1);
//    } 
//    else {
//       return console.log(a = a - 2);
//    }
// }

// sumOfDigits(22);
// sumOfDigits(4);
// sumOfDigits(3);


// function lessThen100(a,b){
//    if(a + b < 100){
//       return console.log("true");
//    }
//    else{
//       return console.log("False");
//    }
// }

// lessThen100(22,15);
// lessThen100(83,34);
// lessThen100(3,77);


// function longestTime(a,b,c){
//    let hour = (a * 60) * 60;
//    let minute = (b * 60);

//    if (hour > minute && hour > c){
//       return console.log(a);
//    }
//    else if (minute > hour && minute > c){
//       return console.log(b);
//    }
//    else if (c > minute && c > hour){
//       return console.log(c);
//    }
// }

// longestTime(1,59,3598);
// longestTime(2,300,15000);
// longestTime(15,955,59400);

// function perimetr(a){
//    return console.log(a * 4);
// }
// perimetr(7);
// perimetr(8);
// perimetr(25);

// function area(a){
//    return console.log(a * a);
// }

// area(8);
// area(11);
// area(6);

// function averageNum(a,b){
//    return console.log((a + b) / 2);
// }

// averageNum(7,9);
// averageNum(8,12);
// averageNum(10,30);

// function evenOrOdd(a){
//    if(a % 2 == 0){
//       return console.log("3");
//    }
//    else {
//       return console.log("4");
//    }
// }

// evenOrOdd(7);
// evenOrOdd(12);
// evenOrOdd(-8);

// function calculation(a){
//    return console.log(17 * (a*a) - (6 * a) + 13);
// }

// calculation(2);
// calculation(0);
// calculation(10);

//class Task 3 

// function largestSwap(a){
//     let first = (a / 10) % 10;
//     let second = a % 10;
//     let reverse = (second * 10) + first;
//     if(a > reverse){
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }

// largestSwap(14);
// largestSwap(53);

//class task 4 

// function addUp(a){
//     let sum = 1;
//     for(let i = 1; i <=a;i++){
//         sum *=i;
//     }
//     return sum;
// }

// // console.log(addUp(5));

// function different(a,b,c){
//     if (a == b){
//         console.log(3);
//     }
//     else if (a == c){
//         console.log(2)
//     }
//     else if (b == c){
//         console.log(1)
//     }
// }

// different(5,5,10);
// different(897,1,1);
// different(1,555,1);

// function polindrom(a){
//     let first = Math.round(a / 1000)%10;
//     let second = Math.round(a / 100)% 10;
//     let third = Math.round(a / 10)% 10;
//     let fourth = Math.round(a % 10);
//     if (first == fourth && second == third){
//         console.log("True");
//     }
//     else {
//         console.log("False");
//     }
// }

// polindrom(1111);

// function equation(a,b){
//     let equation = (b) / a;
//     return equation;
// }

// console.log(equation(4,5));
// console.log(equation(2,3));
// console.log(equation(3,6));

// function isPow(a){
//     let pow = 2;
//     let ispoww = false;
//     for(let i = 1; i < a;i++){
//         pow = pow * 2;
//         if(pow == a){
//             ispoww = true;
//         }
//     }
//     return ispoww;
// }

// console.log(isPow(16));
// console.log(isPow(9));

// function maxNum(a){
//     let maxNumber = 0;
//     if (a < 999){
//         let first = Math.round(a / 100) % 10;
//         let second = Math.round(a / 10) % 10;
//         let third = Math.round(a % 10);
//         if (maxNumber < first)maxNumber = first;
//         if (maxNumber < second)maxNumber = second;
//         if (maxNumber < third)maxNumber = third;
//     }
//     if (a > 999){
//         let first = Math.round(a / 1000) % 10
//         let second = Math.round(a / 100) % 10;
//         let third = Math.round(a / 10) % 10;
//         let fourth = Math.round(a % 10);
//         if (maxNumber < first)maxNumber = first;
//         if (maxNumber < second)maxNumber = second;
//         if (maxNumber < third)maxNumber = third;
//         if (maxNumber < fourth)maxNumber = fourth;
//     }
//     return maxNumber;
// }

// console.log(maxNum(7132));
// console.log(maxNum(897));
// console.log(maxNum(811));

// function addDigits(a){
//     let result = a;
//     if(result > 9){
//         for (let i = 0; i < 15;i++){
//            if (result > 9){
//             let first = Math.floor(result / 10) % 10;
//             let second = Math.floor(result % 10);
//             result = first + second;
//            }
//         }
//     }
//     return result;
// }

// console.log(addDigits(38));

// function isPrime(a){
//     let result = a;
//     let cnt = 0;
//     let bool = false;
//     for (let i = 1;i < result;i++){
//         if(result % i == 0){
//             cnt++;
//         }
//     }
//     if(cnt > 2){
//         bool = false;
//     }
//     else {
//         bool = true;
//     }
//     return bool;
// }

// console.log(isPrime(2));
// console.log(isPrime(6));


// function factorial(a){
//     let result = 1;
//     for(let i = 1; i <= a;i++){
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(5));


// function sumOfDigit(a){
//     let result = 0;
//     for(let i = 1; i <= a;i++){
//         result = result + i;
//     }
//     return result;
// }

// console.log(sumOfDigit(5));

// function ariphmetic(a){
//     let result = 0;
//     let cnt = 0;
//     for(let i = a;i > 0; i /=10){
//         result += Math.floor(i % 10);
//     }
//     if (a <= 9){
//         cnt = 1;
//     }
//     else if (a <= 99){
//         cnt = 2;
//     }
//     else if (a <= 999){
//         cnt = 3;
//     }
//     else if (a <= 9999){
//         cnt = 4;
//     }
//     else {
//         cnt = 0;
//     }
//     return result / cnt;
// }

// console.log(ariphmetic(2456));
// console.log(ariphmetic(99));

// function minOrMax(a){
//     let min = 9;
//     let max = 0;
//     for(let i = a; i > 1; i /= 10){
//         if (i % 10 < min)min = Math.round(i % 10);
//         if (i % 10 > max)max = Math.round(i % 10);
//     }
//     console.log("min:" + min + " max:" + max);
// }

// minOrMax(5732);


function isPalindromePrime(a){

    let first = (a / 100) % 10;
    let third = (a % 10);
    let result = false;
    let palindrom = false;
    if (first == third){
        palindrom = true;
    }

    let prime = false;

    for (let i = 1;i < 9;i++){
        if(a % i == 0){
            prime = true;
        }
    }
    if(prime == true && palindrom == true){
        result = true;
    }
    return result;
}

console.log(isPalindromePrime(131));
console.log(isPalindromePrime(121));