const body = document.querySelector('body');
const btns = body.querySelectorAll('.btn');
const close = body.querySelector('.modal__close');
const modal = body.querySelector('.modal');
const pricesSwitch = body.querySelector('.prices__switch input');
const discount = body.querySelector('.prices__discount');
const coaches = body.querySelectorAll('.team__coach');
const links = body.querySelectorAll('.team__coach-links');
const buttonWrapper = body.querySelectorAll('.button__wrapper');
const clients = body.querySelectorAll('.clients__images-wrapper');
const contacts = body.querySelectorAll('.client__contacts');
let clickCounter = 0;

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

// заменая белой стрелки на красную при наведении на кнопку
buttonWrapper.forEach((element) => {
    const arrows = element.querySelectorAll('img');
    element.addEventListener('mouseover', (e) => {
        arrows[0].classList.add('hide');
        arrows[1].classList.remove('hide');
    });
    element.addEventListener('mouseout', (e) => {
        arrows[0].classList.remove('hide');
        arrows[1].classList.add('hide');
    });
})



const buttonBack = buttonWrapper[0];
const buttonForward = buttonWrapper[1];
buttonWrapper.forEach((currentButton) => {
    currentButton.addEventListener('click', (e) => {
        clients[clickCounter].classList.remove('choosen-client');
        contacts[clickCounter].classList.add('hide');
        if (currentButton === buttonBack) {
            if (clickCounter == 0) {
                clickCounter = 3;
            } else {
                clickCounter--;
            }
        }
        
        if (currentButton === buttonForward) {
            if (clickCounter == 3) {
                clickCounter = 0;
            } else {
                clickCounter++;
            }
        }        

        clients[clickCounter].classList.add('choosen-client');
        contacts[clickCounter].classList.remove('hide');
    });
});