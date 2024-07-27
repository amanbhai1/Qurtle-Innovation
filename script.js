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
    if (window.location.pathname.endsWith('about.html')) {
        document.body.style.backgroundImage = "url('/Assets/interior-header-image.jpg')";
        
        if (window.innerWidth <= 855) {
            document.body.style.backgroundSize = 'contain';
        }
        if (window.innerWidth <= 560) {
            document.body.style.backgroundSize = '600%';
        }
    }
});

