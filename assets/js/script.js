(function() {
	let fadeInRight = ['animate__animated', 'animate__slideInRight']
	let fadeInLeft = ['animate__animated', 'animate__slideInLeft']

	const elementsToObserve = document.querySelectorAll('#about_section, #backers, #services, #contact, #core, #tms, #apps')
	window.addEventListener('DOMContentLoaded', (e) => {
		window.IntersectionObserver !== undefined && assignIntialProps()
	})

	function assignIntialProps() {
		const observer = new IntersectionObserver(showElements,
			{root: null, rootMargin: '0px', threshold: .4}
		)
		Array.from(elementsToObserve).forEach(e => {
			e.style.visibility = 'hidden'
			e.style.opacity = 0
			observer.observe(e)
		})
		
	};
	function showElements(arr) {
		arr.forEach((observed, i) => {

			if (observed.isIntersecting) {
				observed.target.style.visibility = 'visible'
				observed.target.style.opacity = '1'

				switch (observed.target.id) {
					case 'about_section':
						assignClassnames(observed.target.querySelector('#about_text'), fadeInLeft)
						assignClassnames(observed.target.querySelector('#img'), fadeInRight)
					return
					case 'contact':
						assignClassnames(observed.target.querySelector('#form_wrap'), fadeInLeft)
						assignClassnames(observed.target.querySelector('#conpany_contact'), fadeInRight)
					return
					default :
						assignClassnames(observed.target, ['animate__animated', 'animate__fadeInUp'])
				}
			}
		})
	}
	function assignClassnames(ele, classnames) {
		classnames.forEach(name => ele.classList.add(name))
	}

})()