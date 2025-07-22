// const name="Atmiya University"
// console.log("Hello "+ name)
// console.log(`Hello ${name} `)

//1. Even odd number
// let num = 7;
// if(num % 2 == 0 )
// {
//     console.log("Even Number");
// }
// else
// {
//     console.log("Odd Number");
// }


//2.Find the Maximum of Two Numbers
// let a = 5, b = 9;
// if(a>b)
// {
    // console.log("a is maximum");  
// }
// else
// {
    // console.log("b is maximum");  
// }
// 

//3.Check Leap Year
// let year = 2020;
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
// {
    // console.log("Leap Year");
// }
// else
// {
    // console.log("Not Leap Year");
// }

//4.Sum of Natural Numbers
// const j = 5
// let sum = 0;
// for(i=1;i<=j;i++)
// {
    // sum += i
    // console.log("i:",i)
// }
// console.log(sum)

//5.Factorial of a Number
// let no = 4;
// let fact = 1;
// for (let i = 1; i <= no; i++) {
    // fact *= i;
// }
// console.log(fact);

//6.Multiplication table
// let num = 3;
// for (let i = 1; i <= 10; i++) {
    // console.log(`${num} x ${i} = ${num * i}`);
// }

// 7.Reverse a Number

// let a =12345;
// let rev=0;
// while(a>0)
// {
//     rev=rev*10 + a%10;
//     a = Math.floor(a/10);
// }
// console.log(rev)

// 8. Palindrome Check (Number)

// function isPalindromeNumber(n) {
//     const str = n.toString();
//     const reversed = str.split('').reverse().join('');
//     if (str === reversed) {
//         return "Palindrome";
//     } else {
//         return "Not a Palindrome";
//     }
// }


// 9. Check Prime Number

// function isPrime(n) {
//     if (n <= 1) return "Not Prime";
//     if (n === 2) return "Prime"; 
//     if (n % 2 === 0) return "Not Prime";

//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return "Not Prime";
//     }
//     return "Prime";
// }

// 10. Count Digits in a Number
function countDigits(number) {
    const numString = String(number);
    return numString.length;
  }
  

//5.Factorial of a Number
// let no = 4;
// let fact = 1;
// for (let i = 1; i <= no; i++) {
    // fact *= i;
// }
// console.log(fact);

//6.Multiplication table
// let num = 3;
// for (let i = 1; i <= 10; i++) {
    // console.log(`${num} x ${i} = ${num * i}`);
// }

// 7.Reverse a Number
