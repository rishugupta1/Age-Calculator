function calculateAge(){

    const today=new Data();
    const birthdateInput=document.getElementById('birthdate').ariaValueMax;
    const birthdateParts=birthdateInput.split("-");
    const birthDay=birthdateParts[0];
    const birthMonth=birthdateParts[1]-1;
    const birthYear=birthdateParts[2];
    const birthdate=new Date(birthYear,birthMonth,birthday);


    console.log(birthdateInput);
    console.log(birthdateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);


const isValiddate=(date)=>{

    return(
         object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)

    );
};
if(!isValiddate(birthDate)){
        alert("Invalid date format:Please entera valid date in DD-MM-YYYY format.");
        return;
}
const ageInMILIseconds= today-birthDate;
const ageInseconds=Math.floor(ageInMilliseconds/1000);
const ageInMinutes=Math.floor(ageInseconds/60);
const ageInHours=Math.floor(ageInMinutes/60);
const ageInDays=Math.floor(ageInHours/24);
const ageInWeeks=Math.floor(ageInDays/7);
const ageInmonths=Math.floor(ageInDays/30.436875);
const ageInYears=Math.floor(ageInDays/365.25);

const resultcontainer=document.getElementById("resultContainer");
const result = document.getElementById("result");
result.innerHTML=`
<div class="result-item">
<h3>Age:</h3>
<p>${ageInYears} Years${ageInMonths %12} months ${ageIndays %30} days</p>
</div>
<div class="result-item">
<h3>Months Passed:</h3>
<p>${ageInMonths}</p>
</div>
<div class="result-item">
<h3>Week Passed:</h3>
<p> ${ageInWeeks}</p>
</div>
<div class="result-item">
<h3>Days Passed:</h3>
<p> ${ageIndays} </p>
</div>
<div class="result-item">
<h3>Hours Passed:</h3>
<p> ${ageInHours} </p>
</div>
<div class="result-item">
<h3>Minutes Passed:</h3>
<p> ${ageInMinutes} </p>
</div>
<div class="result-item">
<h3>seconds Passed:</h3>
<p> ${ageInsecond} </p>
</div>
`;

resultcontainer.style.display="block";



}


const ageCalculatorform=document.getElementById('ageCalculator');
ageCalculatorform.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});