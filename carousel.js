window.addEventListener('load', function () {

    let glider = null;
    // check localStorage for carousel setting
    let savedSliderSetting = localStorage.getItem('slider-setting');
    if(savedSliderSetting === "slider") {
        initGlider(); // to be implemented
    }

    let switchToGridBtn = document.querySelector('.enable-grid');
    switchToGridBtn.addEventListener('click', () => {
        localStorage.setItem('slider-setting', 'grid');
        if (!glider) return;
        destroyAndResetGlider();
    })

    let switchToSliderBtn = document.querySelector('.enable-slider');
    switchToSliderBtn.addEventListener('click', () => {
        localStorage.setItem('slider-setting', 'slider')
        initGlider();
    })

    function destroyAndResetGlider() {
        glider.destroy();
        glider = null;
        document.querySelector('.projects-grid').classList.add('glider', 'disabled');
        document.querySelector('.dots').innerHTML = '';
    }

    function initGlider() {
        if (glider) return;

        glider = new Glider(document.querySelector('.glider'), {
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
    

});