const body = document.querySelector('body');
const btns = body.querySelectorAll('.btn');
const close = body.querySelector('.modal__close');
const modal = body.querySelector('.modal');
const pricesSwitch = body.querySelector('.prices__switch input');
const discount = body.querySelector('.prices__discount');
const coaches = body.querySelectorAll('.team__coach');
const links = body.querySelectorAll('.team__coach-links');

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        const timerId = setTimeout(showElement, 300, modal);
        /* showElement(modal); */
        body.style.overflow = 'hidden';
    });
});

close.addEventListener('click', (e) => {
    const timerId = setTimeout(hideElement, 300, modal);
    /* hideElement(modal); */
    body.style.overflow = 'visible';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        /* hideElement(modal); */
        const timerId = setTimeout(hideElement, 300, modal);
        body.style.overflow = 'visible';
    }
});


pricesSwitch.addEventListener('click', (e) => {
    let timerId;
    if (e.target.checked) {
        timerId = setTimeout(showElement, 300, discount);
        /* showElement(discount); */
    } else {
        /* hideElement(discount); */
        timerId = setTimeout(hideElement, 300, discount);
    }
});



coaches.forEach((coach, index) => {
    let timerId;
    coach.addEventListener('mouseover', (e) => {
        timerId = setTimeout(RemoveAndAddClass, 100, links[index], 'hide', 'showDf')
    });
    coach.addEventListener('mouseout', (e) => {
        timerId = setTimeout(RemoveAndAddClass, 100, links[index], 'showDf', 'hide');
    });
})