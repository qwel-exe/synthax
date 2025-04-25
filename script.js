var faq = document.getElementsByClassName("faq-page");

var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */


    /* Toggle between hiding and showing the active panel */

    var body = this.nextElementSibling;

    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

const countdown = () => {
  const eventDate = new Date("2025-11-02T00:00:00");

  const timer = setInterval(() => {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Event Started!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
};

window.onload = countdown;

const timestamp = Date.now(); // or use a hardcoded version like 'v4'

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "style.css?v=" + timestamp;
document.head.appendChild(css);

const js = document.createElement("script");
js.src = "script.js?v=" + timestamp;
document.body.appendChild(js);