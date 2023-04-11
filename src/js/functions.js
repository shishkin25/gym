function showElement(element) {
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
}


/* как будто бы данные отправляются на сервер */
function formSubmit (event) {
    event.preventDefault();
    modalForm.reset();
    const timerId = setTimeout(hideElement, 250, modal);
    body.classList.toggle('lock');
    const timerId2 = setTimeout(alert, 300, 'Ваша заявка отправлена!');
}
