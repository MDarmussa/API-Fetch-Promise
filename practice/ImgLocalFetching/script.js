
// .async method
async function aphoto() {
     const response = await fetch('abc.jpeg');
     const blob = await response.blob();
     document.getElementById('fetchImg').src = URL.createObjectURL(blob)    
}
aphoto();
//with async, must call the function

// ----------------------------------------

//.then method
fetch('abc.jpeg')

     .then(response => {
          return response.blob();
     })

     .then(blob => {
          console.log(blob)
          document.getElementById('fetchImg').src = URL.createObjectURL(blob)
     })

     .catch(error => {
          console.log('error!');
          console.error(error);
     });