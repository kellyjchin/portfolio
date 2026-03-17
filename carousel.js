window.addEventListener('load', function () {

    function initGlider() {
        let glider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        scrollLock: true,
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 768,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                duration: 0.25
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
            }
        ]
        });
    }

    initGlider();

    let switchToGridBtn = document.querySelector('.enable-grid');
    switchToGridBtn.addEventListener('click', () => {
        glider.destroy();
    })
});