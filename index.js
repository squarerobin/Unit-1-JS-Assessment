/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
 */
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name;
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length;

}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
 */
function getSecondStarshipName(character) {
  // TODO: Add your code here.
  if (character.starships.length === 0) {
    return "none";
  }
  return character.starships[1].name;


}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  // TODO: Add your code here.
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
 */
function getVehiclesCostInCreditsSumTotal(character) {
  // TODO: Add your code here.

  let result = 0;


  for (let i = 0; i < character.vehicles.length; i++) {

    if (character.vehicles[i].cost_in_credits === null) {

      result += 0;

    } else {
      result += character.vehicles[i].cost_in_credits;
    }

  }

  return result;

}

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
 */
function getStarshipPassengerAndCrewSumTotal(character) {
  // TODO: Add your code here.

  let starships = character.starships;

  let total = 0;



  for (let i = 0; i < character.starships.length; i++) {
    let crew = 0;
    let passengers = 0;

    crew = starships[i].crew;
    passengers = starships[i].passengers;


    total += crew + passengers;

  }


  return total;


}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
 */
function getNthFilm(character, filmNumber) {
  // TODO: Add your code here. 
  if (filmNumber > 3 || filmNumber < 1) {
    return "There are only 3 Star Wars movies. Flan fiction excluded.";
  } else {
    return character.films[filmNumber - 1];

  }

}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
 */
function getCargoCapacityTotal(character) {
  // TODO: Add your code here.

  let starships = character.starships;
  let vehicles = character.vehicles;

  let total = 0;



  for (let i = 0; i < character.vehicles.length; i++) {


    let cargoVehicles = 0;
    cargoVehicles = Number(vehicles[i].cargo_capacity);


    total += cargoVehicles;

  }


  for (let i = 0; i < character.starships.length; i++) {

    let cargoStarships = 0;
    cargoStarships = Number(starships[i].cargo_capacity);


    total += cargoStarships;

  }

  return total;






}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
 */
function getFastestStarshipName(character) {
  // TODO: Add your code here.



  let fastestShip = "";
  let fastestSpeed = 0;

  if (character.starships.length > 0) {
    for (let i = 0; i < character.starships.length; i++) {

      let maxSpeed;
      maxSpeed = Number(character.starships[i].max_atmosphering_speed);

      if (maxSpeed > fastestSpeed) {
        fastestSpeed = maxSpeed;
      }



    }

    for (let i = 0; i < character.starships.length; i++) {
      if (Number(character.starships[i].max_atmosphering_speed) === fastestSpeed) {
        fastestShip = character.starships[i].name;
      }
    }

    return fastestShip;
  } else {
    return "none";
  }
}
/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
 */
function getLargestCargoStarshipModelName(character) {
  // TODO: Add your code here.


  let largestShip = "";
  let largestCargo = 0;

  if (character.starships.length > 0) {
    for (let i = 0; i < character.starships.length; i++) {

      let maxSpeed;
      cargo = Number(character.starships[i].cargo_capacity);

      if (cargo > largestCargo) {
        largestCargo = cargo;
      }



    }

    for (let i = 0; i < character.starships.length; i++) {
      if (Number(character.starships[i].cargo_capacity) === largestCargo) {
        largestShip = character.starships[i].model;
      }
    }

    return largestShip;
  } else {
    return "none";
  }


}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
 */
function getSlowestVehicleOrStarshipName(character) {
  // TODO: Add your code here.

  if (character.starships.length > 0) {
    let slowestShip = "";
    let slowestShipSpeed = 0;


    let slowestVehicle = "";
    let slowestVehicleSpeed = 0;

    let theSlowest = "";

    if (character.starships.length > 0 || character.vehicles.length > 0) {
      for (let i = 0; i < character.starships.length; i++) {

        let minSpeed;
        minSpeed = Number(character.starships[i].max_atmosphering_speed);

        if (minSpeed < slowestShipSpeed) {
          slowestShipSpeed = minSpeed;
        }



      }

      for (let i = 0; i < character.starships.length; i++) {
        if (Number(character.starships[i].max_atmosphering_speed) === slowestShipSpeed) {
          slowestShip = character.starships[i].name;
        }
      }


      for (let i = 0; i < character.vehicles.length; i++) {

        let minSpeed;
        minSpeed = Number(character.vehicles[i].max_atmosphering_speed);

        if (minSpeed < slowestVehicleSpeed) {
          slowestVehicleSpeed = minSpeed;
        }




      }

      for (let i = 0; i < character.vehicles.length; i++) {
        if (Number(character.vehicles[i].max_atmosphering_speed) === slowestVehicleSpeed) {
          slowestVehicle = character.vehicles[i].name;
        }
      }

      if (slowestShipSpeed < slowestVehicleSpeed) {
        theSlowest = slowestShip;

      } else {
        theSlowest = slowestVehicle;

      }

      return theSlowest;
    } else {
      return "none";
    }
  }
}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {};
  if (getName) {
    module.exports.getName = getName
  };
  if (getFilmCount) {
    module.exports.getFilmCount = getFilmCount
  };
  if (getSecondStarshipName) {
    module.exports.getSecondStarshipName = getSecondStarshipName
  };
  if (getSummary) {
    module.exports.getSummary = getSummary
  };
  if (getVehiclesCostInCreditsSumTotal) {
    module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal
  };
  if (getStarshipPassengerAndCrewSumTotal) {
    module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal
  };
  if (getNthFilm) {
    module.exports.getNthFilm = getNthFilm
  };
  if (getCargoCapacityTotal) {
    module.exports.getCargoCapacityTotal = getCargoCapacityTotal
  };
  if (getFastestStarshipName) {
    module.exports.getFastestStarshipName = getFastestStarshipName
  };
  if (getLargestCargoStarshipModelName) {
    module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName
  };
  if (getSlowestVehicleOrStarshipName) {
    module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName
  };
}