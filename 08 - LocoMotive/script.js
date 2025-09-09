gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".locomotive" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".locomotive", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".locomotive").style.transform
    ? "transform"
    : "fixed",
});





gsap.to(".page1 .box", {
    duration:2,
    delay:1,
    scale:1.4,
    rotate:360,
    borderRadius:"50%",
})


gsap.to(".page2 .box", {
  scale: 1.4,
  rotate: 360,
  borderRadius: "50%",
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:".locomotive",
    start:"top 20%",
    end:"top 0%",
    scrub:2,
    markers:true,
    pin:true
  }
});
