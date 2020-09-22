const bntsprog = document.querySelectorAll(".btnsprog");
const box = document.querySelector(".box");
for (let i = 0; i < bntsprog.length; i++) {
    bntsprog[i].addEventListener("click", function () {
        box.style.background = this.getAttribute("data-color");

    })
}


