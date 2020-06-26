import { tns } from 'tiny-slider/src/tiny-slider'

const carousels = document.querySelectorAll('.gallery--carousel')

const config = {
    axis: 'horizontal',
    items: 1,
    slideBy: 'page',
    mouseDrag: true,
    arrowKeys: true,
    autoplay: false,
    loop: false,
    rewind: false,
    // lazyload: true,
    // lazyloadSelector: '',
};

carousels.forEach((carousel) => {
    const list = carousel.querySelector('.gallery__list')
    const thumbnails = carousel.querySelector('.gallery__thumbnails')

    const slider = tns({
        ...config,
        container: list,
        navContainer: thumbnails,
    })

    thumbnails.querySelectorAll('a').forEach((thumbnail) => {
        thumbnail.addEventListener('click', (event) => {
            event.preventDefault()

            const index = Array.from(thumbnails).indexOf(thumbnail)

            slider.goTo(index)
        })
    })
})
