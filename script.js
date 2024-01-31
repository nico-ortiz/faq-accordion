const list = document.querySelectorAll(".ans-ques-container");

list.forEach((item) => {
    let question = item.querySelector(".questions");
    question.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});