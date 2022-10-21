const prefixes = ["eye", "turkey", "hand", "phone", "triforce"];

const clearIconsAndPages = () => {
  prefixes.forEach((prefix) => {
    document.getElementById(prefix + "-black").style.display = "none";
    document.getElementById(prefix + "-white").style.display = "block";
    document.getElementById(prefix + "-page").style.display = "none";
  });
};

prefixes.forEach((prefix) => {
  document.getElementById(prefix + "-white").onclick = () => {
    clearIconsAndPages();
    document.getElementById(prefix + "-white").style.display = "none";
    document.getElementById(prefix + "-black").style.display = "block";
    document.getElementById(prefix + "-page").style.display = "block";
  };
});
