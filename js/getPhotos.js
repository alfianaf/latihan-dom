fetch("https://jsonplaceholder.typicode.com/photos?limit=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (photos) {

    card(photos);
  console.log('photos', photos);


  })
  .catch(function (err) {
    console.log(err);
  });

//   function appendData(photos) {
//     var mainContainer = document.getElementById("card");
  
//     for (var i = 0; i < photos.length; i++) {
//       var div = document.createElement("div");
//       div.innerHTML = "Nama: " + data[i].name;
//       mainContainer.appendChild(div);
//     }
//   }
function card(photos){
let output = '';
for (var i = 0; i < 10; i++) {

//   photos.forEach(element => {
      output += `
      <div class="col-md-4">
      <div class="card" style="width: 18rem;">
            <img src="${photos[i].thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photos[i].id}</h5>
                <p class="card-text">${photos[i].title}</p>
            </div>
            </div>
            </div>
      `;
      
  const cardOutput = document.getElementById('card1');
  cardOutput.innerHTML = output;
  console.log('output', output);
  }

}