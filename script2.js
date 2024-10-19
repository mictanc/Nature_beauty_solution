document.addEventListener('DOMContentLoaded', function() {
    // Services Data
    // const services = [
    //     {
    //         name: 'Beard Trim',
    //         description: 'Beard Trim + Shape Up',
    //         duration: '30 Minutes',
    //         price: 25
    //     },
    //     {
    //         name: 'Hot Towel Shave',
    //         description: 'Hot Towel + Straight Razor Shave',
    //         duration: '30 Minutes',
    //         price: 30
    //     },
    //     {
    //         name: "Kid's Haircut",
    //         description: "Haircut for Kid's 10 & Under",
    //         duration: '30 Minutes',
    //         price: 25
    //     },
    //     {
    //         name: "Men's Haircut & Color",
    //         description: 'Haircut + Grey Coverage',
    //         duration: '30 Minutes',
    //         price: 60,
    //         note: '* Markus Joeright Only'
    //     }
    // ];



    // Populate Services
    // const serviceList = document.querySelector('.service-list');
    // services.forEach(service => {
    //     const serviceItem = document.createElement('div');
    //     serviceItem.className = 'service-item';
    //     serviceItem.innerHTML = `
    //         <div class="service-info">
    //             <h3>${service.name}</h3>
    //             <p>${service.description}</p>
    //             <p>${service.duration}</p>
    //             ${service.note ? `<p class="note">${service.note}</p>` : ''}
    //         </div>
    //         <div class="service-price">$${service.price}</div>
    //     `;
    //     serviceList.appendChild(serviceItem);
    // });

    // Populate Team
    const teamGrid = document.querySelector('.team-grid');
    team.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.bio}</p>
            <button class="book-btn" onclick="bookWithBarber('${member.name}')">
                BOOK WITH ${member.name.split(' ')[0]}
            </button>
        `;
        teamGrid.appendChild(teamMember);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Booking functions
function bookAppointment() {
    alert('Booking system coming soon!');
}

function bookWithBarber(name) {
    alert(`Booking with ${name} coming soon!`);
}

// Handle navigation menu for mobile devices
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});





const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeIcon = document.getElementById('close-icon');

// Open the side menu
menuIcon.addEventListener('click', function() {
    sideMenu.classList.add('open');
});

// Close the side menu
closeIcon.addEventListener('click', function() {
    sideMenu.classList.remove('open');
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        // loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
