let megaMenu = document.querySelector(".mega-menu");
let otherLinks = document.querySelector("#other-links")


otherLinks.addEventListener('click', function (e) {
    megaMenu.classList.add("active");
    e.preventDefault();
});

let skills = document.querySelector(".skills")
let spans = document.querySelectorAll(".progress span");


function animationProgress() {
    if (window.scrollY >= skills.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

let stats = document.querySelector(".states")
let number = document.querySelectorAll(".box .number")
let started = false;


function startCount(el) {
    let goal = el.dataset.goal;
    let Interval = parseInt(2000);
    let duration = Interval / goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, duration)
}

function checkStartCounting() {
    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            number.forEach((numbers) => startCount(numbers))
        }
        started = true;
    }
}

window.onscroll = function () {
    animationProgress();
    checkStartCounting();
}