var swiper = new Swiper('.swiper', {
    initialSlide: 1,
    slidesPerView: 'auto',
    spaceBetween: 5,
    direction: 'horizontal',
    loop: true,
    setWrapperSize: true,
    preloadImages: false,
    lazy: {
        checkInView: true,
        loadPrevNext: true,
    },
    pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
    effect: 'slide'
});
