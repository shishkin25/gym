function closeModal() {
    setTimeout(() => {
        /* условие для случая, когда мы закрываем модальное окно после того, как была нажата кнопка submit */
        if (modalWrapper.classList.contains('hide')) {
            modalWrapper.classList.remove('hide');
            modalMessage.classList.add('hide');
        }
        modal.classList.add('hide');
    }, 300);
    modalForm.reset();
    body.classList.toggle('lock');
    modalIsOpen.value = false;
}

function animationWithArrowsAndBg(button, arrowToHide, arrowToShow, bg) {
    arrowToHide.classList.add('hide');
    arrowToShow.classList.remove('hide');
    button.style.backgroundColor = bg;
}

function switchToNewClient(currentButton) {
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

/* как будто бы отправка данных */
function formSubmit (event, modalIsOpen) {
    event.preventDefault();
    modalWrapper.classList.add('hide');
    modalMessage.classList.remove('hide');
    setTimeout(() => {
            if (modalIsOpen.value) {
                modalWrapper.classList.remove('hide');
                modalMessage.classList.add('hide');
                modal.classList.add('hide');
                body.classList.toggle('lock');
                modalForm.reset();
            }
    }, 2000);
}

function clickInButtonArea(event) {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const rect = event.target.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}


