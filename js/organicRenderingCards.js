(function () {
    
    const cards = 

    const cartsContainer = document.querySelector('.organic__services');

    function renderCards(cards) {
        for (const card of cards) {
            cartsContainer.innerHTML += '';  
            cartsContainer.innerHTML += `
            <div class="services__card">
                <div class="services__card-img">
                    <img src="${card.img}" alt="${card.title}"/>
                </div>
                <div class="services__card-offer">
                    <h4 class="services__card-title">${card.title}</h4>
                    <p class="services__card-text">
                        ${card.description}
                    </p>
                </div>
            </div>`;
        }
    }
    renderCards(cards);
})();