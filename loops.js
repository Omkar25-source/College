/******************************************************
        JAVASCRIPT PRACTICAL – LOOPS & STATEMENTS
******************************************************/

/*====================================================
1) SIMPLE JAVASCRIPT PROGRAMS
Definition:
Simple programs are basic statements executed line by line.
====================================================*/

console.log("===== SIMPLE PROGRAMS =====");

// 1. Print Hello World
console.log("Hello World");

// 2. Addition of Two Numbers
let x = 10;
let y = 20;
let sumSimple = x + y;
console.log("Sum of", x, "and", y, "is:", sumSimple);



/*====================================================
2) FOR LOOP
Definition:
A for loop is used when the number of iterations 
(repetitions) is known in advance.
Syntax:
for(initialization; condition; increment/decrement)
====================================================*/

console.log("\n===== FOR LOOP PROGRAMS =====");

// 1. Print Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print Even Numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Multiplication Table of 5
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



/*====================================================
3) WHILE LOOP
Definition:
A while loop executes a block of code as long as 
the given condition is true.
It is used when the number of iterations is not fixed.
Syntax:
while(condition)
====================================================*/

console.log("\n===== WHILE LOOP PROGRAMS =====");

// 1. Print Numbers from 1 to 5
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// 2. Sum of First 10 Numbers
let b = 1;
let sumWhile = 0;

while (b <= 10) {
    sumWhile += b;
    b++;
}
console.log("Sum is:", sumWhile);



/*====================================================
4) DO-WHILE LOOP
Definition:
A do-while loop executes the code at least once,
then checks the condition.
Syntax:
do {
   // code
} while(condition);
====================================================*/

console.log("\n===== DO-WHILE LOOP PROGRAM =====");

let c = 1;
do {
    console.log(c);
    c++;
} while (c <= 5);



/*====================================================
5) IF-ELSE STATEMENT
Definition:
If-else statement is used to execute one block of code
if the condition is true, and another block if false.
Syntax:
if(condition) {
   // true block
} else {
   // false block
}
====================================================*/

console.log("\n===== IF-ELSE STATEMENT =====");

let number = 7;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}



/*====================================================
6) IF-ELSE LADDER
Definition:
If-else ladder is used when multiple conditions 
need to be checked.
Syntax:
if(condition1) {
}
else if(condition2) {
}
else {
}
====================================================*/

console.log("\n===== IF-ELSE LADDER =====");

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



/*====================================================
7) NESTED IF-ELSE
Definition:
Nested if-else means using an if-else statement 
inside another if-else statement.
====================================================*/

console.log("\n===== NESTED IF-ELSE =====");

let n1 = 10;
let n2 = 20;
let n3 = 15;

if (n1 > n2) {
    if (n1 > n3) {
        console.log("n1 is Largest");
    } else {
        console.log("n3 is Largest");
    }
} else {
    if (n2 > n3) {
        console.log("n2 is Largest");
    } else {
        console.log("n3 is Largest");
    }
}