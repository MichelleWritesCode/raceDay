let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18; 

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 am and your raceNumber is: ${raceNumber}.`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 am and your raceNumber is: ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30 am and your raceNumber is: ${raceNumber}.`);
} else {
  console.log('Please, go to the registration desk and ask for your race time and race number.')
}

