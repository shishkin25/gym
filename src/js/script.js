const body = document.querySelector('body');
const btns = body.querySelectorAll('.cause_modal');
const close = body.querySelector('.modal__close');
const modal = body.querySelector('.modal');
const modalForm = body.querySelector('.modal__form');
const pricesSwitch = body.querySelector('.prices__switch input');
const discount = body.querySelector('.prices__discount');
const coaches = body.querySelectorAll('.team__coach');
const links = body.querySelectorAll('.team__coach-links');
const buttonWrapper = body.querySelectorAll('.button__wrapper');
const clients = body.querySelectorAll('.clients__images-wrapper');
const contacts = body.querySelectorAll('.client__contacts');
const modalWrapper = body.querySelector('.modal__wrapper');
const modalMessage = body.querySelector('.modal__message');
const burger = body.querySelector('.header__burger');
let clickCounter = 0;
let burgerIsActive = false;
const modalIsOpen = { value: false };

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (!burger.classList.contains('active')) {
            const timerId = setTimeout(() => {
                modal.classList.remove('hide');
            }, 300);
            body.classList.toggle('lock');
            modalIsOpen.value = true;
        }
    });
});

close.addEventListener('click', (e) => {
    const timerId = setTimeout(() => {
        modalWrapper.classList.remove('hide');
        modalMessage.classList.add('hide');
        modal.classList.add('hide');
    }, 300);
    modalForm.reset();
    body.classList.toggle('lock');
    modalIsOpen.value = false;
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        const timerId = setTimeout(() => {
            modalWrapper.classList.remove('hide');
            modalMessage.classList.add('hide');
            modal.classList.add('hide');
        }, 300);
        modalForm.reset();
        body.classList.toggle('lock');
        modalIsOpen.value = false;
    }
});

pricesSwitch.addEventListener('click', (e) => {
    let timerId;
    if (e.target.checked) {
        timerId = setTimeout(() => {
            discount.classList.remove('hide');
        }, 300);
    } else {
        timerId = setTimeout(() => {
            discount.classList.add('hide');
        }, 300);
    }
});


let overHandler;
let outHandler;
const mouseOverHandler = (element) => {
    element.classList.remove('hide');
}
const mouseOutHandler = (element) => {
    element.classList.add('hide');
}
let arrayMouseOverHandlers = [];
let arrayMouseOutHandlers = [];
let hasListener = false;
if (window.innerWidth > 768) {
    coaches.forEach((coach, index) => {
        overHandler = () => {
            mouseOverHandler(links[index]);
        };
        outHandler = () => {
            mouseOutHandler(links[index]);
        };
        coach.addEventListener('mouseover', overHandler);
        coach.addEventListener('mouseout', outHandler);
        arrayMouseOverHandlers.push(overHandler);
        arrayMouseOutHandlers.push(outHandler);
    });
    hasListener = true;
} else {
    coaches.forEach((coach, index) => {
        links[index].classList.remove('hide');
    });
    hasListener = false;
}

window.addEventListener('resize', (e) => {
    if (window.innerWidth < 768) {
        if (hasListener){
            coaches.forEach((coach, index) => {
                coach.removeEventListener('mouseover', arrayMouseOverHandlers[index]);
                coach.removeEventListener('mouseout', arrayMouseOutHandlers[index]);
                links[index].classList.remove('hide');
                hasListener = false;
            });
            arrayMouseOverHandlers = [];
            arrayMouseOutHandlers = [];
        }
    } else {
        if (!hasListener) {
            coaches.forEach((coach, index) => {
                links[index].classList.add('hide');
                overHandler = () => {
                    mouseOverHandler(links[index]);
                };
                outHandler = () => {
                    mouseOutHandler(links[index]);
                };
                coach.addEventListener('mouseover', overHandler);
                coach.addEventListener('mouseout', outHandler);
                arrayMouseOverHandlers.push(overHandler);
                arrayMouseOutHandlers.push(outHandler);
            });
            hasListener = true;
        }
    }
});


let wasClick = false;
let arrayMouseDownHandler = [];
let arrayMouseUpHandler = [];
let arrayMouseOverHandler = [];
let arrayMouseOutHandler = [];
let hasHoverListener = false;
if (window.innerWidth < 768) {
    buttonWrapper.forEach((element) => {
        const arrows = element.querySelectorAll('img');

        let handler = (event) => {
            wasClick = clickInButtonArea(event);
            if (wasClick) {
                arrows[0].classList.add('hide');
                arrows[1].classList.remove('hide');
                element.style.backgroundColor = '#fff';
            }
        };
        element.addEventListener('touchstart', handler);
        arrayMouseDownHandler.push(handler);
        handler = (event) => {
            arrows[0].classList.remove('hide');
            arrows[1].classList.add('hide');
            element.style.backgroundColor = '#28282A';
        };
        element.addEventListener('touchend', handler);
        arrayMouseUpHandler.push(handler);
    });  
} else {
    buttonWrapper.forEach((element) => {
        const arrows = element.querySelectorAll('img');
        let handler = (e) => {
            arrows[0].classList.add('hide');
            arrows[1].classList.remove('hide');
            element.style.backgroundColor = '#fff';
        };
        element.addEventListener('mouseover', handler);
        arrayMouseOverHandler.push(handler);

        handler = (e) => {
            arrows[0].classList.remove('hide');
            arrows[1].classList.add('hide');
            element.style.backgroundColor = '#28282A';
        };
        element.addEventListener('mouseout', handler);
        arrayMouseOutHandler.push(handler);
    });
    hasHoverListener = true;
}


window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        if (hasHoverListener) {
            buttonWrapper.forEach((element, index) => {
                const arrows = element.querySelectorAll('img');
                element.removeEventListener('mouseover', arrayMouseOverHandler[index]);
                element.removeEventListener('mouseout', arrayMouseOutHandler[index]);
            });
            arrayMouseOverHandler = [];
            arrayMouseOutHandler = [];

            buttonWrapper.forEach((element) => {
                const arrows = element.querySelectorAll('img');
                let handler = (event) => {
                    wasClick = clickInButtonArea(event);
                    if (wasClick) {
                        arrows[0].classList.add('hide');
                        arrows[1].classList.remove('hide');
                        element.style.backgroundColor = '#fff';
                    }
                };
                element.addEventListener('touchstart', handler);
                arrayMouseDownHandler.push(handler);
        
                handler = (event) => {
                    arrows[0].classList.remove('hide');
                    arrows[1].classList.add('hide');
                    element.style.backgroundColor = '#28282A';
                };
                element.addEventListener('touchend', handler);
                arrayMouseUpHandler.push(handler);
            });
            hasHoverListener = false;
        }
    } else {
        if (!hasHoverListener) {
            buttonWrapper.forEach((element, index) => {
                const arrows = element.querySelectorAll('img');
                element.removeEventListener('touchstart', arrayMouseDownHandler[index]);
                element.removeEventListener('touchend', arrayMouseUpHandler[index]);
            });
            arrayMouseDownHandler = [];
            arrayMouseUpHandler = [];

            buttonWrapper.forEach((element) => {
                const arrows = element.querySelectorAll('img');
                let handler = (e) => {
                    arrows[0].classList.add('hide');
                    arrows[1].classList.remove('hide');
                    element.style.backgroundColor = '#fff';
                };
                element.addEventListener('mouseover', handler);
                arrayMouseOverHandler.push(handler);
        
                handler = (e) => {
                    arrows[0].classList.remove('hide');
                    arrows[1].classList.add('hide');
                    element.style.backgroundColor = '#28282A';
                };
                element.addEventListener('mouseout', handler);
                arrayMouseOutHandler.push(handler);
            });
            hasHoverListener = true;
        }
    }
});


// заменая белой стрелки на красную при наведении на кнопку
/* buttonWrapper.forEach((element) => {
    const arrows = element.querySelectorAll('img');
    element.addEventListener('mouseover', (e) => {
        arrows[0].classList.add('hide');
        arrows[1].classList.remove('hide');
    });
    element.addEventListener('mouseout', (e) => {
        arrows[0].classList.remove('hide');
        arrows[1].classList.add('hide');
    });
}); */


const buttonBack = buttonWrapper[0];
const buttonForward = buttonWrapper[1];
buttonWrapper.forEach((currentButton) => {
    currentButton.addEventListener('click', (e) => {
        if (window.innerWidth > 767) {
            wasClick = true;
        }
        if (wasClick) {
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
        }
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



body.querySelector('.header__burger').addEventListener('click', () => {
    body.querySelector('.header__burger').classList.toggle('active');
    body.querySelector('.header__list').classList.toggle('active');
    body.classList.toggle('lock');
    burgerIsActive = !burgerIsActive;
    if (burgerIsActive) {
        body.querySelector('.header__list').style.height = document.documentElement.clientHeight < 650 ? '650px' : `${document.documentElement.clientHeight}px`;
    } else {
        body.querySelector('.header__list').style.height = 'unset';
    }
    /* console.log(document.documentElement.clientHeight);
    console.log(body.querySelector('.header__list')); */
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 768) {
        if (burgerIsActive) {
            body.querySelector('.header__burger').classList.toggle('active');
            body.querySelector('.header__list').classList.toggle('active');
            body.classList.toggle('lock');
            body.querySelector('.header__list').style.height = 'unset';
            burgerIsActive = false;
        }
        /* body.querySelector('.header__list').style.height = 'unset';
        if (burgerIsActive) {
            body.classList.toggle('lock');
        } */
    }
});

/* в случае когда мы переходим по ссылке (из бургера) к выбранной секции нужно сделать так, чтобы само меню бургер пропадало,
 как при нажатии на крестик. Данный код именно это и делает */
body.querySelector('.header__list').addEventListener('click', (e) => {
    if (e.target.tagName == "A" && window.innerWidth < 768) {
        body.querySelector('.header__burger').classList.toggle('active');
        body.querySelector('.header__list').classList.toggle('active');
        body.classList.toggle('lock'); 
        burgerIsActive = false;
        body.querySelector('.header__list').style.height = 'unset';
    }
});


const benefitsItems = body.querySelectorAll('.benefits__item');
const benefitsSubtitles = body.querySelectorAll('.benefits__text .benefits__subtitle');

if (window.innerWidth < 481) {
    benefitsSubtitles.forEach((subtitle) => {
        subtitle.remove();
    });
    benefitsItems.forEach((item, i) => {
        item.prepend(benefitsSubtitles[i]);
    });
}
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


modalForm.addEventListener('submit', (event) => {
    formSubmit(event, modalIsOpen);
});