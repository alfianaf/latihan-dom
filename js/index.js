var title = document.getElementById("root3");
title.style.color="blue";
var title2 = document.getElementsByClassName('root5');
var title3 = document.getElementById("root6");

title.innerHTML = "Belajar DOM";
title2[0].innerHTML = "Belajar DOM 2";
title3.innerHTML = "Belajar DOM 3";
// title2.style.color="blue";
console.log(title2.innerHTML);
function showAlert() {
    alert('clicked')
}
const button = document.getElementById('btn-event');
button.addEventListener('click',(a) => {showAlert()});
