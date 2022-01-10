
// const getJSON = response => response.json();

// const promise = new Promise((resolve, reject) => {
//      resolve(42);
//    });
//    console.log()




const getJSON = response => {
     if (response.status === 200) {
       return response.json();
     } else {
       throw new Error('Bad status code');
     }
   };

const getData = data => {
     console.log(data);
     return data;
};

//what the heck is character?
const extractAliases = character => {
     const {aliases} = character;
     return aliases;
}

const printAliases = aliases => {
     for(let a of aliases) {
          console.log(a)
     } 
     console.log("we printed " + aliases.length + " aliases")
     return aliases.length;
};

const reportError = () => {
     console.error('Hey man, be careful, there is an error')
     return 0;
};

const printSummary = (howMany) => {
     console.log(`we printed ${howMany} aliases`)
}

const loadFromStorage = key => {
     return new Promise((resolve, reject) => {
       const raw = localStorage.getItem(key);
       if (raw) {
         const data = JSON.parse(raw);
         resolve(data);          
       } else {
         reject(key);
       }
     });
   };

fetch(`https://anapioficeandfire.com/api/characters/583`)
     .then(getJSON)
     // .then(getData)
     .then(extractAliases)
     .then(printAliases)
     .catch(reportError)
     .then(printSummary)
     