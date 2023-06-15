// var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
  
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
    
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
      
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });

// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log('entry.isIntersecting', entry.target.id);

			document.querySelectorAll('.header-button').forEach((link) => {
				link.classList.toggle(
						'button-active',
						link.getAttribute('href').replace('#','') === entry.target.id,
					)
			})
		}
	})
}, {
	threshold: 0.7,
})

document.querySelectorAll('.section').forEach((section) => {
	observer.observe(section);
})

document.querySelector('.bottom').addEventListener('click', (event) => {
	if (event.target.classList.contains('header-button')) {
		event.preventDefault();

		const id = event.target.getAttribute('href').replace('#','');

		window.scrollTo({
			top: document.getElementById(id).offsetTop,
			behavior: 'smooth',
		})
	}
})