const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

tl.from(".logo", { y: -50, opacity: 0 })
  .from(".menu", { x: 30, opacity: 0 }, "+=0.2")
  .from(".hero-title", { y: 100, opacity: 0 }, "-=0.1")
  .from(".hero-subtitle", { y: 20, opacity: 0 })
  .from(".cta-button", { scale: 0.5, opacity: 0 }, "+=0.2");
