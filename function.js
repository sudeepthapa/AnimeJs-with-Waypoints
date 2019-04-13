document.addEventListener('DOMContentLoaded', () => {
	let waypoint = new Waypoint({
	  element: document.querySelector('#sec3'),
	  handler: function() {
			anime({
				targets: '#sec3',
				easing: 'easeOutExpo',
				translateX: [-100, 0],
				opacity: [0, 1],
				delay: 300,
			})
	  },
		offset: '100%',
	})
});
anime({
	targets: ["#section1 h1","#section2 h1","#section4 h1",],
	opacity: [0, 1],
	rotate: [90, 0],
	duration: 2000,
	loop: true
});



