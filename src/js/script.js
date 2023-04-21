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
const headerList = body.querySelector('.header__list');
const benefitsItems = body.querySelectorAll('.benefits__item');
const benefitsSubtitles = body.querySelectorAll('.benefits__text .benefits__subtitle');
let clickCounter = 0;
let burgerIsActive = false;
const modalIsOpen = { value: false };

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (!burger.classList.contains('active')) {
            setTimeout(() => {
                modal.classList.remove('hide');
            }, 300);
            body.classList.toggle('lock');
            modalIsOpen.value = true;
        }
    });
});


close.addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


pricesSwitch.addEventListener('click', (e) => {
    if (e.target.checked) {
        setTimeout(() => {
            discount.classList.remove('hide');
        }, 300);
    } else {
        setTimeout(() => {
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


let arrayTouchstartHandler = [];
let arrayTouchendHandler = [];
let arrayMouseOverHandler = [];
let arrayMouseOutHandler = [];
let hasHoverListener = false;
if (window.innerWidth < 768) {
    let handler;
    buttonWrapper.forEach((element) => {
        const arrows = element.querySelectorAll('img');
        handler = (event) => {
            if (clickInButtonArea(event)) {
                animationWithArrowsAndBg(element, arrows[0], arrows[1], '#fff');
            }
        };
        element.addEventListener('touchstart', handler);
        arrayTouchstartHandler.push(handler);
        handler = (event) => {
            animationWithArrowsAndBg(element, arrows[1], arrows[0], '#28282A');
        };
        element.addEventListener('touchend', handler);
        arrayTouchendHandler.push(handler);
    });  
} else {
    let handler;
    buttonWrapper.forEach((element) => {
        const arrows = element.querySelectorAll('img');
        handler = (e) => {
            animationWithArrowsAndBg(element, arrows[0], arrows[1], '#fff');
        };
        element.addEventListener('mouseover', handler);
        arrayMouseOverHandler.push(handler);

        handler = (e) => {
            animationWithArrowsAndBg(element, arrows[1], arrows[0], '#28282A');
        };
        element.addEventListener('mouseout', handler);
        arrayMouseOutHandler.push(handler);
    });
    hasHoverListener = true;
}



window.addEventListener('resize', () => {
    let handler;
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
                handler = (event) => {
                    if (clickInButtonArea(event)) {
                        animationWithArrowsAndBg(element, arrows[0], arrows[1], '#fff');
                    }
                };
                element.addEventListener('touchstart', handler);
                arrayTouchstartHandler.push(handler);
        
                handler = (event) => {
                    animationWithArrowsAndBg(element, arrows[1], arrows[0], '#28282A');
                };
                element.addEventListener('touchend', handler);
                arrayTouchendHandler.push(handler);
            });
            hasHoverListener = false;
        }
    } else {
        if (!hasHoverListener) {
            buttonWrapper.forEach((element, index) => {
                const arrows = element.querySelectorAll('img');
                element.removeEventListener('touchstart', arrayTouchstartHandler[index]);
                element.removeEventListener('touchend', arrayTouchendHandler[index]);
            });
            arrayTouchstartHandler = [];
            arrayTouchendHandler = [];

            buttonWrapper.forEach((element) => {
                const arrows = element.querySelectorAll('img');
                handler = (e) => {
                    animationWithArrowsAndBg(element, arrows[0], arrows[1], '#fff');
                };
                element.addEventListener('mouseover', handler);
                arrayMouseOverHandler.push(handler);
        
                handler = (e) => {
                    animationWithArrowsAndBg(element, arrows[1], arrows[0], '#28282A');
                };
                element.addEventListener('mouseout', handler);
                arrayMouseOutHandler.push(handler);
            });
            hasHoverListener = true;
        }
    }
});



let handlersOfClick = [];
let handlersOfTouchstart = [];
const buttonBack = buttonWrapper[0];
const buttonForward = buttonWrapper[1];
buttonWrapper.forEach((currentButton) => {
    let handler;
    if (window.innerWidth < 768) {
        handler = (event) => {
            if (clickInButtonArea(event)) {
                /* console.log('touchstart'); */
                switchToNewClient(currentButton);
            }
        }
        currentButton.addEventListener('touchstart', handler);
        handlersOfTouchstart.push(handler);
    } else {
        handler = () => {
            /* console.log('click'); */
            switchToNewClient(currentButton);
        }
        currentButton.addEventListener('click', handler);
        handlersOfClick.push(handler);
    }
});


window.addEventListener('resize', () => {
    let handler;
    if (window.innerWidth < 768) {
        buttonWrapper.forEach((currentButton, index) => {
            currentButton.removeEventListener('click', handlersOfClick[index]);
            currentButton.removeEventListener('touchstart', handlersOfTouchstart[index]);
        });
        handlersOfClick = [];
        handlersOfTouchstart = [];

        buttonWrapper.forEach((currentButton) => {
            handler = (event) => {
                if (clickInButtonArea(event)) {
                    /* console.log('touchstart'); */
                    switchToNewClient(currentButton);
                }
            }
            currentButton.addEventListener('touchstart', handler);
            handlersOfTouchstart.push(handler);
        });
    } else {
        buttonWrapper.forEach((currentButton, index) => {
            currentButton.removeEventListener('click', handlersOfClick[index]);
            currentButton.removeEventListener('touchstart', handlersOfTouchstart[index]);
        });
        handlersOfClick = [];
        handlersOfTouchstart = [];

        buttonWrapper.forEach((currentButton) => {
            handler = () => {
                /* console.log('click'); */
                switchToNewClient(currentButton);
            }
            currentButton.addEventListener('click', handler);
            handlersOfClick.push(handler);
        });
    }
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

function changeStateOfBurger() {
    burger.classList.toggle('active');
    headerList.classList.toggle('active');
    body.classList.toggle('lock');
    burgerIsActive = !burgerIsActive;
}

burger.addEventListener('click', () => {
    changeStateOfBurger();
    if (burgerIsActive) {
        headerList.style.height = `${document.documentElement.clientHeight}px`;
    } else {
        headerList.style.height = 'unset';
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 768) {
        if (burgerIsActive) {
            changeStateOfBurger();
            headerList.style.height = 'unset';
        }
    }
});

/* в случае когда мы переходим по ссылке (из бургера) к выбранной секции нужно сделать так, чтобы само меню бургер пропадало,
 как при нажатии на крестик. Данный код именно это и делает */
headerList.addEventListener('click', (e) => {
    if (e.target.tagName == "A" && window.innerWidth < 768) {
        changeStateOfBurger();
        headerList.style.height = 'unset';
    }
});



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