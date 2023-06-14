gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

gsap.fromTo('.hero__content', { backgroundPosition: '1px 0' }, {
	backgroundPosition: 'calc(var(--index)*20) 0', scrollTrigger: {
			trigger: '.hero__content',
			scrub: true
	}
})

gsap.fromTo('.rotateImage', { rotation: 0 }, {
	rotation: 360, scrollTrigger: {
			trigger: 'rotateImage',
			scrub: true
	}
})

let burgerMenu = document.getElementById('bm'),
		bg         = document.getElementById('bgmb'),
    ifBurger   = false

function burgerOpen() {
	if (ifBurger == false) {
		burgerMenu.style = 'left: 0px;'
		bg.style         = 'visibility: visible; opacity:1;'
		ifBurger = true
	} else {
		burgerMenu.style = 'left: -100%;'
		bg.style         = 'visibility: hidden; opacity:0;'
		ifBurger = false
	}
}
