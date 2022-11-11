window.addEventListener('click', function (event) {

    let counter;


    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.cart__wrap__inner__item__left__info__total__counter');
        
        counter = counterWrapper.querySelector('[data-counter');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        
    }
});