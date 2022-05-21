/* Custom Checkbox Interactivity */

var checkbox = document.querySelectorAll(".recipe__ingredients--checkbox");

checkbox.forEach(function (box) {
  box.addEventListener("click", function () {
    var cb = box.firstElementChild;
    if (cb.checked === true) {
      cb.checked = false;
    } else {
      cb.checked = true;
    }
  });
});
