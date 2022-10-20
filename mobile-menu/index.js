const clearIcons = () => {
  document.getElementById("eye-black").style.display = "none";
  document.getElementById("eye-white").style.display = "block";
  document.getElementById("turkey-black").style.display = "none";
  document.getElementById("turkey-white").style.display = "block";
  document.getElementById("hand-black").style.display = "none";
  document.getElementById("hand-white").style.display = "block";
  document.getElementById("phone-black").style.display = "none";
  document.getElementById("phone-white").style.display = "block";
  document.getElementById("triforce-black").style.display = "none";
  document.getElementById("triforce-white").style.display = "block";
}

const eyeWhite = document.getElementById("eye-white");
const eyeBlack = document.getElementById("eye-black");
eyeWhite.onclick = () => {
  clearIcons();
  eyeWhite.style.display = "none";
  eyeBlack.style.display = "block";
}

const turkeyWhite = document.getElementById("turkey-white");
const turkeyBlack = document.getElementById("turkey-black");
turkeyWhite.onclick = () => {
  clearIcons();
  turkeyWhite.style.display = "none";
  turkeyBlack.style.display = "block";
}

const handWhite = document.getElementById("hand-white");
const handBlack = document.getElementById("hand-black");
handWhite.onclick = () => {
  clearIcons();
  handWhite.style.display = "none";
  handBlack.style.display = "block";
}

const phoneWhite = document.getElementById("phone-white");
const phoneBlack = document.getElementById("phone-black");
phoneWhite.onclick = () => {
  clearIcons();
  phoneWhite.style.display = "none";
  phoneBlack.style.display = "block";
}

const triforceWhite = document.getElementById("triforce-white");
const triforceBlack = document.getElementById("triforce-black");
triforceWhite.onclick = () => {
  clearIcons();
  triforceWhite.style.display = "none";
  triforceBlack.style.display = "block";
}
