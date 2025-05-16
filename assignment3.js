console.log("Assignment #3, Temperature")

let scale = prompt("Is temperature in F or C ?");
let temperature = prompt("Enter Temperature");
let fahrenheit = (temperature * 9/5) + 32;
let celsius = (temperature - 32) * 5/9;



if (scale == "C"){
    document.getElementById("result").innerHTML=`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`;
    console.log(`The conversion of Celsius ${temperature} to Fahrenheit is ${fahrenheit}`);
} 
else {
    console.log(`The conversion of Fahrenheit ${temperature} to Celsius is ${celsius}`);
    document.getElementById("result").innerHTML=`The conversion of Farenheit ${temperature} to Celsius is ${celsius}`;
}


