// Intro Screen Auto Hide
window.onload = function() {
    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }, 4000);
};

// Flip card only when heart is clicked
document.querySelector(".heart-btn").addEventListener("click", function(e) {
    e.stopPropagation();
    document.getElementById("card").classList.toggle("open");
});

// Flowing background hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);

// Surprise burst
function showSurprise() {
    document.getElementById("surpriseMessage").style.display = "block";

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💘";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.animationDuration = "2s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
