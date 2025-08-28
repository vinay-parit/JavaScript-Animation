let t1 = gsap.timeline();
t1.to("#box1", {
  x: 1000,
  duration: 2,
  rotate: 360,
  backgroundColor: "white",
  border: "2px solid black",
  ease: "power2.inOut",
});
t1.to("#box2", {
  x: 1000,
  duration: 2,
  rotate: 360,
  backgroundColor: "grey",
  ease: "power2.inOut",
});
t1.to("#box3", {
  x: 1000,
  duration: 2,
  rotate: 360,
  backgroundColor: "black",
  ease: "power2.inOut",
});
