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
