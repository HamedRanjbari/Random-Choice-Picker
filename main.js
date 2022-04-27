let $ = document;
let input = $.getElementById("input");
let choices = $.querySelector(".choices");
let reloadBtn = $.querySelector(".reload-btn");

input.focus()

input.addEventListener("keyup", (e) => {
  createPara(e.target.value)
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10);
    randomChoice();
  }
})

reloadBtn.addEventListener("click", () => {
  location.reload()
})

function createPara(text) {
  let paras = text.split(",").filter(para => para.trim() !== "").map(para => para.trim())
  
  choices.innerHTML = "";

  paras.forEach(para => {
    let paraElem = $.createElement("span")
    paraElem.innerHTML = para
    choices.appendChild(paraElem)
    paraElem.classList.add("tag")
  })
}

function randomChoice() {
  let time = 50

  let interval = setInterval(() => {
    let randomSpan = pickRandomSpan()
    highlight(randomSpan)

    setTimeout(() => {
      removeHighlight(randomSpan)
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      let randomElem = pickRandomSpan()
      highlight(randomElem)
    }, 100);
  }, time * 100);
}

function pickRandomSpan() {
  let spans = $.querySelectorAll(".tag")
  return spans[Math.floor(Math.random() * spans.length)]
}

function highlight(tag) {
  tag.classList.add("highlight")
}
function removeHighlight(tag) {
  tag.classList.remove("highlight")
}