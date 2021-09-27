const modalWindow = () => {
    const modal = document.querySelector('.filters-modal');
    const closeButton = document.querySelector('.filters-modal-close');
    const openButton = document.querySelector('.catalog__filters-button');
    openButton.addEventListener('click', () => {
        modal.classList.toggle('filters-modal--open', true);
        closeButton.focus();
    })
    closeButton.addEventListener('click', () => {
        modal.classList.toggle('filters-modal--open', false);
    })
}

modalWindow();


