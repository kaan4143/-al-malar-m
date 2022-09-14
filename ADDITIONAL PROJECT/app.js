//? ---Date----

let date = new Date();
let aylar = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  " Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = aylar[date.getMonth()];
let day = date.getDate();
let günler = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let gün = günler[date.getDay()];

let fullDate = gün + "," + month + " " + day;
// console.log(fullDate);

document.getElementById("date").innerText = fullDate;

//? ----------SELECT ELEMENTS-----------
const clear = document.getElementById("refresh");
const list = document.getElementById("list");
const input = document.getElementById("input");
const Add = document.getElementById("Add-todo");
const feedback = document.querySelector(".feedback");
// const circle = document.getElementById("circle");
// const trash = document.getElementById("trash");
const item = document.querySelector(".list-group-item");

const feedBack = () => {
  feedback.style.display = "inline";
  feedback.innerHTML = "Please Enter To Do Item";
};

const StopFeedback = () => {
  feedback.style.display = "none";
};

const createToDo = () => {
  const myLi = document.createElement("li");
  myLi.setAttribute("class", "list-group-item");

  if (!input.value || input.value <= 0) {
    setTimeout(feedBack, 500);
    setTimeout(StopFeedback, 2000);
  } else {
    const myCircle = document.createElement("i");
    myCircle.setAttribute("class", "fa-regular fa-circle");
    myLi.appendChild(myCircle);

    const myP = document.createElement("p");
    myP.setAttribute("class", "text");
    myP.innerHTML = input.value;
    myLi.appendChild(myP);

    const myTrash = document.createElement("i");
    myTrash.setAttribute("class", "fa-solid fa-trash-can");
    myLi.appendChild(myTrash);
    list.insertBefore(myLi, list.children[0]); //? yeni itemları listenin ilk elemanına ekler
    input.value = " ";

    myCircle.addEventListener("click", () => {
      // ! KIsa VERSİYON
      myP.classList.toggle("checked");
      // myCircle.classList.toggle("done");
      // ! Check Control
      if (myP.classList.contains("checked")) {
        myCircle.classList.remove("fa-circle");
        myCircle.classList.add("fa-circle-check");
        myCircle.classList.add("done");
      } else {
        myCircle.classList.remove("fa-circle-check");
        myCircle.classList.add("fa-circle");
        myCircle.classList.remove("done");
      }
      // !UZUN VERSİYON
      // e.target.parentElement.lastElementChild.previousElementSibling.classList.toggle(
      //   "checked"
      // );
    });
    // myCircle.addEventListener("click", () => {

    //   myCircle.setAttribute("class", "fa-solid fa-circle-check");
    //   myP.classList.toggle("checked");
    //   myCircle.classList.toggle("done");

    //   myCircle.addEventListener("click", () => {
    //     myCircle.setAttribute("class", "fa-regular fa-circle");
    //     myP.setAttribute("class", "text");

    //   });

    myTrash.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
};

//? ------Add event handler-------

Add.addEventListener("click", createToDo);
input.focus();

//?-----ENTER click-----
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    Add.click();
  }
});
//?-----------ALL DELETE--------

clear.addEventListener("click", () => {
  list.innerHTML = " ";
});
