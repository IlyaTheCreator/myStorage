const block = document.querySelector(".round");

document.querySelector("#changeCSSf").addEventListener("click", function() {
  block.classList.add("first-style");
  block.classList.remove("second-style");
});

document.querySelector("#changeCSSs").addEventListener("click", function() {
  block.classList.add("second-style");
});
