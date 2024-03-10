$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar-custom').addClass("sticky");
        } else {
            $('.navbar-custom').removeClass("sticky");
        }
        var aboutBtn=document.getElementById("btn-about");
        if (this.scrollY > 500) {   
            $('.scroll-up-btn').addClass("show"); 
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    setTimeout(function() {
        var typed1 = new Typed(".typing", {
          strings: ["We promote sustainability and ensure lasting value for partners and projects."],
          typeSpeed: 50,
          loop: false
        });
      }, 500 );
    initIntersectionObserver();
    // var now=Date.now();
    // var love = new Date("2021-11-22");
    // var count=now-love;
    // var days = Math.floor(count / (1000 * 60 * 60 * 24));
    // var typed = new Typed(".typing-2", {
    //     strings: [""],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar-custom .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function() {
        $('.navbar-custom .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    
    //Show member
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function initIntersectionObserver() {
    const animatedElements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
