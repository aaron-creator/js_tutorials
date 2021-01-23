//const massMark = 78;
//const massJohn = 92;
//const heightMark = 1.69;
//const heightJohn = 1.95;


const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const markBMI = massMark/(heightMark ** 2);
const johnBMI = massJohn/(heightJohn * heightJohn);
console.log("BMI of Mark",markBMI);
console.log("BMI of John",johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than john's BMI (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}