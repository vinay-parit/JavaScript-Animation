gsap.to(".page1 .circle", {
  rotate: 360,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".page1 .circle",
    // markers:true,
    // scroller hamesha body rahega
    scroller: "body",
    start: "top 0%",
    end: "top 80%",
    pin: true,
    scrub: 5,
  },
});

gsap.to(".page2 .circle", {
  rotate: 360,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".page2 .circle",
    // markers:true,
    // scroller hamesha body rahega
    scroller: "body",
    start: "top 30%",
    end: "top 80%",
    pin: true,
    scrub: 5,
  },
});


gsap.to(".page3 .circle", {
  rotate: 360,
  scale: 0.5,
  scrollTrigger: {
    trigger: ".page3 .circle",
    // markers:true,
    // scroller hamesha body rahega
    scroller: "body",
    start: "top 50%",
    end: "top 30%",
    pin: true,
    scrub: 5,
  },
});