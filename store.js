let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
}


let favorite = document.querySelector('.favorite');

document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle('active');
}

let checkout = document.querySelector('.checkout');

document.querySelector('#checkout').onclick = () => {
    checkout.classList.toggle('active');
}