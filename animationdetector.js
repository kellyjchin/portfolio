let welcomeTextObserver = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('slidein-right-once')
            welcomeTextObserver.unobserve(entry.target);
        }
    })
}, {

})

welcomeTextObserver.observe(document.querySelector('.welcome-text'))