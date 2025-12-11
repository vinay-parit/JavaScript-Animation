import Lenis from "lenis"
import gsap from "gsap"

// import ( ScrollTrigger ) from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const rows = document.querySelectorAll(".row")

rows.forEach((row,index) =>{
 const images = row.querySelectorAll("img")
    
    images.forEach((image, index)=>{
        image.style.transformOrigin = `${index % 2 === 0 ? "right top" : "left top"}`    
    })

    gsap.set(images, {
        scale: 0,
    })

    ScrollTrigger.create({
        trigger: row,
        start: "top 100%",
        end: "bottom bottom",
        markers: true,
        onUpdate: self =>{
            gsap.set(images, {scale: self.progress})
        }
    })


     ScrollTrigger.create({
       trigger: row,
       start: "top 0%",
       end: "bottom top",
       pin: true,
       pinSpacing: false,
       markers: true,
       onUpdate: (self) => {
         gsap.set(images, { scale: 1- self.progress });
       },
     });
})
