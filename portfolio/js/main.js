const toggleBun = document.getElementById('toggle')

toggleBun.addEventListener('click', ()=> {
    const dropdown = document.querySelector('.nav_dropdown');
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleBun.classList = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
})

// const respToggle = () => {
//     const toggle = document.querySelector('.toggle-btn');
//     const toggleIcon = document.querySelector('.toggle-btn i');
//     const dropdown = document.querySelector('.dropdown');
//     dropdown.classList.toggle('open')
//     const isOpen = dropdown.classList.contains('open')

//     toggleIcon.classList = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
// }