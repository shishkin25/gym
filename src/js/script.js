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
        /* timerId = setTimeout(showElement, 300, discount); */
        timerId = setTimeout(RemoveAndAddClass, 300, discount, 'hide', 'makeDisplayInlineBlock');
    } else {
        /* timerId = setTimeout(hideElement, 300, discount); */
        timerId = setTimeout(RemoveAndAddClass, 300, discount, 'makeDisplayInlineBlock', 'hide');
    }
});



coaches.forEach((coach, index) => {
    let timerId;
    coach.addEventListener('mouseover', (e) => {
        timerId = setTimeout(RemoveAndAddClass, 100, links[index], 'hide', 'makeDisplayFlex');
    });
    coach.addEventListener('mouseout', (e) => {
        timerId = setTimeout(RemoveAndAddClass, 100, links[index], 'makeDisplayFlex', 'hide');
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
        const timerId = setTimeout(() => {
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
        }, 180);
    });
});


window.addEventListener('scroll', () => {
    const pageup = body.querySelector('.pageup')
    if (window.scrollY > 1200) {
        pageup.classList.remove('hide');
    } else {
        pageup.classList.add('hide');
    }
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


/* window.addEventListener('resize', (e) => {
    if (window.innerWidth < 1321) {
        body.querySelector('.components__text').classList.add('hide');
        body.querySelector('.components__text-less1320px').classList.remove('hide');
    } else {
        body.querySelector('.components__text').classList.remove('hide');
        body.querySelector('.components__text-less1320px').classList.add('hide');
    }
}); */


body.querySelector('.header__burger').addEventListener('click', () => {
    body.querySelector('.header__burger').classList.toggle('active');
    body.querySelector('.header__list').classList.toggle('active');
    body.classList.toggle('lock');
});

/* в случае когда мы переходим по ссылке (из бургера) к выбранной секции нужно сделать так, чтобы само меню бургер пропадало,
 как при нажатии на крестик. Данный код именно это и делает */
body.querySelector('.header__list').addEventListener('click', (e) => {
    if (e.target.tagName == "A" && window.innerWidth <= 767) {
        body.querySelector('.header__burger').classList.toggle('active');
        body.querySelector('.header__list').classList.toggle('active');
        body.classList.toggle('lock');
    }
});

/* benefitsSubtitles.forEach((subtitle) => {
    subtitle.remove();
});
body.querySelectorAll('.benefits__item').forEach((item, i) => {
    item.prepend(benefitsSubtitles[i]);
}); */


/* const benefitsSubtitles = body.querySelectorAll('.benefits__text .benefits__subtitle');
console.log(benefitsSubtitles);
benefitsSubtitles.forEach((subtitle) => {
    subtitle.remove();
});
console.log(benefitsSubtitles); */


const benefitsItems = body.querySelectorAll('.benefits__item');
const benefitsSubtitles = body.querySelectorAll('.benefits__text .benefits__subtitle');
window.addEventListener('resize', (e) => {
    if (window.innerWidth < 481) {
        benefitsSubtitles.forEach((subtitle) => {
            subtitle.remove();
        });
        benefitsItems.forEach((item, i) => {
            item.prepend(benefitsSubtitles[i]);
        });
    } else {
        benefitsItems.forEach((item, i) => {
            if (item.querySelector('.benefits__text .benefits__subtitle') === null) {
                item.querySelector('.benefits__text').prepend(benefitsSubtitles[i]);
            }
        });
    }
});