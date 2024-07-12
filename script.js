
document.addEventListener('DOMContentLoaded', function () {

 // Toggle Button
 const toggleButton = document.querySelector('.navbar__mobile-menu-toggle'); 

 const mobileMenu = document.querySelector('.navbar__mobile-menu-items'); 

 toggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
 });  
    
    
    
 // Video Modal
 const modal = document.getElementById('videoModal');
    
 const videoButton = document.querySelector('.preview__video-play-button');

 const closeButton = document.querySelector('.modal__close-button');
    
 const videoPlayer = document.getElementById('videoPlayer');
    

    // Open modal when clicked
    videoButton.addEventListener('click', function () {
        modal.style.display = 'block';

        // Replace the src attribute with the video URL
        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw'; 

        // Close modal on close button click
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });

        // Close modal on outter click
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    
    
    
    });
    

});


// Navbar Scroll
window.addEventListener('scroll', function () {
    const navbarScroll = document.querySelector('.navbar'); 
    if (this.window.scrollY > 0) {
        navbarScroll.classList.add('narbar--scroll');
    } else {
        navbarScroll.classList.remove('.narbar--scroll');
    }
}); 



