const word = document.getElementById("word");
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    word.textContent = data.puzzle.toUpperCase();
  } else if (e.target.readyState === 4) {
    console.log("Wrong");
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=1");
request.send();
