let faqContainer = document.querySelectorAll(".faq-container");
let active = false;

faqContainer.forEach((faq) => {
  console.log(faq);
  faq.addEventListener("click", (e) => {
    toggleDisplay(e.target);
  });
});

//on click --> check if there is anything open

//if it is, and it is the target, close the target

//if it is, and it isnt the target, close the currOpen, and open the target

//if it isnt, open the target

function toggleDisplay(selected) {
  if (selected.classList.contains("active")) {
    selected.children[1].style.display = "none";
    selected.classList.remove("active");
    selected.children[0].children[1].src = "./assets/images/icon-plus.svg";
  } else {
    faqContainer.forEach((faq) => {
      if (faq.classList.contains("active")) {
        faq.children[1].style.display = "none";
        faq.classList.remove("active");
        faq.children[0].children[1].src = "./assets/images/icon-plus.svg";
        console.log("fired");
      }
    });
    selected.children[1].style.display = "block";
    selected.classList.add("active");
    selected.children[0].children[1].src = "./assets/images/icon-minus.svg";
  }
}
