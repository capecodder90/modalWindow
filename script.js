'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
    //console.log('Button clicked.');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// for loops and if else statements don't need to create a block for one line of code (curly {} braces)
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// listen for events everywhere on the page
document.addEventListener('keydown', function (e) {
    //console.log(e);
    // if the event handler object contains the "Escape" key as the key name's value, AND the modal does NOT (!) contain the class of .hidden, run the closeModal function to add .hidden to the class list
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});