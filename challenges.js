  //let doubleNumber =("10");
  //let doublenumber = ("4");
  //console.log(doubleNumber * 2);

function doubleNumber(num){
    let total = num * 2;
    console.log(num * 2);
    return total;
}

doubleNumber(4);
doubleNumber(10)

function combineNames(firstName="unknown", lastName="unknown"){
return firstName + lastName;
}

combineNames("Alice", "Johnson");
combineNames("Alice");
combineNames();


function convertToSeconds(min){
let total = min *60
console.log(min * 60);
return total

}

convertToSeconds(5)
convertToSeconds(10)
