document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        autoplay: 3000 
    }).mount();
});

const button = document.getElementById('getInTouchBtn');
button.addEventListener('click', function() {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
});