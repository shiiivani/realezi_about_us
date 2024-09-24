// Play store Buttons
document.addEventListener("DOMContentLoaded", function () {
  // Handle all Google Play Buttons
  const googlePlayButtons = document.querySelectorAll(".googlePlay-button");
  const googlePlayOriginalText1 = "Download from";
  const googlePlayOriginalText2 = "Google Play";

  googlePlayButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const googlePlayText1 = button.querySelector(".text-1");
      const googlePlayText2 = button.querySelector(".text-2");
      const googlePlayIcon = button.querySelector(".icon");

      googlePlayText1.textContent = "Launching";
      googlePlayText2.textContent = "Soon";
      googlePlayText1.classList.add("launch-text");
      googlePlayText2.classList.add("soon-text");
      googlePlayIcon.style.display = "none";

      setTimeout(function () {
        googlePlayText1.textContent = googlePlayOriginalText1;
        googlePlayText2.textContent = googlePlayOriginalText2;
        googlePlayText1.classList.remove("launch-text");
        googlePlayText2.classList.remove("soon-text");
        googlePlayIcon.style.display = "";
      }, 3000);
    });
  });

  // Handle all App Store Buttons
  const appstoreButtons = document.querySelectorAll(".appstore-button");
  const appstoreOriginalText1 = "Download from";
  const appstoreOriginalText2 = "App Store";

  appstoreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const appstoreText1 = button.querySelector(".text-1");
      const appstoreText2 = button.querySelector(".text-2");
      const appstoreIcon = button.querySelector(".icon");

      appstoreText1.textContent = "Launching";
      appstoreText2.textContent = "Soon";
      appstoreText1.classList.add("launch-text");
      appstoreText2.classList.add("soon-text");
      appstoreIcon.style.display = "none";

      setTimeout(function () {
        appstoreText1.textContent = appstoreOriginalText1;
        appstoreText2.textContent = appstoreOriginalText2;
        appstoreText1.classList.remove("launch-text");
        appstoreText2.classList.remove("soon-text");
        appstoreIcon.style.display = "";
      }, 3000);
    });
  });
});

// Expanding Footers
document.addEventListener("DOMContentLoaded", function () {
  const columnHeaders = document.querySelectorAll(".columns h4");

  columnHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      console.log("clicked");
      const ulElement = this.closest(".columns div").querySelector("ul");
      const svg = this.closest(".columns div h4").querySelector("svg");

      ulElement.classList.toggle("active");

      if (svg) {
        svg.classList.toggle("rotated");
      }
    });
  });
});
