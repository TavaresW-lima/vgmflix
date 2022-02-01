$('.owl-carousel').owlCarousel( {
    loop:false,
    margin:15,
    nav: true,
    stagePadding:40,
    rewind:true,
    responsive: {
        0: {
            items:2
        },
        600: {
            items:3
        },
        1000: {
            items:5
        }
    }
})