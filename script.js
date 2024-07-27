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
