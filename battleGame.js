// Donna Quach, JavaScript 310B, Autumn 2023
// Class 3 Exercises 

// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage
const baseDamageNum = 1;
let variableDamageNum = Math.floor((Math.random() * 10)); // Get a variable damage that could be as low as 0 or as high as 9. Highest is 9 because total damage cannot exceed max player health (i.e. 10)

console.log(`Base damage is ${baseDamageNum}`); // For testing purposes 
console.log(`Variable damage is ${variableDamageNum}`); // For testing purposes 

/* function attack(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {

  const totalDamage = baseDamage + variableDamage;
  let defenderHealthCurrent = defendingPlayer.health -= totalDamage; 

  // Because you can't have a defender health that is a negative number 
  if (defenderHealthCurrent >= 0)
  {
    return `${attackingPlayer.name} hits ${defendingPlayer.name} for total damage of ${totalDamage}. Now, ${defendingPlayer.name} has ${defenderHealthCurrent} for health left.`; 
  }
  else 
  {
    return `Now, ${defendingPlayer.name} has 0 for health.`; 
  }
  
} */

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 = {
  health: 10,
  name: 'Tom'
};

const player2 = {
  health: 10,
  name: 'Jerry'
};

// Note: No need to specify .name property when calling attack function because function code
// already incorporates that. Just the object name for player will suffice. Also, trying to specify name property in attack function call will prevent player name from displaying upon executing. 
//console.log(attack(player1, player2, baseDamageNum, variableDamageNum)); // for testing purposes 


// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {

  const totalDamage = baseDamage + variableDamage;
  let defenderHealthCurrent = defendingPlayer.health -= totalDamage; 

  // Because you can't have a defender health that is a negative number 
  if (defenderHealthCurrent >= 0)
  {
    return `${attackingPlayer.name} hits ${defendingPlayer.name} for total damage of ${totalDamage}. Now, ${defendingPlayer.name} has ${defenderHealthCurrent} for health left.`; 
  }
  else 
  {
    return `Now, ${defendingPlayer.name} has 0 for health.`; 
  }
  
}

console.log(attack(player1, player2, baseDamageNum, variableDamageNum)); // for testing purposes 

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);