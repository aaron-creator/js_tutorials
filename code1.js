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
    console.log("BMI of Mark is Higher");
}
else {
    console.log("BMI of John is Higher");
}