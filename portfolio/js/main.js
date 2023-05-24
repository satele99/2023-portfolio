const toggleBun = document.getElementById('toggle')

toggleBun.addEventListener('click', ()=> {
    const dropdown = document.querySelector('.nav_dropdown');
    dropdown.classList.toggle('open')
    const isOpen = dropdown.classList.contains('open')

    toggleBun.classList = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
})

function copyEmail() {
    navigator.clipboard.writeText('satele.works@gmail.com')
}