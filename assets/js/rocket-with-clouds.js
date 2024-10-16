$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var ww = window.innerWidth;
  var noSlides = $(".section").length;
  var slideWidth = $(".section").width();
  var slideContainerWidth = slideWidth * noSlides - ww;

  // Horizontal scroll animation for sections
  var actionHorizontal = new TimelineMax().to("#slideContainer", 1, {
    x: -slideContainerWidth,
  });

  var horizontal = createHorizontal();
  gsap.set(
    [
      ".heading-1",
      ".heading-2",
      ".icon-container",
      ".heading-3",
      ".heading-4",
      ".icon-container-2",
      ".heading-5",
      ".icon-container-3",
    ],
    { opacity: 0, y: 20 }
  );

  function createHorizontal() {
    return new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: 0,
      duration: slideContainerWidth,
    })
      .setPin("#js-wrapper")
      .setTween(actionHorizontal)
      .addTo(controller);
  }

  // SVG Line Animation: Trigger when half of the section is visible
  var svgAnimation = new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: 0.5,
    duration: slideContainerWidth,
  })
    .on("progress", function (e) {
      var progress = e.progress * 0.3;
      var dashArray = progress * 4 + ", 1";
      $(".svg-line path").attr("stroke-dasharray", dashArray);
      var progressbar = e.progress.toFixed(2);

      // Trigger animations based on the progress value
      if (progressbar >= 0.12) {
        gsap.to(".heading-1", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.18) {
        gsap.to(".heading-2", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.24) {
        gsap.to(".icon-container", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.29) {
        gsap.to(".heading-3", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.41) {
        gsap.to(".heading-4", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.48) {
        gsap.to(".icon-container-2", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.63) {
        gsap.to(".heading-5", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (progressbar >= 0.69) {
        gsap.to(".icon-container-3", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      // Check if progress is at 1.0 to add the id="prev-div"
      if (progressbar >= 1.0) {
        $("#js-wrapper").attr("id", "prev-div");
        startRocketAnimation();
      }
    })
    .addTo(controller);

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: newpos,
        autoKill: true,
      },
      ease: Power3.easeOut,
    });
  });

  // Adjust on window resize
  $(window).resize(function () {
    ww = window.innerWidth;
    slideContainerWidth = slideWidth * noSlides - ww;
    horizontal.destroy(true);
    horizontal = createHorizontal();
    svgAnimation.duration(slideContainerWidth);
  });

  // Smooth scroll to anchor links
  $(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    var $targetPos = $(id).offset().top;
    var targetPos = $targetPos + $(id).offset().left - window.innerWidth / 2;
    if ($(id).length > 0) {
      e.preventDefault();
      controller.scrollTo(targetPos);
    }
  });

  // Function to start the rocket animation
  function startRocketAnimation() {
    let layout = new rive.Layout({
      fit: rive.Fit.Fill,
    });
    const rocket = new rive.Rive({
      src: "./assets/riv/rocket.riv",
      canvas: document.getElementById("rocket"),
      autoplay: true,
      onLoad: () => {
        rocket.resizeDrawingSurfaceToCanvas();
      },
    });

    window.addEventListener("scroll", handleRocketScroll);

    function handleRocketScroll() {
      let rocketDiv = document.getElementById("rocket-div");
      let prevDiv = document.getElementById("prev-div");
      let rocketDivRect = rocketDiv.getBoundingClientRect();

      if (rocketDivRect.top < window.innerHeight && rocketDivRect.bottom > 0) {
        rocketDiv.style.position = "sticky";
        prevDiv.style.position = "fixed";

        // Remove fixed position once the rocket touches the top of the viewport
        if (rocketDivRect.top <= 0) {
          prevDiv.style.position = "fixed";
          $("#js-wrapper").css("position", "fixed");
          // horizontalScene.removePin();
          window.removeEventListener("scroll", handleRocketScroll);
        }
      } else {
        // Reset styles if rocket is out of view
        prevDiv.style.transform = "scale(1)";
      }
    }
  }
});
