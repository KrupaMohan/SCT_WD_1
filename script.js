function generateRandomNumbers() {
    const numbersList = document.getElementById('contactNumbers');
    numbersList.innerHTML = ''; 
    for (let i = 0; i < 10; i++) {
        const randomNumber = '9876543' + Math.floor(Math.random() * 10000); 
        const listItem = document.createElement('li');
        listItem.textContent = randomNumber;
        numbersList.appendChild(listItem);
    }
}

// Change navbar color and section background color on scroll
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll('section');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#222";
        sections.forEach(section => {
            section.classList.add('scrolled');
        });
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        sections.forEach(section => {
            section.classList.remove('scrolled');
        });
    }
};

// Redirect to cost and locations section on button click
document.getElementById('knowMoreBtn').addEventListener('click', function() {
    document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
});

// Generate random numbers on page load
window.onload = function() {
    generateRandomNumbers();
};
