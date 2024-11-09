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

function toggleImage() {
    var img = document.getElementById('profile-image');
    var img1 = document.getElementById('profile-image1');
    var img2 = document.getElementById('profile-image2');

    if (window.innerWidth <= 768) {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    if (window.innerWidth <= 768) {
        img1.style.display = 'block';
    } else {
        img1.style.display = 'none';
    }

    if (window.innerWidth <= 768) {
        img2.style.display = 'block';
    } else {
        img2.style.display = 'none';
    }
}

window.onload = toggleImage;
window.onresize = toggleImage;


document.addEventListener("DOMContentLoaded", () => {
    const progressFills = document.querySelectorAll(".progress-fill");

    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = "0";
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactform');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission (to prevent page reload)
  
        // Get form data
        const formData = new FormData(form);
        const formObject = {};
        
        // Convert FormData to a plain object
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Send form data as JSON
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:5000/contact', true); // Ensure the URL is correct

        // Set the request header for JSON
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Handle response
        xhr.onload = function () {
            if (xhr.status === 200) {
                showSuccessMessage("Your message has been sent successfully! We will get back to you soon.");
            } else {
                showErrorMessage("Sorry, there was an issue with your submission. Please try again later.");
            }
        };

        // Handle errors
        xhr.onerror = function () {
            showErrorMessage("There was a problem with the request. Please try again later.");
        };

        // Send the form data as JSON
        xhr.send(JSON.stringify(formObject)); // Send JSON object
    });

    // Function to show success message
    function showSuccessMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        messageContainer.classList.add('success');
        messageContainer.innerHTML = message;
        document.getElementById('message-container').appendChild(messageContainer);
        setTimeout(() => messageContainer.remove(), 5000);
    }

    // Function to show error message
    function showErrorMessage(message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        messageContainer.classList.add('error');
        messageContainer.innerHTML = message;
        document.getElementById('message-container').appendChild(messageContainer);
        setTimeout(() => messageContainer.remove(), 5000);
    }
});
