// Donna Quach, JavaScript 310B, Autumn 2023
// Class 3 Exercises 

// Wrapped all of my code into an Immediately Invoked Function Expression (IIFE): Lines 5 and 68
(function() {
  const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0
  }
  
  /**
   * Takes a single result string and (one of 'w', 'l', or 'd') 
   * and returns the point value
   * 
   * @param {string} result 
   * @returns {number} point value
   */
  const getPointsFromResult = function getPointsFromResult(result) {
    return RESULT_VALUES[result];
  }
  
  // Create getTotalPoints function which accepts a string of results
  // including wins, draws, and losses i.e. 'wwdlw'
  // Returns total number of points won
  function getTotalPoints(strResults) {
    const arrayResults = strResults.split(""); // Take results string and divide into separate results 
    let totalPoints = 0; // Initialize total points value before calculating 
    arrayResults.forEach((arrayResult) => {
      // Obtain point value from result property then add that to total points
      totalPoints += getPointsFromResult(arrayResult); 
    });
    return totalPoints; // Return statement must be located AFTER/OUTSIDE foreach loop because we are waiting until after foreach loop has concluded to get the total points won. (Otherwise, you would get "undefined" for your answer.)
  }
  
  // Check getTotalPoints
  console.log(getTotalPoints('wwdl')); // should equal 7
  
  // create orderTeams function that accepts as many team objects as desired, 
  // each argument is a team object in the format { name, results }
  // i.e. {name: 'Sounders', results: 'wwlwdd'}
  // Logs each entry to the console as "Team name: points"
  function orderTeams() {
    // arguments parameter is referenced here and not in the () of the orderTeams function
    // Because otherwise, putting arguments in () will prevent theArgs array from populating with items
    let myArgs = arguments; 
    const theArgs = Array.from(myArgs); // Convert arguments object into array
    //console.log(theArgs); // for testing purposes, printed {name: 'Sounders', results: 'wwdl'}, {name: 'Galaxy', results: 'wlld'}
    theArgs.forEach(function(theArg) {
        // theArg.results accesses the string results which then passes to getTotalPoints to get points won
        const teamResult = getTotalPoints(theArg.results); 
  
        // After points won is calculated, then display how many points each team won 
        console.log(`${theArg.name}: ${teamResult}`);
      }
    )
  }
  
  // Check orderTeams
  orderTeams(
    { name: 'Sounders', results: 'wwdl' },
    { name: 'Galaxy', results: 'wlld' }
  );
  // should log the following to the console:
  // Sounders: 7
  // Galaxy: 4

})();
