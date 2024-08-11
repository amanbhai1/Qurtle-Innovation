function openSidebar() {
    document.getElementById("navbar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("navbar").classList.remove("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Blog');
    button.addEventListener('click', function() {
        window.location.href = 'blog.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('more');
    button.addEventListener('click', function() {
        window.location.href = 'about.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('about');
    button.addEventListener('click', function() {
        window.location.href = 'about.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('service');
    button.addEventListener('click', function() {
        window.location.href = 'services.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('contact');
    button.addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('apply');
    button.addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/company/qurtleinnovations/';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('about.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        document.body.style.backgroundSize ="180%";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('services.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        document.body.style.backgroundSize ="180%";
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '310%';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
        
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('contact.html')) {
        document.body.style.backgroundImage = "url('/Assets/bg2.jpg')";
        document.body.style.backgroundSize ="100%";
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '200%';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '110%';
        }
        
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('industries.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        document.body.style.backgroundSize ="180%";
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '310%';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
        
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('about.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '310%';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('services.html')) {
        var missionElements2 = document.querySelectorAll('.our-mission-data ul li');
        var missionElements5 = document.querySelectorAll('.our-mission-data p');
        var missionElements3 = document.querySelectorAll('.our-mission h1');
        var missionElements4 = document.querySelectorAll('.active1');

        missionElements2.forEach(function(element) {
            element.style.fontSize = '15px'; 
            element.style.margin = '10px 130px';
            if (window.innerWidth <= 855) {
                element.style.fontSize = '10px';
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '15px';
                element.style.margin = '10px 50px';
            }
        });

        missionElements3.forEach(function(element) {
            element.style.fontSize = '25px'; 
            if (window.innerWidth <= 855) {
                element.style.fontSize = '25px';
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '18px';
            }
        });

        missionElements5.forEach(function(element) {
            element.style.fontSize = '25px'; 
            if (window.innerWidth <= 855) {
                element.style.fontSize = '25px';
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '16px';
            }
        });

        missionElements4.forEach(function(element) {
            element.style.width = '25%'; 
            if (window.innerWidth <= 855) {
                element.style.width = '25px';

            }
            if (window.innerWidth <= 560) {
                element.style.width= '60%';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('services.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '310%';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.our-mission h1');
    const fadeInElements1 = document.querySelectorAll('.our-mission-data p b');
    const fadeInElements2= document.querySelectorAll('.our-mission-data p');
    const fadeInElements3 = document.querySelectorAll('.our-mission-data ul li');
    const fadeInElements4 = document.querySelectorAll('.container');
    const fadeInElements5= document.querySelectorAll('.our-cap-data p b');
    const fadeInElements6= document.querySelectorAll('.our-cap-data p');


    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
    fadeInElements1.forEach(element => {
        observer.observe(element);
    });
    fadeInElements2.forEach(element => {
        observer.observe(element);
    });
    fadeInElements3.forEach(element => {
        observer.observe(element);
    });
    fadeInElements4.forEach(element => {
        observer.observe(element);
    });
    fadeInElements5.forEach(element => {
        observer.observe(element);
    });
    fadeInElements6.forEach(element => {
        observer.observe(element);
    });
});