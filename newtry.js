console.log("Assignment #3, Temperature test")

function convertTemperatureRange(){
    let scale = prompt("F or C?");
    let startValue = prompt("Enter Starting Value");
    let endValue = prompt("Enter Ending Value");



for(let i=startValue;i<=endValue;i++){
    if(scale.toLowerCase() == "c"){
        fahrenheit = ((i * 9/5) + 32).toFixed(2);
        document.getElementById("result").innerHTML+=`<p>The conversion of Celsius ${i} to Fahrenheit is ${fahrenheit}</p>`;

        console.log(`The conversion of Celsius ${i} to Fahrenheit is ${fahrenheit}`);

    } 
    else {
        celsius = ((i - 32) * 5/9).toFixed(2);
        document.getElementById("result").innerHTML+=`<p>The conversion of Farenheit ${i} to Celsius is ${celsius}</p>`;
    }   
        console.log(`The conversion of Fahrenheit ${i} to Celsius is ${celsius}`);
    }
}



