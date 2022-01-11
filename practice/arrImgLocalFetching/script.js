
const button = document.getElementById('btn')
const imagesContainer = document.getElementById('imagesContainer')
const fileNames = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg"];




button.addEventListener('click', function() {
  async function photoes(images) {
    for (let filename of images) {
      const response = await fetch(filename);
      const Blob = await response.blob(); //blob is a JS method for images
      const img = document.createElement('img');
      img.src = URL.createObjectURL(Blob);
      img.style.display = 'flex'
      img.width = '200';
      img.height = '200'
      img.style.padding = '20px';
      // img.style.alignContent = 'center'
      // img.style.display = 'block'
      img.style.margin = '0 auto';
      document.body.append(img);
    }
  }
  photoes(fileNames)
})

  // .catch(error => {
  //   console.log('There is an error!');
  //   console.error(error);
  // });



  //   .then(response => {
//     console.log('yay');
//   })