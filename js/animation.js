gsap.from("img", { opacity: 0, duration: 3 })
let tl = gsap.timeline()
tl.from("h1", { y: 20, duration: 0.5, opacity: 0 })
tl.from("h1+div", { y: 20, duration: 0.5, opacity: 0 })
tl.from("main", { y: 20, duration: 0.3, opacity: 0 })