document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".teams-card"); // Use querySelectorAll to select multiple cards

  cards.forEach((card) => {
    const circle = card.querySelector(".bouncing-circle");
    const image = card.querySelector(".card-image"); // Ensure each card has its own image
    let bouncing = false;

    function startBouncing() {
      if (bouncing) return;
      bouncing = true;
      const cardWidth = card.offsetWidth;

      const positionsArrays = [
        [
          { top: "100px", left: "0px" },
          { top: "300px", left: "0px" },
          { top: "300px", left: `${cardWidth - 40}px` },
        ],
        [
          { top: "300px", left: "120px" },
          { top: "100px", left: "0px" },
          { top: "300px", left: "0px" },
        ],
        [
          { top: "100px", left: "0px" },
          { top: "300px", left: `${cardWidth - 40}px` },
          { top: "300px", left: "120px" },
        ],
        [
          { top: "300px", left: "120px" },
          { top: "100px", left: "0px" },
          { top: "300px", left: "160px" },
        ],
      ];

      function getRandomPositionsArray() {
        const randomIndex = Math.floor(Math.random() * positionsArrays.length);
        return positionsArrays[randomIndex];
      }

      let bounceCount = 0;
      const maxBounces = 2;
      const bounceDuration = 500;
      let currentImageIndex = 0; // To track image changes

      function changeImage() {
        // Array of image URLs or sources
        const images = ["assets/img/1.png", "assets/img/2.png"];
        // Change the image source
        image.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
      }

      function bounce() {
        const positions = getRandomPositionsArray();
        const nextPosition = positions[bounceCount % positions.length];

        // Change the image when the position changes
        changeImage();

        circle.style.transition = `top ${bounceDuration}ms, left ${bounceDuration}ms`;
        circle.style.top = nextPosition.top;
        circle.style.left = nextPosition.left;

        bounceCount++;
        if (bounceCount < maxBounces * positions.length) {
          setTimeout(bounce, bounceDuration);
        } else {
          setTimeout(() => {
            bouncing = false;
            circle.style.transition = "none";
          }, bounceDuration);
        }
      }

      bounce();
    }

    card.addEventListener("mousemove", startBouncing);
  });
});
