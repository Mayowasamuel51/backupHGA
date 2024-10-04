const flexContainer = document.querySelector('.flex-container');
const flexContainer2 = document.querySelector('.flex-container-two');
let translationAmount = 0;

// Add an event listener to the window's scroll event
window.addEventListener('scroll', () => {
    if (isInView(flexContainer)) {
        startScrolling(flexContainer, flexContainer2);
    } else {
        translationAmount = 0; 
        flexContainer.style.transform = 'translateX(0)';
        flexContainer2.style.transform = 'translateX(0)';
    }
});

// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

// Function to start scrolling the flex container
let scrollPosition = 0;
function startScrolling(flexContainer, flexContainer2) {
    const containerWidth = flexContainer.offsetWidth;
    const items = flexContainer.children;

    const totalItemsWidth = [...items].reduce((total, item) => total + item.innerWidth, 0);

    scrollPosition += 10;

    if (scrollPosition > totalItemsWidth - containerWidth) {
        scrollPosition = 0;
    }

    flexContainer.style.transform = `translateX(-${scrollPosition}px)`;
    flexContainer2.style.transform = `translateX(${scrollPosition - containerWidth - scrollPosition}px)`;
}
