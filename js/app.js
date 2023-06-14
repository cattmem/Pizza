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

