Shery.mouseFollower();
Shery.makeMagnet(".magnet-target");
Shery.hoverWithMediaCircle(".hvr" , {
    images: ["./images/apps.jpeg", "./images/brand.jpeg", "https://tse2.mm.bing.net/th?id=OIP.SPwhnM2n-tHvzWlCnVO26QHaMI&pid=Api&P=0&h=220"],
  });

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index) {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog) {
           
                   setScroll(prog.progress+index);
            },
        });
    });
  },
});