const searchButton = document.querySelector('.open-modal')
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.modal-close-button') ;

searchButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-clouse')
});

closeModal.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-container-clouse')
})
