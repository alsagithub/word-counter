#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "sentence",
    message: "Enter your sentence to count the word:",
    type: "input",
});
let words = answer.sentence.trim().split(" "); // trim mtlb whitespacese k remove kr rhy h //split mtlb jitni bhi value h wo alg alg array m ajai
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
