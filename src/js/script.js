const masonryInit = () => {
	const gallery = document.querySelector('.gallery')
	const masonry = new Masonry(gallery, {
		itemSelector: '.gallery-item',
		columnWidth: '.gallery-sizer',
		percentPosition: true,
		gutter: '.gallery-gutter',
	})
}
const dropdownsInit = () => {
	const offerSection = document.querySelector('#offer')
	const dropdownList = document.querySelectorAll('.dropdown')
	dropdownList.forEach(item => {
		const dropdownBtn = item.querySelector('.dropdown-btn')
		const dropdownMenu = item.querySelector('.dropdown-menu')
		const dropdownItems = dropdownMenu.querySelectorAll('a')
		dropdownBtn.addEventListener('click', () => {
			dropdownMenu.classList.toggle('hidden')
		})
		dropdownItems.forEach(item => {
			item.addEventListener('click', () => {
				dropdownMenu.classList.add('hidden')
				const card = offerSection.querySelector(`[data-id='${item.dataset.id}']`)
				card.classList.add('focus-card')
				setTimeout(() => {
					card.classList.remove('focus-card')
				}, 5000)
			})
		})
	})
}

const handleFullScreen = btn => {
	if (btn.firstChild.classList.contains('ti-arrows-maximize')) {
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen()
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen()
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen()
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen()
		}
		btn.firstChild.classList.replace('ti-arrows-maximize', 'ti-arrows-minimize')
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen()
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen()
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen()
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen()
		}
		btn.firstChild.classList.replace('ti-arrows-minimize', 'ti-arrows-maximize')
	}
}

const handleFolding = () => {
	const gallery = document.querySelector('.gallery')
	const galleryFilter = gallery.querySelector('.gallery-filter')
	const expandBtn = gallery.querySelector('.expand')
	const expandBtnIcon = expandBtn.querySelector('img')

	expandBtn.addEventListener('click', () => {
		gallery.classList.toggle('h-limit')
		galleryFilter.classList.toggle('opacity-0')
		expandBtn.classList.toggle('bg-impure-white')
		expandBtnIcon.classList.toggle('rotate-180')
		if (!gallery.classList.contains('h-limit')) {
			expandBtn.firstChild.textContent = 'Zwiń'
		} else {
			expandBtn.firstChild.textContent = 'Rozwiń'
		}
	})
}

window.onload = () => {
	AOS.init()
	masonryInit()
	// dropdownsInit()
	handleFolding()
	// const chevronLeft = document.querySelector('.chevron-left')
	// const chevronRight = document.querySelector('.chevron-right')
	// const photoView = document.querySelector('.photo-view')
	// const photoViewScreen = photoView.querySelector('.photo-view-screen')
	// const galleryItems = document.querySelectorAll('.gallery .gallery-item')
	// const fullScreenPhotoViewBtn = photoView.querySelector('.full-screen')
	// const exitPhotoViewBtn = photoView.querySelector('.exit')
	// const photoViewCounter = photoView.querySelector('.photo-view-counter')
	// const photoCount = galleryItems.length
	// galleryItems.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		const photoSrc = item.querySelector('img').attributes.getNamedItem('src').value
	// 		let photoIndex = Number(photoSrc.match(/photo(\d+)\.jpg/)[1])
	// 		document.body.classList.add('overflow-hidden')
	// 		photoView.classList.remove('hidden')
	// 		photoViewScreen.setAttribute('src', photoSrc)
	// 		photoViewCounter.textContent = `${photoIndex} / ${photoCount}`
	// 		chevronLeft.addEventListener('click', () => {
	// 			photoIndex = photoIndex === 1 ? photoCount : photoIndex - 1
	// 			photoViewScreen.setAttribute('src', `./img/photo${photoIndex}.jpg`)
	// 			photoViewCounter.textContent = `${photoIndex} / ${photoCount}`
	// 		})
	// 		chevronRight.addEventListener('click', () => {
	// 			photoIndex = photoIndex === photoCount ? 1 : photoIndex + 1
	// 			photoViewScreen.setAttribute('src', `./img/photo${photoIndex}.jpg`)
	// 			photoViewCounter.textContent = `${photoIndex} / ${photoCount}`
	// 		})
	// 	})
	// })
	// exitPhotoViewBtn.addEventListener('click', () => {
	// 	document.body.classList.remove('overflow-hidden')
	// 	photoView.classList.add('hidden')
	// 	if (fullScreenPhotoViewBtn.firstChild.classList.contains('ti-arrows-minimize')) {
	// 		handleFullScreen(fullScreenPhotoViewBtn)
	// 	}
	// })
	// fullScreenPhotoViewBtn.addEventListener('click', () => {
	// 	handleFullScreen(fullScreenPhotoViewBtn)
	// })

	const hamburgerNav = document.querySelector('.hamburger-nav')
	const exitBtn = hamburgerNav.querySelector('.exit')
	const hamburgerBtn = document.querySelector('.hamburger')
	hamburgerBtn.addEventListener('click', () => {
		document.body.classList.add('overflow-hidden')
		hamburgerNav.classList.remove('hidden')
	})
	exitBtn.addEventListener('click', () => {
		document.body.classList.remove('overflow-hidden')
		hamburgerNav.classList.add('hidden')
	})
	console.log('finish');
}
