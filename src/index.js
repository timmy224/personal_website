import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resume from "./assets/TimmyEng_Resume.pdf";

import "./style/main.scss";

$(document).ready(() => {
  // scroll
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
  $(".skills-btn").on("click", (event) => {
    let el = event.target.querySelector("i");
    if ($(el).hasClass("fa-chevron-up")) {
      $(el).removeClass("fa-chevron-up");
      $(el).addClass(" fa-chevron-down");
    } else {
      $(el).removeClass("fa-chevron-down");
      $(el).addClass(" fa-chevron-up");
    }
    //$(el).toggleClass("fa-chevron-up fa-chevron-down");
    $("[id$=target]").removeClass("skills-border");
  });
  
  // adding resume to html
  function addResume(pdf) {
    if (!pdf) return;
  
    const resumeButton = document.querySelector(".cta-btn--resume");
    resumeButton.setAttribute("href", pdf);
  }
  
  initSr();
  initTilt();
  addResume(resume);

});


