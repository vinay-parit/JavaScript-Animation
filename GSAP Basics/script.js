// let box = document.querySelector(".box")
// gsap.to(box, {
//     rotate:360,
//     borderRadius:"50%",
//     duration:2,
//     delay:1,
//     x:1200,
//     scale:3
// })

// gsap.from(box, {
//   rotate: 360,
//   borderRadius: "50%",
//   duration: 2,
//   delay: 1,
//   x: 1200,
// });

// gsap.to(box, {
//   duration: 2,
//   x: 400,
//   y: 400,
//   backgroundColor: "purple",
//   rotation: 45,
//   ease: "power2.inOut",
// });

//when we select multiple elements we use stagger property of gsap
// let headings = document.querySelectorAll("h2");
// gsap.to(headings, {
//   duration: 1.5,
//   opacity: 0.4,
//   y: 30,
//   x:50,
//   stagger: .2,
//   ease: "back.out(1.7)",
//   fontSize:"3rem",
// });


// const button = document.querySelector('.cta-button');
// button.addEventListener('mouseenter', () => {
//     gsap.to(button, {
//         duration: 0.3,
//         scale: 1.1,
//         backgroundColor: "#ff6b6b",
//         ease: "power1.out"
//     });
// });
// button.addEventListener('mouseleave', () => {
//     gsap.to(button, {
//         duration: 0.3,
//         scale: 1,
//         backgroundColor: "#4d4dff",
//         ease: "power1.out"
//     });
// });



// Code Subtle's split text animation
const title = document.querySelector('.split-text');
const characters = title.textContent.split("");
title.innerHTML = "";

characters.forEach(char => {
    title.innerHTML += `<span>${char}</span>`;
});

const spans = title.querySelectorAll('span');
gsap.from(spans, {
    duration: 0.5,
    opacity: 0.1,
    y: 20,
    rotationX: 180,
    stagger: 0.3,
    ease: "power1.out",
    fontSize:"3rem",
    fontStyle:"italic"
});
