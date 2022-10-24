document.getElementById("arrow-left").onclick = () => {
  let img = document.querySelector(".images");
  let imgStyleRight = getComputedStyle(img).right;
  if (parseInt(imgStyleRight) >= -900) {
    img.style.right = (parseInt(imgStyleRight) - 250) + "px";
  }
};

document.getElementById("arrow-right").onclick = () => {
  let img = document.querySelector(".images");
  let imgStyleRight = getComputedStyle(img).right;
  if (parseInt(imgStyleRight) <= -250) {
    img.style.right = (parseInt(imgStyleRight) + 250) + "px";
  }
};