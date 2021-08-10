import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resume from "./assets/TimmyEng_Resume.pdf";

import "./style/main.scss";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      500
    );
  }
});

// remove white border for mobile view skills click
$(".skills-btn").on("click", () => {
  $("[id$=target]").removeClass("skills-border");
});

function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

initSr();
initTilt();

addResume(resume);
