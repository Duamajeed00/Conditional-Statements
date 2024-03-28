// // UNARY OPERATORS (PRE INCREMENT,POST INCREMENT AND PRE DECREMENT,POST DECREMENT)
let a:number = 5;
let b:number = 2;
let c:number;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);

// // CONDITIONAL STATEMENTS (IF ELSE)
let myDegree:string ="Bachelor's of I.T";

if(myDegree === "Bachelor's of Science"){
    console.log("You are pursuing a good degree");
}
else if(myDegree === "Bachelor's in Mathematics"){
    console.log("yeah!! this is an interesting subject to study");
}
else if(myDegree === "Bachelor's of Psychology"){
    console.log(" Studying Psychology is not an easy task");
}
else{
    console.log("IN SHA ALLAH I will be the best future web developer");
}

// TERNARY OPERATORS
let favouriteWeather:string = "rainy";
let weather = favouriteWeather === "cloudy" ? "Sky is looking beautiful" : "Love to see the rainbow";
console.log(weather);
