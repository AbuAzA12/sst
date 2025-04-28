
const featuredGames = [
    {
        id: 1,
        name: "Cyberpunk 2077",
        platform: "steam",
        category: "rpg",
        price: 199,
        discount: 50,
        image: "https://via.placeholder.com/300x150?text=Cyberpunk+2077"
    },
    {
        id: 2,
        name: "God of War: Ragnarok",
        platform: "playstation",
        category: "action",
        price: 249,
        discount: 30,
        image: "https://via.placeholder.com/300x150?text=God+of+War"
    },
    {
        id: 3,
        name: "Halo Infinite",
        platform: "xbox",
        category: "fps",
        price: 179,
        discount: 40,
        image: "https://via.placeholder.com/300x150?text=Halo+Infinite"
    },
    {
        id: 4,
        name: "FIFA 23",
        platform: "steam",
        category: "sports",
        price: 219,
        discount: 45,
        image: "https://via.placeholder.com/300x150?text=FIFA+23"
    }
];

function displayFeaturedGames() {
    const container = document.getElementById('featuredOffers');
    
    featuredGames.forEach(game => {
        const discountedPrice = game.price * (1 - game.discount / 100);
        
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <div class="price">
                    <span class="original-price">${game.price} ر.س</span>
                    <span class="discounted-price">${discountedPrice.toFixed(2)} ر.س</span>
                </div>
                <span class="discount-badge">خصم ${game.discount}%</span>
                <div class="platform-badge ${game.platform}-badge">${game.platform.toUpperCase()}</div>
            </div>
        `;
        
        container.appendChild(gameCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedGames();
    
    setTimeout(() => {
        document.querySelectorAll('.game-card').forEach((card, index) => {
            card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        });
    }, 300);
});