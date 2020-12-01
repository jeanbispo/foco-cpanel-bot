'use strict';

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

                const menu = document.createElement('div');
                const form = document.createElement('form');
                const domainInput = document.createElement('input');

                domainInput.type = 'text';
                domainInput.name = 'domain';
                domainInput.autofocus = true;
                domainInput.placeholder = 'dominio.com.br';

                form.onsubmit = (event) => Bot.submitDomain(event);

                form.appendChild(domainInput);
                menu.appendChild(avatar);
                menu.appendChild(form);
                frameLeft.appendChild(menu);
            }
        }, 1000);
    }

    Bot.submitDomain = event => {
        event.preventDefault();

        Bot.domain = event.target[0].value;
        Bot.setStorage('domain', Bot.domain);

        event.target[0].value = 'Deixa comigo!';

        Bot.navigateTo('create-master-zone');
    }

}