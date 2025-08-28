gsap.from(".box", {
  x: 300,
  rotation: 360,
  duration: 5,
  scrollTrigger: {
    trigger: ".animated-box",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});
