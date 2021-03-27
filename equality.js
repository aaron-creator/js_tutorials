const age = "18";
if(age === 18) // use this equality. here 18 string is not converted to number 18 , in case of Strings only
    console.log("You are an Adult (strict)");
if(age == 18)  //here 18 string is converted to number 18 and is compared with number 18, in case of Strings only
    console.log("You are an Adult (loose)");    
const fav = prompt("What's your favourtie number");    
console.log(fav);
console.log(typeof(fav));