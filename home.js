const prev = document.getElementById("pre-btn");
const next = document.getElementById("next-btn");

next.addEventListener('click', (e) => {
    const conent = document.querySelector('.protect-container');
    
    conent.scrollLeft += 400;
    e.preventDefault();
});

prev.addEventListener('click', (e) => {
    const conent = document.querySelector('.protect-container');
    
    conent.scrollLeft -= 400;
    e.preventDefault();
});