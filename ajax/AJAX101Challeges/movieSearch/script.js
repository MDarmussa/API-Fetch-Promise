const submit = document.querySelector('#submitBtn')
const result = document.querySelector('#results')


submit.addEventListener('click', function(e) {
     e.preventDefault();
     let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US";
     url += `&query=${encodeURI(searchValue)}`;

     fetch(url)
          .then(response => response.json())
          .then(data => {let genres = data['genres']

               result.innerHTML = result;;
          })
          .catch(error => alert("wrong movie"))


})


fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US`)
     .then(response => response.json())
     .then(data => console.log(data))

            