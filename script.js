let name = "Alyssa Crechiolo";
let age = 31;
let birthday = "December 29";
let detroitGC = true;
let lifeEvents = [
  "I was born in Southfield, Michigan",
  "I am 22% French",
  "I have a cat with Vitiligo",
  "I love black olives"
];
if (detroitGC) {
  console.log(
    `My name is ${name} and I am a Student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else if (true) {
  console.log(
    `My name is ${name} and I am a Student at Grand Circus in Grand Rapids. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

//declare the variables
let wage = 10;
let hours = 60;
//write the code to log the total paycheck based on the hours worked and the wage ($ per hour).
//If the hours worked is over 40, give 150% pay for the extra hours worked
if (hours <= 40) {
  console.log(wage * 40);
} else {
  let overTime = hours - 40;
  let overTimePay = overTime * wage * 1.5 + wage * 40;
  console.log(
    `If you make ${wage} dollars an hour and work ${hours} hours a week, you will receive a paycheck of $${overTimePay}.00`
  );
}
