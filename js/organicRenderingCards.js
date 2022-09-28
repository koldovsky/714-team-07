(function () {
    
    const cards = [
        {
            id: 1,
            img: "../img/organic_block/icon-delivery.svg",
            title: "Free Delivery",
            description: "Free delivery for all orders from $49."
        },
        {
            id: 2,
            img: "../img/organic_block/icon-support.svg",
            title: "Support",
            description: "Want to change your order? Just contact us."
        },
        {
            id: 3,
            img: "../img/organic_block/icon-easy.svg",
            title: "Discounts",
            description: "We have weekly discounts on selected dishes."
        },
        {
            id: 4,
            img: "../img/organic_block/icon-support.svg",
            title: "Easy App",
            description: "Place orders on the go with our app."
        },
    ];

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