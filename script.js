var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 14);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.open("index.html","_self")
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} 