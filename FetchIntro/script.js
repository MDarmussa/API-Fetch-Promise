
const url = document.getElementById('url');
const bntFetch = document.getElementById('btnFetch');
const resDIV = document.getElementById('res')

// console.log(url, bntFetch, resDIV)
bntFetch.addEventListener("click", goFetch);

function goFetch() {
     console.log(url);
     console.log(url.value);

     fetch(url.value)
          .then(respone => respone.json())
          .then(data => {
               console.log(data)

//key: is the key in the array
               for(key in data){
                    console.log(key);
                    console.log(data[key]);

                    let tempP = document.createElement("p");
                    tempP.textContent = `${key}: ${data[key]}`;


                    tempPAlt = `<p><strong>${key}</strong>: ${data[key]}`;
                    resDIV.innerHTML += tempPAlt;

                    // resDIV.appendChild(tempP);
               }
          })
}



// fetch("https://swapi.dev/api/people/2")
//      .then(respone => respone.json())
//      .then(data => {
//           console.log(data);
//      });