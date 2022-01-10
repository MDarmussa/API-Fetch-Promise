


const fileNames = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg"];


photoes(fileNames)

//   .then(response => {
//     console.log('yay');
//   })
  .catch(error => {
    console.log('There is an error!');
    console.error(error);
  });

async function photoes(images) {
  for (let filename of images) {
    const response = await fetch(filename);
    const Blob = await response.blob(); //blob is a JS method for images
    const img = document.createElement('img');
    img.src = URL.createObjectURL(Blob);
    img.width = '200';
    img.height = '200'
    document.body.append(img);
  }
}