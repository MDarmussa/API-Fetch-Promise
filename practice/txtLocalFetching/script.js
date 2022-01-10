const button1 = document.querySelector('.info')
 
button1.addEventListener('click', function() {
     async function catchPoem() {
          const response = await fetch('poem.txt');
          return await response.text();      
     }
     catchPoem()
     .catch(error => {
          console.log('There is an error!');
          console.log(error)

     })

     .then(poem => {
          document.getElementById('poem1').innerText = poem;

     })
});


