smoothScroll();











const sections = [...document.querySelectorAll(".parallax-section")];

sections.forEach(section =>{
    const img = section.querySelector("img");

    gsap.fromTo(
      img,
      {
        yPercent: -30,
      },
      {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            Trigger: section,
            markers: true, 
            scrub: true,
        }
      }
    );
})







function smoothScroll() {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}