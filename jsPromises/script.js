
//Notes
//fetch is a function, return a value is then named "response" and passed to the next function.
//.then do another function, functions return a value .. we name the returned value "date" and pass it to the next function. 
//This is chaining, you can do it with method too.
//everytime we have parantheisis at the end, it's a function

const loadFromStorag = key => {
     return new Promise((resolve, reject) => {
          const raw = localStorage.getItem(key);

          if (raw) {
               const data = JSON.parse(raw); //parse a bult in method to change syntax into integer. jSon doesn't like integers, so we use parse
               resolve(data);
          } else {
               reject(key)
          }
     })
}

const retrieveFromAPI = key => {
     return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
          .then(getJSON)
}


const getJSON = response => {
     if (response.status === 200) {
          return response.json()
     } else {
          console.log("Bad Error is", response.status);
          throw new Error("Bad Status Code")
     }
};

const logData = data => {
     console.log(data);
     return data;
}

const extractAliases = character => {
     // console.log("character is [10]", character.aliases);
     const {aliases} = character; // {} uses to extract aliases at once
     // console.log(aliases);
     return aliases;
}

const printAliases = aliases => {
     for(let a of aliases) {
          console.log(a)
          
     }
     return aliases.length; //it's for counting the error in the printSummary function (see below)
}


const reportError = (err) => {
     console.log("There was an error!", err)
     return 0;
}


const printSummary = (howMany) => {
     console.log(`we printed ${howMany} aliases`)
}

loadFromStorag("583")
     .catch(retrieveFromAPI)
     // .then(getJSON)
     .then(logData)
     .then(extractAliases)
     .then(printAliases)
     .catch(reportError)
     .then(printSummary)

// const aliasesDIV = document.getElementById("aliases");
// const ul = document.createElement("ul")
// ul.innerHTML = `<li>${a}</li>`
// aliasesDIV.appendChild(ul)

// const promise = new Promise((resolve, reject) => {
//      resolve(42);
// })
// promise.then(value => console.log(value));

// fetch("https://anapioficeandfire.com/api/characters/583")









// const fetchHouse = houseURL => fetch(`https://anapioficeandfire.com/api/characters/${houseURL}`)
//      .then(getJSON);


// const retrieveHousesFromAPI = houses => {
//      const fetchArray = houses.map(houseURL => fetchHouse(houseURL));
//      console.log("My fetch Array is", fetchArray)
//      return Promise.all(fetchArray)
// }

// const extractHousesFromCharacter = character => {
//      const {allegiances} = character;
//      return allegiances;
// }

// const addHousesToCharacter = character => {
//      return retrieveHousesFromAPI(extractHousesFromCharacter(character))
//      .then(houseArray => {
//           character.allegiances = houseArray;
//           return character;
//      });
// }









//-------------------------------------------------
//example / 
// let [pet1, pet2, pet3] = ['dog', 'cat', 'fish']
// console.log(pet1, pet2, pet3)


// async function myFunction() {
//      //do something but wait on another function to finish first
//      await secondFunction()
// }