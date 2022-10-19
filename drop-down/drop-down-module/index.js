exports.dropdown = (title, contents) => {
  window.document.getElementById(title).onclick = () => {
    const menu = window.document.getElementById(contents);
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };
};
