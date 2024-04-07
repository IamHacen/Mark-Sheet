#! /usr/bin/env node 
import { log } from "console";
import inquirer from "inquirer";
//Enter subjects Marks
const answer = await inquirer.prompt([
    {  message: "Enter Mathematics Marks", type: "number", name: "Mathematics" },
    {  message: "Enter Physics Marks", type: "number", name: "Physics" },
    {  message: "Enter Chemistry Marks", type: "number", name: "Chemistry" },
    {  message: "Enter Pakistan Studies Marks", type: "number", name: "PakistanStudies" },
    {  message: "Enter Urdu Marks", type: "number", name: "Urdu" },
    {  message: "Enter Computer Science Marks", type: "number", name: "ComputerScience" },
]);
//*Now for Total Marks
const ObtaintedMarks= answer.Mathematics+answer.Physics+answer.Chemistry+answer.PakistanStudies+answer.Urdu+answer.ComputerScience;
console.log("You Obtained Marks: "+ObtaintedMarks);
const TotalMarks=600;
console.log("Total Marks are:    "+TotalMarks);
const Grade= (ObtaintedMarks*100) / TotalMarks;


if (Grade >= 80) {
    console.log("Your Grade is:     A");
}
else if(Grade >=70 && Grade < 80){
    console.log("Your Grade is:     B");
}
else if(Grade >=60 && Grade < 70){
    console.log("Your Grade is:     C");
}
else if(Grade >=50 && Grade < 60){
    console.log("Your Grade is:    D");
}
else{
    console.log("Sorry You are Fail!")
}