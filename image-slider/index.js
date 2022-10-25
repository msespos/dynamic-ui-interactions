const slideImg = (img, imgStyleRight, index) => {
  if (index === 0) {
    if (parseInt(imgStyleRight) > -751) {
      const imgStyleRightShifted = (parseInt(imgStyleRight) - 250) + "px";
      img.style.right = imgStyleRightShifted;
      clearCircleBackgrounds();
      const currentCircle = circles[startingPoints.indexOf(imgStyleRightShifted)];
      document.getElementById(currentCircle).style.backgroundColor = "gray";
    }
  } else if (index === 1) {
    if (parseInt(imgStyleRight) < 0) {
      const imgStyleRightShifted = (parseInt(imgStyleRight) + 250) + "px";
      img.style.right = imgStyleRightShifted;
      clearCircleBackgrounds();
      const currentCircle = circles[startingPoints.indexOf(imgStyleRightShifted)];
      document.getElementById(currentCircle).style.backgroundColor = "gray";
    }
  }
}

const arrows = ["arrow-left", "arrow-right"];

arrows.forEach((arrow, index) => {
  document.getElementById(arrow).onclick = () => {
    document.querySelector(".images").style.transition = "right 0.75s linear";
    let img = document.querySelector(".images");
    let imgStyleRight = getComputedStyle(img).right;
    slideImg(img, imgStyleRight, index);
  };
});

const clearCircleBackgrounds = () => {
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.style.backgroundColor = "lightgray";
  });
};

const circles = ["first-circle", "second-circle", "third-circle",
                 "fourth-circle", "fifth-circle"];
const startingPoints = ["-1000px", "-750px", "-500px", "-250px", "0px"];

circles.forEach((circle, index) => {
  document.getElementById(circle).onclick = () => {
    document.querySelector(".images").style.transition = "none";
    document.querySelector(".images").style.right = startingPoints[index];
    clearCircleBackgrounds();
    document.getElementById(circle).style.backgroundColor = "gray";
  };
});
