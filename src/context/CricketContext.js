import { Component } from "react";
import { createContext } from "react";


// let a = 100

const CricketContext = createContext("I m default");

console.log(CricketContext);

export default CricketContext;


// {
//     Provider: Component,
//     Consumer: Component
//     ...Component.
// }