const modalWindow = () => {
    const modal = document.querySelector('.filters-modal');
    const closeButton = document.querySelector('.filters-modal-close');
    const openButton = document.querySelector('.catalog__filters-button');
    openButton.addEventListener('click', () => {
        modal.style.display = 'block';
    })
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

modalWindow();


