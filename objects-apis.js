/*
 * Objects, Interfaces, and API's
 */

// Objects

let dog = {
    name: "Steve",
    color: "Brown",
    breed: "Pug",
    size: "Small",
    bark: function (typeOfBark)   {
        console.log("Bark!");
    },
};

dog.bark();

// API's

// Passing by Value or Reference

    function x(y)   {
        y.num = y.num + 5;
        console.log(y);
    }

    let y = {
        name: "Tom",
        num: 10,
};
    x(y);
    console.log(y);


/* DONE */
