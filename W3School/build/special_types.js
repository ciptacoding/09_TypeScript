"use strict";
/*
type: any adalah sebuah tipe tanpa melakukan pengecekan tipe data
*/
let u = "test";
u = 20;
console.log(Math.round(u));
/*
type: unknown adalah sebuah tipe alternatif dari any yang lebih direkomendasikan dan aman
*/
let v = true;
v = 3; //no error
v = {
    runANonExistentMethod: () => {
        console.log("hello world");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof v === 'object' && v !== null) {
    v.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
/*
type: never berfungsi untuk melemparkan eror setiap kali didefinisikan
*/
// let x: never = true; //error
/*
Type: undefined & null
*/
let y = undefined;
let z = null;
