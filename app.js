let navs = document.querySelectorAll('.nav-item');

navs.forEach(navItem => {
    navItem.addEventListener('click', showTab);
})

function showTab(event) {
    event.preventDefault();

    document.querySelector('.nav-list .nav-item.selected').classList.remove('selected')
    event.target.closest('.nav-item').classList.add('selected');
    let data = event.target.closest('.nav-item').dataset.nav;

    document.querySelector('.tabs .tab-item.selected').classList.remove('selected');
    document.querySelector(`.tabs .tab-item[data-tab ='${data}']`).classList.add('selected');

}