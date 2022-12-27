 /*
  * Conditionals, Functions, Scope and Loops.
  */


 // Variables

// Equals
 let equals = 1 == '1';
 //console.log(equals)


 // Greather than
 let greaterThan = 5 > 1;

 // Less than
 let lessThan = 2 < 10;

 // Greater than Equals
 let greaterThanEq = 5 >= 5;

 // Less Than Equals
 let lessThanEq = 4 <= 9;

 // Not Equals
 let notEquals = 5 !== 2;



 /*...*/
 let storeA = 4.40;
 let storeB = 4.40;

 let storeAIsLower = storeA < storeB;
 //console.log(storeAIsLower);


 // Functions

 function compareStorePrices (storeA, StoreB) {
     let storeAIsLower = storeA < storeB;
     if (storeAIsLower) {
         console.log("Store A has a lower price.")
     } else if (storeB < storeA) {
         console.log("Store B has a lower price.")
     } else {
         console.log("Their prices are equal.")
     }
 }

 //compareStorePrices(10, 5);
 //compareStorePrices(7, 10);

 function squareNum (number) {
     return number * number;
 }

let squaredNumber = squareNum(7);
console.log(squaredNumber);
// Tip: Functions should only do One thing & about 20 lines of code per Function!



 // Scope

 // Global Scope
let x = 10;
// Tip: Use descriptive variable names, not just "x"

 // Function Scope
 function addNumbers (n, m) {
     return n + m;

     addNumbers(2, 3);
     console.log(x);
     let b;
     // Block Scope
     if (1 ==1) {
         let b = 8
     }
     console.log(b);
     return n + m;
 }

 // Arrays & Loops

 //              0  1  2  3  4
 //let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
 //let ourArray = [1, 2, 3, 4, 5];

// let newArr = ourArray[4];
 //console.log(newArr);
 //console.log(ourArray[4][0]);

    let ourArray = [1, 2, 3, 4, 5, 6, 7];
    //for (counter; comp; incr;)
    let arrLen = ourArray.length;
    for (let i = 0; i<arrLen; i++)  {
       // console.log("i is equal to: " + i);
        //console.log(ourArray[i]);
        for (let j = 0; j<10; j++) {
            //console.log('j is equal to: ' + j);
        }
    }


    // While Loop

        let x = 0;
        while (x < 10) {
        console.log('Ran');
        x = x + 1;
        }

        /* DONE */

