
catchPoem()

.then(poem => {
     document.getElementById('poem1').innerText = poem;

})

.catch(error => {
     console.log('There is an error!');
     console.log(error)
})

async function catchPoem() {
     const response = await fetch('poem.txt');
     return await response.text();    
}

