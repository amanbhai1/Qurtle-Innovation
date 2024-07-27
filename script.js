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
    if (window.location.pathname.endsWith('about.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        document.body.style.backgroundSize ="180%";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('services.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        document.body.style.backgroundSize ="180%";
        
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('about.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = '310';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('services.html')) {
        var missionElements = document.querySelectorAll('.our-mission');
        var missionElements2 = document.querySelectorAll('.our-mission-data ul li');
        var missionElements3 = document.querySelectorAll('.our-mission h1');
        missionElements.forEach(function(element) {
            element.style.fontSize = '9px'; 
            if (window.innerWidth <= 855) {
                element.style.fontSize = '9px';
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '9px';
            }
        });

        missionElements2.forEach(function(element) {
            element.style.fontSize = '15px'; 
            element.style.margin = '10px 130px'
            if (window.innerWidth <= 855) {
                element.style.fontSize = '15px';
                element.style.margin = '10px 60px'
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '15px';
            }
        });

        missionElements3.forEach(function(element) {
            element.style.fontSize = '9px'; 
            if (window.innerWidth <= 855) {
                element.style.fontSize = '15px';
            }
            if (window.innerWidth <= 560) {
                element.style.fontSize = '15px';
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
