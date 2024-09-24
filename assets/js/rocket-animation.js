gsap.registerPlugin(ScrollTrigger);

const rocketTimelineLarge = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top top",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

rocketTimelineLarge.to(".realezi-rocket", {
  x: 2050,
  y: 500,
  rotation: 120,
});
