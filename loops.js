//for

for(let i=0;i<4;i++){
    document.write("My for is working?");

}
for(let i=1;i<=10;i++){
    document.write(`<p> 2x${i} = ${i*2} <p>`)
}

//while loop

console.log("----Whie loop ----")
let i=0; //start point

while(i<=10){ //stop condition
    console.log(i);
    i++; //interval
}

// do-while loop

let j=0; //start point
do {
    console.log(j);
    j++;//interval
    while(j<=10);//stop condition
}

//while

function countDown(){
    let seconds =10;
    let results ="";

    while(seconds>0){
        results+=`<p> Launching in ${seconds} </p>`;
        seconds--;
    }
    results += "Liftoftt!!!"
    document.write(results);

}

countDown();

//do-while
function passwordPrompt(){
    let correctPassword = "1234";
    let userInput;
    let notification = "Simulating password input";

    do(
        userInput + prompt("Enter your password:");
        result+="User entered: " + userInput;
    )while(userInput == correctPassword)

document.write(noticficatioin);

}