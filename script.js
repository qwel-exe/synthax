const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let isAnimating = false;

document.querySelectorAll("#hacked").forEach((h1Element) => {
  h1Element.addEventListener("mouseover", (event) => {
    if (!isAnimating) {
      isAnimating = true;
      const h1Elements = document.querySelectorAll("#hacked");
      let maxLength = 0;

      h1Elements.forEach((h1) => {
        if (h1.dataset.value.length > maxLength) {
          maxLength = h1.dataset.value.length;
        }
      });

      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        h1Elements.forEach((h1) => {
          h1.innerText = h1.dataset.value.slice(0, iteration);

          for (let i = iteration; i < maxLength; i++) {
            h1.innerText += letters[Math.floor(Math.random() * 26)];
          }
        });

        if (iteration >= maxLength) {
          clearInterval(interval);
          isAnimating = false;

          // Remove color changes after a delay (e.g., 500ms)
          setTimeout(() => {
            h1Elements.forEach((h1) => {
              h1.style.backgroundColor = "transparent";
              h1.style.color = "white";
            });
          }, 500); // Adjust the delay as needed
        }

        iteration += 1 / 3;
      }, 30);

      h1Elements.forEach((h1) => {
        h1.style.backgroundColor = "white";
        h1.style.color = "black";
      });
    }
  });
});


//main.js file

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
