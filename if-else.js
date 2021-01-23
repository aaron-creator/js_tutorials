const age = 20;
const isOldEnough = age >=18;
console.log(isOldEnough);
if(isOldEnough){
    console.log(`Sarah can start her driving license`);
} else{
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
const birthYear = 2015;
let century;
if(birthYear <= 2000)
{
    century = 20;
} else{
    century = 21;
}
console.log(`You are in the ${century} century`);