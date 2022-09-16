const textareaEl = document.getElementById("textarea");

//içine yazılan karakterleri takip edeceğiz
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

//updateCounter Function "total counter" and "remaining counter"
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
