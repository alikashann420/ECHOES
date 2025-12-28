// Navigation
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    const section = document.getElementById(id);
    section.classList.add("active");

    // Fade-in all poems in the section with stagger
    const poems = section.querySelectorAll(".poem");
    poems.forEach((p, index) => {
        p.style.opacity = "0";
        p.style.animation = `fadeInPoem 0.8s forwards`;
        p.style.animationDelay = `${index * 0.2}s`;
    });
}

// Dark/Light Mode
function toggleTheme() { document.body.classList.toggle("light"); }

// Add Poetry and Save to localStorage
function addPoetry() {
    const poemText = document.getElementById("userPoem").value.trim();
    const poetName = document.getElementById("userPoet").value.trim();
    if (!poemText) { alert("Please write some poetry!"); return; }

    const newPoem = { text: poemText, poet: poetName || "Anonymous" };
    let poems = JSON.parse(localStorage.getItem("userPoems")) || [];
    poems.push(newPoem);
    localStorage.setItem("userPoems", JSON.stringify(poems));

    displayPoetry();
    document.getElementById("userPoem").value = "";
    document.getElementById("userPoet").value = "";
}

// Display Poetry from localStorage
function displayPoetry() {
    const container = document.getElementById("poemContainer");
    container.innerHTML = "";
    const poems = JSON.parse(localStorage.getItem("userPoems")) || [];
    poems.forEach((p, index) => {
        const div = document.createElement("div");
        div.classList.add("poem", "urdu");
        div.style.opacity = "0";
        div.style.animation = `fadeInPoem 0.8s forwards`;
        div.style.animationDelay = `${index * 0.2}s`;
        div.innerHTML = `${p.text}<br><span>— ${p.poet}</span>`;
        container.appendChild(div);
    });
}
function animateIntroText() {
    const intro = document.querySelector(".intro");
    const text = intro.textContent;

    intro.innerHTML = ""; // clear

    [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animationDelay = `${i * 0.03}s`;
        intro.appendChild(span);
    });
}

// On page load
window.onload = function() {
    displayPoetry();
    animateIntroText();
};

// YouTube Search
function searchYouTube() {
    const q = document.getElementById("musicSearch").value.trim();
    if (!q) return;
    window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(q), "_blank");
}

// Rekhta Search
function searchRekhta() {
    const q = document.getElementById("rekhtaSearch").value.trim();
    if (!q) return;
    window.open("https://www.rekhta.org/search?q=" + encodeURIComponent(q), "_blank");
}
