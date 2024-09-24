// Party Popper Animation
const partyPopper = new rive.Rive({
  src: "assets/riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});

// Party Popper Animation
const partyPopper2 = new rive.Rive({
  src: "assets/riv/partyPopper.riv",
  canvas: document.getElementById("partyPopper2"),
  autoplay: true,
  stateMachines: "State Machine 1",
  onLoad: () => {
    partyPopper.resizeDrawingSurfaceToCanvas();
  },
});
