function showFon() {
  document.getElementById("fullscreen").style.display = "block";
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  let date = new Date();

  document.getElementById("fullscreen_date").innerHTML =
    date.getDate() +
    ":" +
    (date.getMonth() + (+1) )  +
    ":" +
    date.getFullYear() +
    "<br>" +
    date.getHours() +
    ":" +
    date.getMinutes();

  document
    .getElementById("fullscreen")
    .addEventListener("click", function (event) {
      document.getElementById("fullscreen").style.display = "none";
      document.getElementsByTagName("html")[0].style.overflow = "visible";
      temp = false;
    });
  setInterval(check(), 1000);
}


