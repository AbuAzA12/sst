

function initPlatformEffects() {

    const steamLinks = document.querySelectorAll('.steam-link');
    steamLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const effect = document.createElement('div');
            effect.className = 'steam-effect-small';
            effect.style.left = `${Math.random() * 80 + 10}%`;
            link.appendChild(effect);
            
            setTimeout(() => {
                effect.remove();
            }, 1000);
        });
    });
    
    const psLinks = document.querySelectorAll('.ps-link');
    psLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            link.style.setProperty('--ps-x', `${x}px`);
            link.style.setProperty('--ps-y', `${y}px`);
        });
    });
    
    const xboxLinks = document.querySelectorAll('.xbox-link');
    xboxLinks.forEach(link => {
        let timer;
        link.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            link.style.boxShadow = '0 0 15px #107c10';
        });
        
        link.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                link.style.boxShadow = 'none';
            }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', initPlatformEffects);

function initPlatformPage() {
    const platform = window.location.pathname.split('.')[0].replace('/', '');
    
    if (platform === 'steam' || platform === 'playstation' || platform === 'xbox') {
        document.body.classList.add(`${platform}-theme`);
        
        const themeContainer = document.createElement('div');
        themeContainer.className = `${platform}-effects`;
        document.body.prepend(themeContainer);
        
        switch (platform) {
            case 'steam':
            
                setInterval(() => {
                    const steam = document.createElement('div');
                    steam.className = 'steam-particle';
                    steam.style.left = `${Math.random() * 100}%`;
                    themeContainer.appendChild(steam);
                    
                    setTimeout(() => {
                        steam.remove();
                    }, 5000);
                }, 300);
                break;
                
            case 'playstation':
                
                const lights = document.createElement('div');
                lights.className = 'ps-light-effect';
                themeContainer.appendChild(lights);
                break;
                
            case 'xbox':
            
                setInterval(() => {
                    const circle = document.createElement('div');
                    circle.className = 'xbox-pulse-circle';
                    circle.style.left = `${Math.random() * 100}%`;
                    circle.style.top = `${Math.random() * 100}%`;
                    themeContainer.appendChild(circle);
                    
                    setTimeout(() => {
                        circle.remove();
                    }, 2000);
                }, 500);
                break;
        }
    }
}

window.addEventListener('load', initPlatformPage);