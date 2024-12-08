let currentIndex = 0;
const items = document.querySelectorAll('.item');
const totalItems = items.length;

function showCurrentItem() {
    items.forEach((item, index) => {
        item.classList.remove('active'); 
        if (index === currentIndex) {
            item.classList.add('active'); 
        }
    });
}
showCurrentItem();

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showCurrentItem();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showCurrentItem();
});
