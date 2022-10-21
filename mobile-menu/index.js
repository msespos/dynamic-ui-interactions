const iconPrefixes = ["eye", "turkey", "hand", "phone", "triforce"];

const clearIcons = () => {
  iconPrefixes.forEach((prefix) => {
    document.getElementById(prefix + "-black").style.display = "none";
    document.getElementById(prefix + "-white").style.display = "block";
  });
};

iconPrefixes.forEach((prefix) => {
  document.getElementById(prefix + "-white").onclick = () => {
    clearIcons();
    document.getElementById(prefix + "-white").style.display = "none";
    document.getElementById(prefix + "-black").style.display = "block";
  };
});
