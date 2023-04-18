/* function showElement(element) {
    element.classList.remove('hide');
    element.classList.add('makeDisplayBlock');
}

function hideElement(element) {
    element.classList.remove('makeDisplayBlock');
    element.classList.add('hide');
}

function RemoveAndAddClass(element, classToRemove, classToAdd) {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
} */


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


