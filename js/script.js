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


const selectDropDown = () => {
    const arrow = document.querySelector('.sort__select-arrow');
    const dropdown = document.querySelector('.sort__dropdown');
    const content = document.querySelector('.sort__dropdown-content')
    const selectTitle = document.querySelector('.sort__select-title');

    const manageDropdown = () => {
        let flag = false;
        return () => {
            flag = !flag;
            if (flag) {
                arrow.classList.add('_open');
                dropdown.style.display = 'block';
            } else {
                arrow.classList.remove('_open');
                dropdown.style.display = 'none';
            }
        }
    }

    const selectItem = (e) => {
        selectTitle.innerHTML = e.target.innerHTML;
    }

    arrow.addEventListener('click', manageDropdown());
    content.addEventListener('click', selectItem)

}

selectDropDown();