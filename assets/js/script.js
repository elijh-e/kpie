(function() {
	const elementsToObserve = document.querySelectorAll('#about_section, #backers, #services, #core, #tms, #apps')
	window.addEventListener('DOMContentLoaded', (e) => {
		window.IntersectionObserver !== undefined && assignIntialProps()
	})

	function assignIntialProps() {
		const observer = new IntersectionObserver(showElements,
			{root: null, rootMargin: '0px', threshold: .2}
		)
		Array.from(elementsToObserve).forEach(e => {
			e.style.visibility = 'hidden'
			e.style.opacity = 0
			observer.observe(e)
		})
		
	};
	function showElements(arr) {
		arr.forEach((observed, i) => {
			console.log(observed.target.querySelector('div:first-child'))
			if (observed.isIntersecting) {
				observed.target.style.visibility = 'visible'
				observed.target.style.opacity = '1'
				assignClassnames(observed.target, ['animate__animated', 'animate__fadeInUp'])
			}
		})
	}
	function assignClassnames(ele, classnames) {
		classnames.forEach(name => ele.classList.add(name))
	}

})()