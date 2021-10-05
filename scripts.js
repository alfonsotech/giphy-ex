console.log('hello from the js file');

// fetch('https://api.giphy.com/v1/gifs/trending?api_key=5gQ1nAum5SAORh5R8FU9WQYkESN7MvWG')
//   .then(response => response.json())
//   .then(data => console.log(data))
// .catch(error => document.body.appendChild = error);

//   fetch('https://api.giphy.com/v1/gifs/trending?api_key=5gQ1nAum5SAORh5R8FU9WQYkESN7MvWG')
//   .then(response => response.json())
// .then(json => {
//   json.data
//     .map(gif => gif.images.fixed_height.url)
//     .forEach(url => {
//       let img = document.createElement('img')
//       img.src = url
//       document.body.appendChild(img)
//     })
// })
// .catch(error => document.body.appendChild = error)

fetch('https://api.giphy.com/v1/gifs/search?api_key=5gQ1nAum5SAORh5R8FU9WQYkESN7MvWG&q=dogs')
  .then(response => response.json())
.then(json => {
  json.data
    .map(gif => gif.images.fixed_height.url)
    .forEach(url => {
      let img = document.createElement('img')
      img.src = url
      document.body.appendChild(img)
    })
})
.catch(error => document.body.appendChild = error)
