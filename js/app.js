function alterarStatus(id) {
    let jogos = document.getElementById(`game-${id}`);
    let imagem = jogos.querySelector('.dashboard__item__img');
    let button = jogos.querySelector('.dashboard__item__button'); 

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }

    if (button.classList.contains('dashboard__item__button--return')) {
        button.classList.remove('dashboard__item__button--return');
        document.querySelector('.dashboard__item__button--return')
        button.innerHTML = 'Alugar';
    } else {
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    }

}

