let splash = document.querySelector(".splash");
let main = document.querySelector(".main");
let magnet = document.querySelector(".mouse-magnet")

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  const x = e.clientX;
  const y = e.clientY;

  magnet.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});


gsap.to(splash, {
  x: "-100%", // slide out to the left
  duration: 2.5, // animation duration
  delay: 1,
  ease: "power2.inOut", // smooth easing
  onComplete: () => {
    splash.style.display = "none"; // hide splash after animation
    gsap.fromTo(
      main,
      { opacity: 0 }, // start invisible
      {
        opacity: 1, // fade in
        duration: 1,
        display: "block", // make visible smoothly
        ease: "power2.inOut",
      }
    );
  },
});

