export default function(Bot) {

    Bot.hideCpanelMenu = () => {
        const interval = setInterval(() => {
            const wrapper = window.frames['left'].document.querySelector('.wrapper');
    
            if (wrapper) {
                clearInterval(interval);
                
                wrapper.style.display = 'none';
            }
        }, 100);
    }

    Bot.createBotMenu = () => {
        const interval = setInterval(() => {
            const frameLeft = window.frames['left'].document.querySelector('#popup');
            
            if (frameLeft) {
                clearInterval(interval);

                const avatar = document.createElement('img');
                avatar.src = Bot.avatar;
                avatar.onclick = () => {
                    window.open('https://sdn01fmu.focomultimidia.com:10000/');
                    window.close();
                }

                const speachBoubble = document.createElement('div');
                speachBoubble.classList.add('speach-boubble');
                speachBoubble.innerText = 'Crie uma zona master no campo abaixo!';

                const domainInput = document.createElement('input');
                domainInput.type = 'text';
                domainInput.name = 'domain';
                domainInput.autofocus = true;
                domainInput.placeholder = 'dominio.com.br';
                
                const form = document.createElement('form');
                form.onsubmit = (event) => Bot.submitDomain(event);
                form.appendChild(domainInput);

                const logoutLink = document.createElement('a');
                logoutLink.href = '/session_login.cgi?logout=1';
                logoutLink.innerText = 'Sair';
                logoutLink.id = 'logout';
                
                const menu = document.createElement('div');
                menu.classList.add('bot-menu');
                menu.appendChild(avatar);
                menu.appendChild(speachBoubble);
                menu.appendChild(form);
                menu.appendChild(logoutLink);

                frameLeft.appendChild(menu);
            }
        }, 2000);
    }

    Bot.submitDomain = event => {
        event.preventDefault();

        Bot.domain = event.target[0].value;
        Bot.setStorage('domain', Bot.domain);

        event.target[0].value = 'Deixa comigo!';

        Bot.navigateTo('create-master-zone');
    }

}