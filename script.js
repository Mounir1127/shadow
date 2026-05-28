document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const profileImg = document.querySelector('.profile-img-container');
    const heroSection = document.querySelector('.hero-section');

    // Create Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Magnetic Effect for Nav Items
    navItems.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;
            cursor.classList.add('cursor-hover');
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0, 0) scale(1)';
            cursor.classList.remove('cursor-hover');
        });
    });

    // Magnetic Effect for Profile / Hero
    document.addEventListener('mousemove', (e) => {
        if (heroSection) {
            const x = (window.innerWidth / 2 - e.clientX) / 25;
            const y = (window.innerHeight / 2 - e.clientY) / 25;
            heroSection.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Background change on game card hover
    const gameCards = document.querySelectorAll('.game-card');
    const overlay = document.querySelector('.video-overlay');
    const bgVideo = document.getElementById('bg-video');
    const defaultGradient = "linear-gradient(180deg, rgba(18, 18, 23, 0.8) 0%, rgba(18, 18, 23, 0.4) 50%, rgba(18, 18, 23, 0.8) 100%)";

    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img').src;
            overlay.style.backgroundImage = `linear-gradient(rgba(18, 18, 23, 0.7), rgba(18, 18, 23, 0.7)), url('${img}')`;
            if (bgVideo) bgVideo.style.opacity = '0.3';
        });

        card.addEventListener('mouseleave', () => {
            overlay.style.backgroundImage = 'none';
            if (bgVideo) bgVideo.style.opacity = '1';
        });
    });

    // Force video play
    const video = document.getElementById('bg-video');
    if (video) {
        video.style.transition = 'opacity 0.5s ease';
        video.play().catch(error => {
            console.log("Video autoplay prevented:", error);
        });
    }
});
