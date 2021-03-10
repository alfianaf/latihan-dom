fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
    tabelUser(data);
  })
  .catch(function (err) {
    console.log(err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("data1");
  var mainContainer2 = document.getElementById("data2");

  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Nama: " + data[i].name;
    mainContainer.appendChild(div);
  }

  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Username: " + data[i].username;
    mainContainer2.appendChild(div);
  }
}
function tabelUser(data) {
  var col = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  var table = document.createElement("table");
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data[i][col[j]];
    }
  }

  var divContainer = document.getElementById("showData");

  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}
